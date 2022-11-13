import { useRef } from "react"
import Link from "next/link"
import Stage from "../../components/onboarding/Stage"
import Button from "../../components/elements/button"
import { H1 } from "../../components/elements/heading"
import copy from "copy-to-clipboard"
import toast from "react-hot-toast"

export default function New() {
    const input = useRef(null);
    const url = "https://groove.so/"
    function copyLink() {
        copy(url)
        toast("Copy that!")
    }

    return (
        <div>
            <Stage
                three={true}
            />
            <div className="grid place-items-center mt-32">
                <H1><i>W</i>o<i>A</i>h<i>H</i> welcome to your grooove!</H1>
                <div className="mt-16 flex flex-col space-y-4 justify-center place-items-center">
                    <Link href="/new/two">
                        <Button
                            type="submit"
                        >
                            Wahoo!
                        </Button>
                    </Link>
                    <p>Pst! If you want to invite more people, just send them this link!</p>
                    <a onClick={() => copyLink()} className="cursor-pointer">
                        This link!
                    </a>
                </div>
            </div>
        </div>
    )
}
