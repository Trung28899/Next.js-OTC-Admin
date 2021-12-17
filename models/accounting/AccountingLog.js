import mongoose from "mongoose";

const accountingLogSchema = mongoose.Schema({
  logID: { type: Number, default: 0 },
  logType: { type: String, default: "" },
  transID: { type: Number, default: 0 },
  perfomedBy: {
    userName: { type: String, default: "" },
    fullName: { type: String, default: "" },
  },
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

const AccountingLog =
  mongoose.models.accountingLog ||
  mongoose.model("accountingLog", accountingLogSchema);

export default AccountingLog;
