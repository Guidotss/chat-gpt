import jwt from 'jsonwebtoken';

export const signDocument = (_id: string, email: string, providerId?:string, displayName?:string, photoURL?:string) => {
  if (!process.env.JWT_SECRET) throw new Error('JSON_SECRET not defined');

  return jwt.sign({ _id, email,providerId,displayName, photoURL }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
