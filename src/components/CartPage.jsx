import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from './CartSlice'

export default function CartPage({ navigate }) {
  const items = useSelector((state) => state.cart.items || [])
  const dispatch = useDispatch()

  const totalCount = items.reduce((s, it) => s + (it.quantity || 0), 0)
  const totalCost = items.reduce((s, it) => s + (it.quantity || 0) * (it.price || 0), 0)

  return (
    <div style={{padding:20}}>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <div>
          <p>No items in cart.</p>
          <button onClick={() => navigate('products')}>Continue Shopping</button>
        </div>
      ) : (
        <div>
          <ul style={{listStyle:'none',padding:0}}>
            {items.map((it) => (
              <li key={it.id} style={{display:'flex',gap:12,alignItems:'center',borderBottom:'1px solid #eee',padding:'12px 0'}}>
                <img src={it.image} alt={it.name} style={{width:80,height:80,objectFit:'cover',borderRadius:8}} />
                <div style={{flex:1}}>
                  <h4 style={{margin:'0 0 6px'}}>{it.name}</h4>
                  <div>${it.price}</div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
                  <div style={{display:'flex',gap:6,alignItems:'center'}}>
                    <button onClick={() => dispatch(updateQuantity({ id: it.id, amount: -1 }))}>-</button>
                    <div>{it.quantity}</div>
                    <button onClick={() => dispatch(updateQuantity({ id: it.id, amount: 1 }))}>+</button>
                  </div>
                  <button onClick={() => dispatch(removeItem(it.id))}>Delete</button>
                </div>
              </li>
            ))}
          </ul>

          <div style={{marginTop:12}}>
            <p>Total items: {totalCount}</p>
            <p>Total cost: ${totalCost}</p>
            <button onClick={() => alert('Coming Soon')}>Checkout</button>
            <button onClick={() => navigate('products')} style={{marginLeft:8}}>Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  )
}
