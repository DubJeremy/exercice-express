import mongoose from "mongoose";

const Schema =  mongoose.Schema;

const WilderSchema = new Schema({
    name: {             
        type: String,   
        unique: true,   
        required: [true, "Le nom est requis"],
        // minlength: 4 
    },                  
    city: String,
    skills: [{
        title: String,
        votes: Number
    }]
}, {
    versionKey: false
})

export default mongoose.model("Wilder", WilderSchema);