import React from 'react'
import { useSelector } from 'react-redux'

export default function Header({ navigate }) {
  const items = useSelector((state) => state.cart.items || [])
  const totalCount = items.reduce((s, it) => s + (it.quantity || 0), 0)

  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',borderBottom:'1px solid #ddd'}}>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <h1 style={{margin:0,cursor:'pointer'}} onClick={() => navigate('home')}>GreenLeaf Store</h1>
        <nav>
          <button onClick={() => navigate('products')} style={{marginLeft:12}}>Products</button>
        </nav>
      </div>

      <div>
        <button onClick={() => navigate('cart')} aria-label="Cart">
          🛒 Cart ({totalCount})
        </button>
      </div>
    </header>
  )
}
