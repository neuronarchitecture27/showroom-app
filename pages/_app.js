import '@/styles/globals.css'
import Head from 'next/head'

sf
export default function App({ Component, pageProps }) {
  return (
  <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
 <Component {...pageProps} />
  </div>
 )
}
