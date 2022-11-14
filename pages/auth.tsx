import { signIn, useSession } from "next-auth/react"
import Button from "../components/elements/button"
import { H1 } from "../components/elements/heading"
import { useRouter } from "next/router"

export default function Auth() {
    const router = useRouter()
    const session = useSession()

    session.status === "authenticated" && router.push("/")

    function Flow() {
        signIn("github")
        router.push("/new/")
    }

    return (
        <div className="grid mt-64 place-items-center space-y-4">
            <H1>Auth</H1>
            <Button
                onClick={Flow}
            >
                Sign in!
            </Button>
            <p className="my-4 text-gray-600">or</p>
            <form>
                <input
                    type="email"
                    placeholder="Your email"
                    className="rounded-lg p-4 w-96 text-center bg-gray-100 mr-4"
                />
                <Button
                    type="submit"
                >
                    Send a magic link!
                </Button>
            </form>
        </div>
    )
}
