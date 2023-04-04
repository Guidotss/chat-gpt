import { UserService } from '@/services';
import type { NextApiRequest, NextApiResponse } from 'next';
import { couldStartTrivia } from 'typescript';

type Data = {
  ok: boolean;
  message: string;
  user: { name?: string; email: string; avatar?: string; _id: string } | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'PUT':
      return UpdateUser(req, res);
    default:
      return res
        .status(405)
        .json({ ok: false, message: 'Method not allowed', user: null });
  }
}

const UpdateUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, password, _id,imageUrl } = req.body;
  console.log(_id);

  try {
    const userService = new UserService();

    const user = await userService.updateUSerInfo(_id,name,email,imageUrl,password);

    if (!user)
      return res
        .status(400)
        .json({ ok: false, message: 'User not updated', user: null });

    return res
      .status(200)
      .json({
        ok: true,
        message: 'User updated',
        user: { name, email, _id:_id!, avatar: imageUrl }
      });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ ok: false, message: 'Internal server error', user: null });
  }
};
