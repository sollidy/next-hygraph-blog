import { AppProps } from 'next/app'
import { MainProvider } from '../src/providers/MainProvider'
import '../src/assets/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
