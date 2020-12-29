import AppHeader from '../components/header/header'
import AppFooter from '../components/footer/footer'
import '../styles/main.sass'

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }): any {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </>
  )
}

export default MyApp
