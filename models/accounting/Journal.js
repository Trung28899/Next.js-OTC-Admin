import mongoose from "mongoose";

const journalSchema = mongoose.Schema({
  name: { type: String, default: "" },
  journalID: { type: Number, default: 0 },
  addedBy: { type: Number, default: 0 },
});

const Journal =
  mongoose.models.journal || mongoose.model("journal", journalSchema);

export default Journal;
