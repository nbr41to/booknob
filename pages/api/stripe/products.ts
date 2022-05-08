import type { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';
import { stripeProductsList } from './_utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stripe.Response<Stripe.ApiList<Stripe.Product>>>,
) {
  const products = await stripeProductsList();
  res.status(200).json(products);
}
