import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import donorRoutes from './routes/donorRoutes.js'
import connectMongoDB from './config/connectMongoDB.js'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(cors());
app.use(express.json());

// Routes
// Mounted on both /donors and /api/donors to support both frontend URL patterns

app.use('/api/donors', donorRoutes);


// Health check endpoint
app.get('/', (req, res) => {
  res.send('LifeLink API is running');
});



// Connect to MongoDB Atlas and start server
connectMongoDB();


  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
