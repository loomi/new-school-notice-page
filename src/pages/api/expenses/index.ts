import { NextApiRequest, NextApiResponse } from 'next';

import { expensesMockData } from './mockData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await new Promise((resolve) =>
    setTimeout(() => {
      switch (req.method) {
        case 'GET':
          resolve(res.status(200).json(expensesMockData));
          break;
        default:
          resolve(res.status(501).json({ error: 'Método HTTP não suportado' }));
      }
    }, 1000),
  );
}
