import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../utils/prisma"

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "GET") {
        const posts = await prisma.post.findMany({
            orderBy: {
               createdAt: "desc"
            }
        })

        if (posts.length == 0) {
            return res.json("No posts could be found :(")
        }

        return res.json (
            posts.map((post) => ({
                id: post.id,
                title: post.title,
                description: post.description,
                createdAt: post.createdAt,
                userId: post.userId
            }))
        )
    }
}
