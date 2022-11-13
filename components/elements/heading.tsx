export function H1({ children, className }: any) {
    return (
        <h1
            className={`text-5xl font-medium ${className}`}
        >
            {children}
        </h1>
    )
}
