import { useRef } from "react"
import Link from "next/link"
import Stage from "../../components/onboarding/Stage"
import { BsGithub } from "react-icons/bs"
import { IconContext } from "react-icons"
import Button from "../../components/elements/button"

export default function New() {
    const input = useRef(null);
    return (
        <div>
            <IconContext.Provider value={{ color: "black", size: "2em" }}>
                <Stage
                    three={true}
                />
                <div className="grid place-items-center mt-32">
                    <h1 className="text-5xl font-medium">Let&apos;s <i>integrate</i>!</h1>
                    <div className="mt-16 flex flex-col space-y-4 justify-center place-items-center">
                        <Button
                            className="rounded-lg p-4 w-96 text-center bg-gray-100 text-xl"
                        >
                            <div className="flex">
                                <BsGithub className="mr-4"/> GitHub
                            </div>
                            <span className="text-sm text-gray-600">Don&apos;t worry, all your data is safe!</span>
                        </Button>
                        <Link href="/new/two">
                            <button
                                type="submit"
                                className="p-4 w-48 bg-black text-white rounded-lg"
                            >
                                Let&apos;s get groovin&apos;!
                            </button>
                        </Link>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

