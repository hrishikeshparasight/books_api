import mongoose from "mongoose";

// THIS DATA IS INSERTED AS DUMMY DATA INTO THE DATABASE.
const DummyData = [
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        summary: 'The story of Holden Caulfield, a young man grappling with the phoniness of the adult world.'
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        summary: 'A classic romance novel revolving around the lives of the Bennett sisters and their relationships.'
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        summary: 'The tale of Bilbo Baggins, an unassuming hobbit who embarks on a grand adventure.'
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        summary: 'A fast-paced thriller involving symbolism, art, and hidden secrets.'
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        summary: 'A powerful novel that addresses issues of racial injustice in the American South.'
    }
    // Add more dummy data entries here
];



const bookSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        unique: true
    },
    author: {
        required: true,
        type: String
    },
    summary: {
        required: true,
        type: String
    }
})


const books = mongoose.model("books", bookSchema);

export default books;
