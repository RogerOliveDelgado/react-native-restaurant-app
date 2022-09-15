import mongoose , {Mongoose, ConnectOptions} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

function connect() : Promise<Mongoose> {
  return mongoose.connect(MONGO_URI);
}

export default connect
