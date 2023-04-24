import jwt from 'jsonwebtoken';
import { UserId } from '@/interfaces'

export const verifyToken = (token: string):Promise<UserId> => {
  if (!process.env.JWT_SECRET) throw new Error('JSON_SECRET not defined');
  if (token.length < 6) throw new Error('Invalid token');

  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET || '', (err, decoded) => {
        if (err) reject(err);
        resolve(decoded as UserId);
      });
    } catch (err) {
      reject(err);
    }
  });
};
