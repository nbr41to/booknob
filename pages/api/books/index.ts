import type { NextApiRequest, NextApiResponse } from 'next';
import type { Book } from '../../../src/type';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>,
) {
  /* 本リストを取得 */
  const books = await prisma.book.findMany();
  res.status(200).json(books);
}
