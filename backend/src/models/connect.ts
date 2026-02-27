import mongoose from "mongoose";

//Mongoose base schema (likle the SQL based data)
const connectSchema = new mongoose.Schema(
    {
        connectID: { type: Number, required: true, unique: true, trim: true }, //This are the format of the elements, similar to SQL constraits
        name: { type: String, required: true, trim: true },
        email: { type: String, trim: true , unique: true},
        content: { type: String, trim: true }
    },
    { timestamps: true }
)

export const Connect = mongoose.model("Connect", connectSchema);