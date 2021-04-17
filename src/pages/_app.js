import Navbar from '../components/navbar'
import Head from 'next/head'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../scss/style.scss'
import Router from 'next/dist/next-server/lib/router/router'

NProgress.configure({
  parent: '#nproPos',
  showSpinner: false,
  easing: 'ease',
  speed: 300,
  trickleRate: 0.03,
  trickleSpeed: 300,
})

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Github Repositories</title>
      </Head>
      <Navbar />
      <div style={{ width: '100%', height: '0.5rem' }} id="nproPos" />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
