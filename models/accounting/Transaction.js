import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  description: { type: String, default: "" },
  amount: { type: Number, default: 0 },
  invoice: { type: String, default: "" },
  transType: { type: String, default: "" },
  department: { type: String, default: "" },
  date: { type: String, default: "" },
  notes: { type: String, default: "" },

  logs: [
    {
      logID: { type: Number, default: 0 },
    },
  ],

  isDeleted: { type: Boolean, default: false },
  journalName: { type: String, default: "" },
  journalID: { type: Number, default: 0 },
  transID: { type: Number, default: 0 },
});

const Transaction =
  mongoose.models.transaction ||
  mongoose.model("transaction", transactionSchema);

export default Transaction;
