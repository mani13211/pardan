
import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import cors from 'cors';



const connectDb = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => async (req: NextApiRequest, res: NextApiResponse) => {
  await cors()(req, res);

  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  await mongoose.connect('mongodb+srv://paymentsetup:9815897261@cluster0.xayu3wr.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return handler(req, res);
};

export default connectDb(handler);
