import { useRef } from "react"
import Link from "next/link"
import Stage from "../components/onboarding/Stage"

export default function New() {
    const input = useRef(null);
    return (
        <div>
            <Stage
                one={true}
            />
        <div className="grid place-items-center mt-32">
            <h1 className="text-5xl font-medium">Create your groove!</h1>
            <form className="mt-16 flex flex-col space-y-4 justify-center place-items-center">
                <input
                    type="text"
                    ref={input}
                    placeholder="Groove name"
                    className="rounded-lg p-4 w-96 text-center bg-gray-100"
                    required
                />
                <Link href="/new/two">
                <button
                    type="submit"
                    className="p-4 w-48 bg-black text-white rounded-lg"
                >
                    Onwards!
                </button>
                </Link>
            </form>
        </div>
        </div>
    )
}
