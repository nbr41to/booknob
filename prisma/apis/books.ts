import { BookWithAuthor } from '../../src/type';
import { prisma } from './prismaClient';

/* 本リストを取得 */
export const prismaBookFindMany = async (): Promise<BookWithAuthor[]> => {
  return await prisma.book.findMany({
    include: {
      author: true,
    },
  });
};
