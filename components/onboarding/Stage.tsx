import Link from "next/link"

export default function Stage({ one, two, three }: any) {
    return (
        <div className="m-10 flex space-x-4">
            <Link href="/new">
                <div className={`cursor-pointer rounded-full h-2 w-12 bg-gray-300 ${one ? "bg-gray-900" : "w-6"}`}/>
            </Link>
            <Link href="/new/two">
                <div className={`cursor-pointer rounded-full h-2 w-12 bg-gray-300 ${two ? "bg-gray-900" : "w-6"}`}/>
            </Link>
            <Link href="/new/three">
                <div className={`cursor-pointer rounded-full h-2 w-12 bg-gray-300 ${three ? "bg-gray-900" : "w-6"}`}/>
            </Link>
        </div>
    )
}
