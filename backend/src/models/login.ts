import mongoose from "mongoose";

//Mongoose base schema (likle the SQL based data)
const loginSchema = new mongoose.Schema(
    {
        user_id: { type: String, required: true, unique: true, trim: true }, //This are the format of the elements, similar to SQL constraits
        uername: { type: String, required: true, trim: true, unique: true },
        password: { type: String, trim: true },
        email: { type: String, trim: true, unique: true }
    },
    { timestamps: true }
)

export const Login = mongoose.model("Login", loginSchema);