import { Button, Card, Loader } from '@mantine/core';
import type { NextPage } from 'next';
import { useBooks } from '../src/hooks/api/useBooks';

const Home: NextPage = () => {
  const { data: books, isLoading } = useBooks();

  return (
    <div>
      <h1>Book nob</h1>

      <div>
        {isLoading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <div className='flex gap-4 p-8'>
            {books.map((book) => {
              return (
                <Card key={book.id} shadow='md' className='w-80'>
                  <div className='flex justify-between items-end'>
                    <h4>{book.title}</h4>
                    <div className='text-sm'>{book.author.name}</div>
                  </div>
                  <p className='text-sm min-h-[80px]'>{book.description}</p>
                  <Button variant='light' color='blue' fullWidth>
                    Buy now
                  </Button>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
