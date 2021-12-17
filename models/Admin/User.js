import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  fullName: { type: String, default: "" },
  userID: { type: Number, default: 0 },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
