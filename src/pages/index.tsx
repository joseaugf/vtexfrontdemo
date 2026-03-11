import React from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: '1',
    name: 'Camiseta Básica',
    price: 49.9,
    image: 'https://via.placeholder.com/300x300?text=Camiseta',
    slug: '/camiseta-basica',
  },
  {
    id: '2',
    name: 'Calça Jeans',
    price: 129.9,
    image: 'https://via.placeholder.com/300x300?text=Calca+Jeans',
    slug: '/calca-jeans',
  },
  {
    id: '3',
    name: 'Tênis Casual',
    price: 199.9,
    image: 'https://via.placeholder.com/300x300?text=Tenis',
    slug: '/tenis-casual',
  },
]

export default function Home() {
  return (
    <>
      <Header storeName="VTEX FastStore Demo" />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Produtos em Destaque</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  )
}
