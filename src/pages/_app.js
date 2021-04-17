import Navbar from '../components/navbar'
import Head from 'next/head'
import '../scss/style.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Github Repositories</title>
      </Head>
      <Navbar />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
