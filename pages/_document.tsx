import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;600;900&display=swap" rel="stylesheet" />
       </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
