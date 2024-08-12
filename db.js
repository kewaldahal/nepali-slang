import dotenv from 'dotenv'
import mongoose from "mongoose";
dotenv.config ()

const DBconncetion = async () => {
    // const MONGO_URI = process.env.MONGO_URI
    const MONGO_URI = 'mongodb+srv://gmkabhosada:78ClqnkhUxz7PaXh@nepaligali.hzkbp.mongodb.net/'
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');

    } catch (error) {
        console.log('error connecting database' , error);
    }
}

export default DBconncetion;