import type { NextPage } from "next"
import Head from "next/head"
import Button from "../components/elements/button"
import { H1 } from "../components/elements/heading"

const Home: NextPage = () => {
  return (
    <div className="m-8">
      <div className="grid mt-64 place-items-center space-y-4">
        <Head>
            <title>Grooovy</title>
            <meta name="description" content="Grooovy!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
          <div>
              <H1 className="w-3/4">Literally the groooviest way to manage your code!</H1>
              <h2 className="text-xl w-1/2 mt-8">Coding is hard.
                  Especially when no one has any idea about what&apos;s going on!
                  Grooovy aims to make coding easier. For everyone.
              </h2>
              <Button
                  className="hover:cursor-not-allowed mt-8"
              >
                  Ready to get groovin&apos;?
              </Button>
          </div>
      </div>
    </div>
  )
}

export default Home
