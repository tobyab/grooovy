import Image from "next/image"

export default function Grooove({ ImageSrc, Title, Description, Author, AuthorAvatar, LargeLink }: any) {
    return (
        <div className="p-8 rounded-lg border">
            <picture>
                <img
                    src={ImageSrc}
                    alt={Title}
                    height="200"
                    width="400"
                    className="rounded-lg"
                />
            </picture>
            <h1 className="text-xl mt-4">{Title}</h1>
            <p className="text-gray-600">{Description}</p>
            <div className="flex space-x-2">
                <picture>
                    <img
                        src={AuthorAvatar}
                        alt={Author}
                        className="rounded-full h-8 w-8"
                    />
                </picture>
                <p className="self-center">
                    {Author}
                </p>
            </div>
        </div>
    )
}
