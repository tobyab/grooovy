import Grooove from "../../components/groooves"
import useSWR from "swr"
import fetch from "../../utils/fetch"

export default function Groove() {
    const getImage = (async) => {
        useSWR
    }
    return (
        <div>
            <div className="fixed top-0 w-screen bg-white border-b p-6 flex">
                <div className="flex space-x-2">
                    <img
                        src={""}
                        className="h-8 w-8"
                    />
                    <h1 className="text-xl font-medium self-center">{"GroooveName"}</h1>
                </div>
                <div className="right-0">
                    <img
                        src={"UserImage"}
                        className="h-8 w-8 rounded-lg"
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
