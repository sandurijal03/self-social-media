import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: ['true', 'Password is required'],
      min: 6,
    },
    profilePic: {
      type: String,
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: String,
      enum: ['single', 'in relationship', 'complicated'],
    },
  },
  { timestamps: true },
);

export default model('User', userSchema);
