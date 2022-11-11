export default function Button({ children, className }: any) {
    return (
        <button
            className={`rounded-lg p-4 bg-black text-white mt-8 border hover:bg-white hover:border-black hover:text-black ${className}`}
        >
            {children}
        </button>
    )
}