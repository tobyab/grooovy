import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { Logo } from "../components/icons"

const Home: NextPage = () => {
  return (
      <div className="m-8">
          <Logo/>
          <div className="grid mt-64 place-items-center space-y-4">
            <Head>
                <title>Grooovy</title>
                <meta name="description" content="Grooovy!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
              <div>
                  <h1 className="text-5xl font-medium w-3/4">Literally the easiest way to manage your code!</h1>
                  <h2 className="text-xl w-1/2 mt-8">Coding is hard.
                      Especially when no one has any idea about what&apos;s going on!
                      Grooovy aims to make coding easier. For everyone.
                  </h2>
                  <Link
                      href="/new"
                  >
                      <button
                            className="rounded-lg p-4 bg-black text-white mt-8"
                            >
                          Let&apos;s get groovin&apos;!
                      </button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Home
