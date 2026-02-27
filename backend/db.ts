import mongoose from "mongoose";

export async function connectDB(uri: string) {
    try {
        await mongoose.connect(uri);
        console.log("Databse connected");
    } catch (err) {
        console.error('connection error:', err);
        process.exit(1); 
    }
}

export async function disconnectDB() {
    await mongoose.disconnect();
    console.log("Databse disconnected");
}
