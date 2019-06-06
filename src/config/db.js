/*eslint-env node*/
import mongoose from 'mongoose';
import { DB_URL } from './config';

mongoose.set('debug', true);

const connectDB =  async () => {
  try {
    await mongoose.connect( DB_URL, { 
      useNewUrlParser: true, 
      useFindAndModify: false,
      useCreateIndex: true 
    });
    console.log('MongoDB Connected...')
  } catch(err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
}

export default connectDB;