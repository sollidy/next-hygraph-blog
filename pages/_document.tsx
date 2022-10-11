import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="msapplication-TileColor" content="#e5e7eb" />
        <meta name="theme-color" content={'#e5e7eb'} />
        <meta name="msapplication-navbutton-color" content={'#e5e7eb'} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={'#e5e7eb'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
