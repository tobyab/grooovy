import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import { Toaster } from "react-hot-toast"

function MyApp({
                   Component,
                   pageProps: { session, ...pageProps },
               }: AppProps<{ session: Session }>) {
    return (
        <SessionProvider session={session}>
            <Toaster position="top-right"/>
                <Component {...pageProps}/>
        </SessionProvider>
    );
}

export default MyApp