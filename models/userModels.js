import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please enter Name "],
        unique: true
    }, 
    email: {
        type: String,
        required: [true, "Please enter Email"],
        unique: true,
    },
    password :{
        type: String,
        required: [true, "Please enter Password"],
        unique: true
    },
    isVerfied : {
        type: Boolean, 
        default: false
    }, 
    isAdmin : {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: {
    type: String,
},
forgotPasswordTokenExpiry: {
    type: Date,
},
verifyToken: {
    type: String,
},
verifyTokenExpiry: {
    type: Date,
},
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
