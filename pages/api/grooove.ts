import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../utils/prisma"

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "GET") {
        const entries = prisma.post.findMany({
            orderBy: {
               createdAt: "desc"
            }
        })
    }
}
