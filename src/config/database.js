import mongoose from "mongoose";
import dotenv from './dotenv.js';

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;

export default db;
