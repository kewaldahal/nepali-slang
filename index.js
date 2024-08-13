import express from 'express';
import DBconncetion from './db.js';
import Joke from './model.js';
// import dotenv from 'dotenv';

// dotenv.config() 
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Fuck U nigga!!!")
})

app.post('/jokes', async (req, res) => {
    try {
        const { content } = req.body;
    
        if (!content) {
          return res.status(400).json({ error: 'Content is required' });
        }
    
        const joke = new Joke({ content });
    
        await joke.save();
    
        res.status(201).json(joke);
      } catch (err) {
        console.error('Error creating joke:', err);
        res.status(500).json({ error: 'Failed to create joke' });
      }
});

DBconncetion().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running at port ${process.env.PORT}`);
        console.log("listening for requests");
    })
})