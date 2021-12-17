import mongoose from "mongoose";

const transactionLogSchema = mongoose.Schema({
  logID: { type: Number, default: 0 },
  logType: { type: String, default: "" },
  transID: { type: Number, default: 0 },
  userName: { type: String, default: "" },
  fullName: { type: String, default: "" },
  previousTransData: {
    description: { type: String, default: "" },
    amount: { type: Number, default: 0 },
    invoice: { type: String, default: "" },
    transType: { type: String, default: "" },
    department: { type: String, default: "" },
    date: { type: String, default: "" },
    notes: { type: String, default: "" },
  },
  transData: {
    description: { type: String, default: "" },
    amount: { type: Number, default: 0 },
    invoice: { type: String, default: "" },
    transType: { type: String, default: "" },
    department: { type: String, default: "" },
    date: { type: String, default: "" },
    notes: { type: String, default: "" },
  },
});

const TransactionLog =
  mongoose.models.transactionLog ||
  mongoose.model("transactionLog", transactionLogSchema);

export default TransactionLog;
