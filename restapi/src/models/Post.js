import { Schema, model } from 'mongoose';

const {
  Types: { ObjectId },
} = Schema;

const postSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
    },
    description: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

export default model('Post', postSchema);
