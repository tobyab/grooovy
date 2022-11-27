import type { NextPage } from "next"
import Head from "next/head"
import Button from "../components/elements/button"
import { H1 } from "../components/elements/heading"
import toast from "react-hot-toast"
import { useSession } from "next-auth/react"
import Image from "next/image"

const Home: NextPage = () => {
    const { data: session } = useSession()
    return (
        <div className="m-8">
            {session &&(
                <div className="flex space-x-2">
                    <Image
                        src={session.user.image}
                        alt={session.user.name}
                        height={40}
                        width={40}
                        className="rounded-full"
                    />
                    <p className="self-center">{session.user.name}</p>
                </div>
            )}
            <div className="grid mt-64 place-items-center space-y-4">
                <Head>
                    <title>Grooovy</title>
                    <meta name="description" content="Grooovy!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="sm:text-left text-center">
                    <H1 className="sm:w-3/4">The groooviest way to manage your code!</H1>
                    <h2 className="text-xl sm:w-1/2 mt-8">
                        Coding is hard.
                        Especially when no one has any idea about what&apos;s going on!
                        Grooovy aims to make coding easier. For everyone.
                    </h2>
                    <Button
                        className="mt-8"
                        onClick={() => toast("Sorry, Grooovy is still in development!", {
                            icon: "🚧",
                        })}
                    >
                        Ready to get groovin&apos;?
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
