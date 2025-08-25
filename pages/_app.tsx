import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { LanguageProvider } from '../contexts/LanguageContext'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

export default MyApp
