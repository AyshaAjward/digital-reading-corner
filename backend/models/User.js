const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  email: { type: String, required: true },
  borrowedBooks: [
    {
      book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      borrowedAt: { type: Date, default: Date.now },
    },
  ],
  lastReadBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    default: null,
  },
});

module.exports = mongoose.model("User", bookSchema);
