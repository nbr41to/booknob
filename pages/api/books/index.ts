import type { NextApiRequest, NextApiResponse } from 'next';
import type { BookWithAuthor } from '../../../src/type';
import { prismaBookFindMany } from '../../../prisma/apis/books';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookWithAuthor[]>,
) {
  const books = await prismaBookFindMany();
  res.status(200).json(books);
}
