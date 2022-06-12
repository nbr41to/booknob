import cookie from 'js-cookie';
import { useState, useEffect } from 'react';
import { BookWithAuthor, CartItem } from '../type';

export const useCart = () => {
  const currentCartJson = cookie.get('cart') || '[]';
  const [cart, setCart] = useState<CartItem[]>(JSON.parse(currentCartJson));
  const cartItemIds = cart.map((item) => item.id);
  const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  /* カートへ追加 */
  const addCart = (addedItem: BookWithAuthor) => {
    if (cartItemIds.includes(addedItem.id)) {
      const newCart = cart.map((item) => {
        if (item.id === addedItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...addedItem, quantity: 1 }]);
    }
  };

  /* カートから削除 */
  const removeCart = (removedItem: BookWithAuthor) => {
    if (!cartItemIds.includes(removedItem.id)) return;
    const newCart = cart
      .map((item) => {
        if (item.id === removedItem.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity);
    setCart(newCart);
  };

  useEffect(() => {
    cookie.set('cart', JSON.stringify(cart), { expires: 1 });
  }, [cart]);

  return {
    cart,
    addCart,
    removeCart,
    totalQuantity,
  };
};
