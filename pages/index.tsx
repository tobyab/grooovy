import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Ticker from "react-ticker"

const Home: NextPage = () => {
  return (
    <div className="grid mt-32 place-items-center space-y-4">
      <Head>
        <title>Grooovy</title>
        <meta name="description" content="Grooovy!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>grooovy</h1>
    </div>
  )
}

export default Home
