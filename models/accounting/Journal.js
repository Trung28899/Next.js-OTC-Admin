import mongoose from "mongoose";

const journalSchema = mongoose.Schema({
  name: { type: String, default: "" },
  month: { type: String, default: "" },
  year: { type: String, default: "" },
  journalID: { type: Number, default: 0 },
  addedBy: { type: String, default: "" },
});

const Journal =
  mongoose.models.journal || mongoose.model("journal", journalSchema);

export default Journal;
