import mongoose from 'mongoose';

const connectDb=async ()=>{
try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDb connected successfully');
} catch (error) {
    console.error('MongoDb connection Failed');
    console.error(error.message);
    process.exit(1)
}

}
export default connectDb;
