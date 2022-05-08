import { NextApiRequest, NextApiResponse } from 'next';
import { stripeCheckoutSessionsCreate } from './_utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body, method } = req;

  if (method === 'POST') {
    try {
      const session = await stripeCheckoutSessionsCreate({
        line_items: [
          {
            ...JSON.parse(body),
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`, // Redirect URL
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.status(200).json(session);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
