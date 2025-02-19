import mongoose, { Types } from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        types: String,
        required: true
    },

    email:{
        types: String,
        require: true,
    },

    password:{
        types: String,
        require: true
    },

    adrress:{
        types: String,
    },

    phone:{
        types: String,
    },

    role:{
        types: String,
        default: "user"
    },

    status:{
        types: Number,
        default: 0
    },
},
{
    timestamps: true,
 
 }
);


const User = mongoose.model("User", userSchema);
export default User;