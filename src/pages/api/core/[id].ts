import { NextApiHandler } from 'next';

import { TTweet } from '../../../lib/types';
import { getTweet } from '../../../lib/utils.server';

type THandler = NextApiHandler<TTweet | { error: string }>;

const handler: THandler = async (req, res) => {
  try {
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1200');
    res.json(await getTweet(req.query.id as string));
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: JSON.stringify(error) });
  }
};

export default handler;
