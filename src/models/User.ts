import mongoose, { Model, model, Schema } from 'mongoose';
import { IUser } from '@/interfaces';

const useSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: {
      type: String,
      enum: {
        values: ['client', 'admin'],
        message: '{VALUE} is an invalid role',
        dafault: 'client',
        required: true
      }
    }
  },
  { timestamps: true }
);

const User: Model<IUser> = mongoose.models.User || model('User', useSchema);
export default User;
