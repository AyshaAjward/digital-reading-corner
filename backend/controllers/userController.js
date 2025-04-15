import User from "../models/User.js";

export const createUserIfNotExists = async (req, res) => {
  const { uid, email } = req.body;
  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = await User.create({ uid, email });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const borrowBook = async (req, res) => {
  const { uid, bookId } = req.body;
  try {
    const user = await User.findOne({ uid });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.borrowedBooks.push({ book: bookId });
    user.lastReadBook = bookId;
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getLastReadBook = async (req, res) => {
  const { uid } = req.params;
  try {
    const user = await User.findOne({ uid }).populate("lastReadBook");
    res.status(200).json(user?.lastReadBook || null);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
