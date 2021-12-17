import mongoose from "mongoose";
import User from "../../../models/Admin/User";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.json({ success: false, message: "Invalid Request !!" });

  try {
    const { userName, userID } = req.body;

    const client = await mongoose.connect(process.env.DB_HOST);
    const userLogin = await User.findOne({ userName: userName });

    if (userLogin !== null)
      return res.json({ success: false, message: "User Name Existed" });

    const newUser = new User({
      userName: userName,
      userID: userID,
    });

    await newUser.save();

    client.connection.close();
    return res.json({ success: true, message: "" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}
