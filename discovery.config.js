module.exports = {
  // ---------------------------------------------------------------
  // VTEX Account Configuration
  // ---------------------------------------------------------------
  account: 'your-account-name', // Replace with your VTEX account name (e.g., 'mystore')

  // ---------------------------------------------------------------
  // Store Settings
  // ---------------------------------------------------------------
  storeId: 'your-account-name', // Usually the same as account
  storeUrl: 'https://your-account-name.vtex.com', // Your store's base URL
  secureSubdomain: 'secure', // Subdomain for secure pages (checkout)
  checkoutUrl: '/checkout', // Checkout path
  loginUrl: '/login', // Login path
  accountUrl: '/account', // Account page path

  // ---------------------------------------------------------------
  // Sales Channel / Trade Policy
  // ---------------------------------------------------------------
  channel: '1', // Sales channel ID (trade policy). Default is '1'

  // ---------------------------------------------------------------
  // Locale & Currency
  // ---------------------------------------------------------------
  locale: 'pt-BR', // Store locale (e.g., 'pt-BR', 'en-US', 'es-AR')
  currency: {
    code: 'BRL', // ISO 4217 currency code
    symbol: 'R$', // Currency symbol
  },

  // ---------------------------------------------------------------
  // SEO & Metadata
  // ---------------------------------------------------------------
  seo: {
    title: 'VTEX FastStore Demo',
    description: 'A blazing-fast storefront built with VTEX FastStore',
    titleTemplate: '%s | VTEX FastStore Demo',
    author: 'VTEX FastStore Demo',
  },

  // ---------------------------------------------------------------
  // Theme / Branding
  // ---------------------------------------------------------------
  theme: 'custom-theme', // Theme name defined in your project

  // ---------------------------------------------------------------
  // Analytics
  // ---------------------------------------------------------------
  analytics: {
    gtmContainerId: 'GTM-XXXXXXX', // Replace with your Google Tag Manager container ID
  },

  // ---------------------------------------------------------------
  // Session
  // ---------------------------------------------------------------
  session: {
    currency: {
      code: 'BRL',
      symbol: 'R$',
    },
    locale: 'pt-BR',
    channel: '1',
    country: 'BRA',
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
  },

  // ---------------------------------------------------------------
  // Cart
  // ---------------------------------------------------------------
  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // ---------------------------------------------------------------
  // Experimental Features
  // ---------------------------------------------------------------
  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  // ---------------------------------------------------------------
  // Performance
  // ---------------------------------------------------------------
  performance: {
    showSponsored: false, // Enable/disable sponsored products in search
  },
}
