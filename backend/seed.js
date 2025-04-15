const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("./models/Book");

dotenv.config();

const sampleBooks = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A journey of a young shepherd who dreams of treasure and finds his destiny.",
    coverImage: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    pdfUrl: "https://example.com/the-alchemist.pdf",
    available: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "A book about building good habits and breaking bad ones.",
    coverImage: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    pdfUrl: "https://example.com/atomic-habits.pdf",
    available: true,
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await Book.deleteMany(); // Clear existing books if any
    await Book.insertMany(sampleBooks); // Add sample books
    console.log("Sample books inserted");
    mongoose.disconnect(); // Close connection
  })
  .catch((err) => console.error("Error seeding DB: ", err));
