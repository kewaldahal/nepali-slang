import mongoose from 'mongoose';

// Define the schema
const jokeSchema = new mongoose.Schema({
  content: {
    type: String,   // The joke content is a string
    required: true, // This field is required
  },
  created_at: {
    type: Date,
    default: Date.now // Automatically sets the date when the joke is created
  }
});

// Create the model
const Joke = mongoose.model('Joke', jokeSchema);

// Export the model if you are using it in other files
export default Joke; 
