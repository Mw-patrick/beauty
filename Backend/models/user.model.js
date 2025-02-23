import mongoose, { Types } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true
    },

    adrress:{
        type: String,
    },

    phone:{
        type: String,
    },

    role:{
        type: String,
        default: "user"
    },

    status:{
        type: Number,
        default: 0
    },
},
{
    timestamps: true,
 
 }
);

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);
export default User;