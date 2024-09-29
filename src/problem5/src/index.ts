import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import resourceRoutes from './routes/resourceRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3200;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('Database name:', mongoose.connection.name);
  })
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/api/resources', resourceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
