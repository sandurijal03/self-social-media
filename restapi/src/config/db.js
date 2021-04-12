import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connected successfully');
  } catch (err) {
    console.log('failed to connect to db', err);
  }
};

export default connectDB;
