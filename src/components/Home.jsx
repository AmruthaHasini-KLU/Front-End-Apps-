import React from 'react'

export default function Home({ navigate }) {
  return (
    <section style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a4d3b5a1d2a1c6e3b7f8f0c4d2a7e9f')`,
      backgroundSize: 'cover',
      color: '#fff',
      textAlign: 'center',
      padding: 20
    }}>
      <div style={{background:'rgba(0,0,0,0.35)',padding:20,borderRadius:8,maxWidth:700}}>
        <h1>GreenLeaf Store</h1>
        <p style={{fontSize:18}}>We bring nature closer to your home with our beautiful indoor plants.</p>
        <button onClick={() => navigate('products')} style={{marginTop:12,padding:'8px 14px'}}>Get Started</button>
      </div>
    </section>
  )
}
