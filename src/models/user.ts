import * as mongoose from 'mongoose';
import validator from 'validator';

interface IUser {
  _id: string;
  email: string;
  password: string;
  salt?: string;
  name: string;
  photo?: string;
  role: string;
  passwordConfirm: string;
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid Email Format'],
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    default: 'user', // user | admin
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
});

export default mongoose.model<IUser & mongoose.Document>('User', UserSchema);
