import books from "../Models/bookModel.js";
// THESE ARE CONTROLLER FUNCTIONS FOR THE BOOKS
export const getBooks = async (req, res) => {
    try {
        const bookList = await books.find();
        res.send(bookList);
    } catch (error) {
        res.send(error.stack);
    }
}

export const createBooks = async (req, res) => {
    try {
        const { title, author, summary } = req.body;
        const newBook = await books.create({ title, author, summary });
        res.send(newBook);
    } catch (error) {
        res.send(error.stack)
    }
}

export const updateBooks = async (req, res) => {
    try {
        const { id, title } = req.body;
        const updatedBooks = await books.findByIdAndUpdate({ _id: id }, { title }, { returnDocument: "after" })
        res.send(updatedBooks);
    } catch (error) {
        res.send(error.stack)
    }
}

export const deleteBooks = async (req, res) => {
    const { id } = req.body;
    try {
        const bookToBeDeleted = await books.findOne({ _id: id });
        if (bookToBeDeleted) {
            await books.deleteOne({ _id: id });
        }
        res.send(bookToBeDeleted)
    } catch (error) {
        console.log(error.stack)
        res.status(404).send("No Book Found !")
    }
};
