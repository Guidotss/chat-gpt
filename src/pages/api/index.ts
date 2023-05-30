import { IAChoices, IaResponse } from '@/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { error: string } | { data: IAChoices };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return GetIAinfo(req, res);
    default:
      return res.status(405).end();
  }
}

const GetIAinfo = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { prompt } = req.body;


  try {
    
    if (!prompt) {
        return res.status(400).json({ error: 'Missing prompt' });
    }

    let role = prompt.ia ? 'assistant' : 'user';


    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-0301',
        messages: [{ role, content: prompt.message }],
        temperature: 0.7
      })
    });

    const data: IaResponse = await response.json();
    console.log(data);  
    return res.status(200).json({ data: data.choices[0] });
    
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
