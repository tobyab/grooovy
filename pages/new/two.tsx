import { useRef } from "react"
import Link from "next/link"
import Stage from "../../components/onboarding/Stage"
import Button from "../../components/elements/button"
import { H1 } from "../../components/elements/heading"

export default function New() {
    const input = useRef(null);
    return (
        <div>
            <Stage
                two={true}
            />
        <div className="grid place-items-center mt-32">
            <H1>Add some people to your groove!</H1>
            <form className="mt-16 flex flex-col space-y-4 justify-center place-items-center">
                <div>
                    <input
                        type="text"
                        ref={input}
                        placeholder="@toby"
                        className="rounded-lg p-4 w-96 text-center bg-gray-100 mr-4"
                        required
                    />
                    <Button
                        type="submit"
                    >
                        Onwards!
                    </Button>
                </div>
                <p className="text-lg text-gray-500 pt-8">
                    They not groovin&apos; yet?
                </p>
                <Link href="/">
                    Invite them to the party!
                </Link>
            </form>
        </div>
        </div>
    )
}
