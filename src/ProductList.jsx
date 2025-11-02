import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addItem, updateQuantity } from './components/CartSlice'

// Plant product data (6+ items, 3 categories)
const products = [
  { id: 'p1', name: 'Aloe Vera', price: 15, category: 'Succulents', image: 'https://images.unsplash.com/photo-1541383603203-1c0b2ed65f3d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'p2', name: 'Snake Plant', price: 22, category: 'Indoor', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2' },
  { id: 'p3', name: 'Money Plant', price: 18, category: 'Indoor', image: 'https://images.unsplash.com/photo-1524594154902-1b3fcb3b0ae7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3' },
  { id: 'p4', name: 'Rose Bush', price: 30, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4' },
  { id: 'p5', name: 'Cactus', price: 12, category: 'Succulents', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5' },
  { id: 'p6', name: 'Lavender', price: 20, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6' },
]

const categories = ['All','Indoor','Outdoor','Succulents']

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const dispatch = useDispatch()
  const cartItems = useSelector((s) => s.cart.items || [])

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory)

  const handleAdd = (product) => {
    const existing = cartItems.find(i => i.id === product.id)
    if (existing) {
      dispatch(updateQuantity({ id: product.id, amount: 1 }))
    } else {
      dispatch(addItem(product))
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>Plants</h2>

      <label style={{marginRight:8}}>Category:</label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16,marginTop:18}}>
        {filteredProducts.map(p => (
          <div key={p.id} style={{border:'1px solid #eee',padding:12,borderRadius:8}} className="product">
            <img src={p.image} alt={p.name} style={{width:'100%',height:140,objectFit:'cover',borderRadius:6}} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => handleAdd(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;
