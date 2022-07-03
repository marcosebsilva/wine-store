import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout';
import GlobalStyles from '../styles/globals';
import { SearchProvider } from '../context/SearchContext';
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <CartProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </SearchProvider>
  )
}

export default MyApp
