import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'basecamp:cart'

function loadInitialState() {
  if (typeof window === 'undefined') return []
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, color, quantity } = action.payload
      const lineId = `${product.id}-${color}`
      const existing = state.find((item) => item.lineId === lineId)
      if (existing) {
        return state.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...state,
        {
          lineId,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          color,
          quantity,
        },
      ]
    }
    case 'UPDATE_QUANTITY': {
      const { lineId, quantity } = action.payload
      if (quantity <= 0) {
        return state.filter((item) => item.lineId !== lineId)
      }
      return state.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item
      )
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.lineId !== action.payload.lineId)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadInitialState)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage unavailable (private browsing, etc.) — fail silently
    }
  }, [items])

  const addItem = (product, color, quantity = 1) =>
    dispatch({ type: 'ADD_ITEM', payload: { product, color, quantity } })

  const updateQuantity = (lineId, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { lineId, quantity } })

  const removeItem = (lineId) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { lineId } })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  const value = { items, addItem, updateQuantity, removeItem, clearCart, itemCount, subtotal }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
