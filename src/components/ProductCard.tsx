import React, { useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  slug: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s',
        backgroundColor: '#fff',
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>{product.name}</h3>
        <p style={{ margin: '0 0 1rem', color: '#cc0000', fontWeight: 'bold', fontSize: '1.1rem' }}>
          R$ {product.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: added ? '#28a745' : '#cc0000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            transition: 'background-color 0.3s',
          }}
        >
          {added ? '✓ Adicionado!' : 'Adicionar ao Carrinho'}
        </button>
      </div>
    </div>
  )
}
