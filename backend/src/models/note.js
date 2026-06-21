import mongoose from "mongoose"
// first step: create a schema which is basically a type of data stored in the database
// second step: create a model based on the schema created

const noteschema = new mongoose.Schema({
    title: {type: String,
        required: true
    },
    content: {type: String,
        required:true
    },

}, {timestamps: true});
// createdAt, updated At
const Note = mongoose.model("note", noteschema);

export default Note