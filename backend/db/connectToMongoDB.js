import mongoose from "mongoose";

const connecToMongoDB = async() => {
  try {
      await mongoose.connect(process.env.MongoDBURI,);
      console.log("Connected to MongoDB");
  } catch (error) {
      console.log("Error connecting to MongoDB",error.message);
  }
}

export default connecToMongoDB