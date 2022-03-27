import Head from 'next/head'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='sticky top-0'>
        <Header/>
      </header>
      <body className='flex flex-col justify-center h-screen'>
        <Body/>
        <Footer/>
      </body>

    </div>
  )
}
