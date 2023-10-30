import express from "express";
import { deleteBooks, createBooks, getBooks, updateBooks } from "../Controllers/bookControllers.js";

const Router = express.Router();
// GETTING ALL BOOKS
Router.get("/", getBooks);
// CREATE BOOK
Router.post("/", createBooks);
// UPDATE BOOK
Router.patch("/", updateBooks);
// DELETE BOOK
Router.delete("/", deleteBooks);

export { Router as BookRouter };
