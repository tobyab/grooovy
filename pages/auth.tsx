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
        </div>
    )
}
