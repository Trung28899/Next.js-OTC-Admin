import mongoose from "mongoose";
import User from "../../../models/Admin/User";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.json({ success: false, message: "Invalid Request !!" });

  try {
    const { userName } = req.body;

    const client = await mongoose.connect(process.env.DB_HOST);
    const userLogin = await User.findOne({ userName: userName });

    if (userLogin === null)
      return res.json({
        success: false,
        message: "Invalid User Name",
        fullName: "",
      });

    client.connection.close();
    return res.json({
      success: true,
      message: "",
      fullName: userLogin.fullName,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message, fullName: "" });
  }
}
