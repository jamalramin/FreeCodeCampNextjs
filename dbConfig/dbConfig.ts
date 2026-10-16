import mongoose from "mongoose";

export default function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to database");
    }); 

    connection.on("error", (err) => {
        console.log("Something is wrong !!" +err);
        process.exit(); 
    })

    
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
