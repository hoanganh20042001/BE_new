import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  uri: process.env.MONGO_URI || 'mongodb://localhost:27017/mydb', // MongoDB connection URI
  options: {
    useNewUrlParser: true, // MongoDB connection options
    useUnifiedTopology: true,
    // Add more MongoDB connection options as needed
  },
}));
