import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
        providers: [
            GithubProvider({
                clientSecret: process.env.GITHUB_SECRET,
                clientId: process.env.GITHUB_ID,
            }),
        ],
})
