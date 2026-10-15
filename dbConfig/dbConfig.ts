import mongoose from "mongoose";
import MODERN_BROWSERSLIST_TARGET from "next/dist/shared/lib/modern-browserslist-target";

export default function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to database");
    }); 
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
