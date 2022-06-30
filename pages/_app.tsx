import type { AppProps } from 'next/app'
import TheHeader from '../components/TheHeader'
import GlobalStyles from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <TheHeader />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
