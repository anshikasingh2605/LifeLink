
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

const connectMongoDB= ()=>{

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
    
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas:', err.message);
    console.log('Please ensure your MONGO_URI in .env has your valid MongoDB Atlas credentials.');
    // Start server anyway so endpoints can be reached
  
  });


}

export default connectMongoDB