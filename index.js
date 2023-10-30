import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { BookRouter } from "./Routers/books.js";

dotenv.config();    
const app = express();
// CROSS ORIGIN ACCESSIBILITY
app.use(cors());
// FOR ACCESSING REQUEST BODY
app.use(express.json());

// USING BOOK ROUTER
app.use("/books", BookRouter);

// USING ENV FOR PORT AND MONGODB URL
app.listen(process.env.PORT || 8000, () => {
    console.log("Started server  !")
})

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to Database")
})