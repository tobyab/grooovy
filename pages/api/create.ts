import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../utils/prisma"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const name = req.body.name
    const members = req.body.members

    if (req.method === "POST") {
        const groove = await prisma.grooove.create({
            data: {
                name: req.body.name,
                createdAt: new Date(),
                members: members,
            }
        })
    }
}
