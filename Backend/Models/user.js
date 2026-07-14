import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
 fullname:{
    type:String,
    require:true,
    trim:true
 },
 email:{
     type:String,
    require:true,
    trim:true,
    unique: true, lowercase: true,
 },
password:{
     type:String,
    require:true,
    trim:true,
},
isEmailVerifeid:{
    type: Boolean, default: false
},
emailVerificationOTP:{
    type:String,
    default:""
},
emailVerificationOTPExpires: { type: Date, default: null, },

    },{
        timestamps:true
    }
)
const User= mongoose.model("User",userSchema);
export default User;