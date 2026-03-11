import React from 'react'

interface HeaderProps {
  storeName: string
}

export default function Header({ storeName }: HeaderProps) {
  return (
    <header
      style={{
        backgroundColor: '#cc0000',
        color: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{storeName}</h1>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="/products" style={{ color: '#fff', textDecoration: 'none' }}>Produtos</a>
        <a href="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Carrinho 🛒</a>
      </nav>
    </header>
  )
}
