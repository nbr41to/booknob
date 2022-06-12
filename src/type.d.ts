import { Book, Author, User } from '@prisma/client';
type Book = Book;
type BookWithAuthor = Book & { author: Author };

type Author = Author;

type User = User;

type CartItem = BookWithAuthor & { quantity: number };
