import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        maxlength: [50, "Title cannot exceed "],
    },
    body: {
        type: String,
        required: [true, "Body is required"],
    },
},
{
    timestamps: true,
}
);

export default mongoose.model("Note", noteSchema);