import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://up.yimg.com/ib/th?id=OIP.0yi26fO0azz9oRCE5I59zgHaE8&pid=Api&rs=1&c=1&qlt=95&w=163&h=108"
      },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;