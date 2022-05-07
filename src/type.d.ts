type Book = {
  id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  title: string;
  description: string;
  authorId: string;
  price: number;
};

type Author = {
  id: string;
  name: string;
};

type User = {
  uid: string;
  stripe_customer_id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro';
};
