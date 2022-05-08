import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
});

/* 商品リストの取得 */
export const stripeProductsList = async () => {
  return await stripe.products.list();
};

/* 支払いセッションの作成 */
export const stripeCheckoutSessionsCreate = async (
  params: Stripe.Checkout.SessionCreateParams,
  options?: Stripe.RequestOptions | undefined,
) => {
  const session = await stripe.checkout.sessions.create(params, options);
  return session;
};
