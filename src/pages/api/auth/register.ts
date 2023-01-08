import { hash } from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, password } = req.body;
  const exists = await prisma.users.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    res.status(400).json({
      eror: true,
      message: "User already exists",
    });
  } else {
    const user = await prisma.users.create({
      data: {
        firstName,
        lastName,
        email,
        password: await hash(password, 10),
      },
    });
    res.status(200).json(user);
  }
}
