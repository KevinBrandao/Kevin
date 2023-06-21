import { Layout } from '@common/layout'
import '@styles/globals.css'
import '@styles/input.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
