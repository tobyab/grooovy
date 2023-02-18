import Grooove from "../../components/groooves"
import Image from "next/image"

export default function Groove() {
    return (
        <div>
            <div className="fixed top-0 w-screen bg-white border-b p-6 flex">
                <div className="flex space-x-2">
                    <Image
                        src={""}
                        className="h-8 w-8"
                        alt="test"
                    />
                    <h2 className="text-xl font-medium self-center">{"GroooveName"}</h2>
                </div>
                <div className="right-0">
                    <Image
                        src={"UserImage"}
                        className="h-8 w-8 rounded-lg"
                        alt="test"
                    />
                </div>
            </div>
            <div className="grid mt-64 place-items-center space-y-4">
                <div className="space-y-16">
                    <Grooove
                        ImageSrc="https://pbs.twimg.com/media/Ffc9cmiXwAAtmHT?format=jpg&name=4096x4096"
                        Title="Changes made to Header"
                        Description="This is an example of a description."
                        Author="Aaron"
                        AuthorAvatar="https://aretav.com/logo.png"
                    />
                    <Grooove
                        ImageSrc="https://pbs.twimg.com/media/Ffc9cmiXwAAtmHT?format=jpg&name=4096x4096"
                        Title="Changes made to Header"
                        Description="This is an example of a description."
                        Author="Aaron"
                        AuthorAvatar="https://aretav.com/logo.png"
                        LargeLink=""
                    />
                    <Grooove
                        ImageSrc="https://pbs.twimg.com/media/Ffc9cmiXwAAtmHT?format=jpg&name=4096x4096"
                        Title="Changes made to Header"
                        Description="This is an example of a description."
                        Author="Aaron"
                        AuthorAvatar="https://aretav.com/logo.png"
                        LargeLink=""
                    />
                </div>
            </div>
        </div>
    )
}
