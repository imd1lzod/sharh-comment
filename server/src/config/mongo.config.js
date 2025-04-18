import { config } from "dotenv";
import mongoose from "mongoose"

config()

async function connectToMongoDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Databasega muvaffaqiyatli ulandi`);
        
    } catch (error) {
        console.log(`Databsega ulanishda xatolik`);
        process.exit(1)
    }
}

export default connectToMongoDb;