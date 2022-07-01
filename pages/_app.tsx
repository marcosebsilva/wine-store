import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout';
import GlobalStyles from '../styles/globals';
import { SearchProvider } from '../context/SearchContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  )
}

export default MyApp
