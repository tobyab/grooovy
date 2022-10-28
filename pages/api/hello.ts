import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../utils/prisma"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const name = "Aretav"
  const members = ["Hello", "World"]

  if (req.method === "POST") {
    const groove = await prisma.groove.create({
      data: {
        name: req.body.name,
        createdAt: new Date(),
        members: members,
      }
    })
  }
}