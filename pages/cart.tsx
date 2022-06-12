import { Button, Card } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCart } from '../src/hooks/useCart';

const Cart: NextPage = () => {
  const router = useRouter();
  const { cart, addCart, removeCart } = useCart();

  const purchaseBooks = async () => {
    if ('') return;
    const response = await fetch('/api/stripe/checkout-sessions', {
      method: 'POST',
      body: JSON.stringify({
        items: [
          ...cart.map((item) => ({
            price: item.stripe_price_id,
            quantity: item.quantity,
          })),
        ],
      }),
    });

    const session = await response.json();

    router.push(session.url);
  };

  return (
    <div>
      <header className='px-8 py-4 shadow-md'>
        <h1>Cart Details</h1>
      </header>

      <div className='flex gap-4 p-8'>
        {cart.map((book) => {
          return (
            <Card key={book.id} shadow='md' className='w-80'>
              <div className='flex justify-between items-end'>
                <h4>{book.title}</h4>
                <div className='text-sm'>{book.author.name}</div>
              </div>
              <div className='mt-3 font-bold text-xl'>¥{book.price}</div>
              <div className='relative h-52'>
                <Image
                  src={book.image_url || ''}
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <p className='text-sm min-h-[60px]'>{book.description}</p>
              <div className='flex justify-center items-center gap-4'>
                <Button
                  variant='light'
                  color='blue'
                  radius={9999}
                  onClick={() => addCart(book)}
                >
                  ＋
                </Button>
                <span>{book.quantity}</span>
                <Button
                  variant='light'
                  color='red'
                  radius={9999}
                  onClick={() => removeCart(book)}
                >
                  ー
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
      <div className='ml-8'>
        <Button variant='light' color='blue' onClick={purchaseBooks}>
          購入する
        </Button>
      </div>
    </div>
  );
};

export default Cart;
