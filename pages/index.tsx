import { Button, Input } from '@mantine/core';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Book nob</h1>
      <div className='flex gap-2'>
        <Input placeholder='your name' />
        <Button>Start</Button>
      </div>
    </div>
  );
};

export default Home;
