import mongoose from "mongoose";
import Transaction from "../../../models/accounting/Transaction";
import TransactionLog from "../../../models/accounting/TransactionLog";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.json({ success: false, message: "Invalid Request !!" });

  try {
    const { transData, userName, fullName } = req.body;
    const client = await mongoose.connect(process.env.DB_HOST);

    if (!userName || !fullName)
      return res.json({
        success: false,
        message: "Invalid Request (No Username or Fullname)",
      });

    const transID = Date.now();
    const newTransData = {
      description: transData.description,
      amount: parseInt(transData.amount),
      invoice: transData.invoice,
      transType: transData.transType,
      department: transData.department,
      date: transData.date,
      notes: transData.notes,
      journalName: transData.name,
      journalID: transData.journalID,
      addedBy: fullName,
      transID: Date.now(),
      logs: [{ logID: transID }],
    };

    const newTrans = new Transaction(newTransData);
    const newLog = new TransactionLog({
      logID: transID,
      logType: "create",
      transID: transID,
      userName: userName,
      fullName: fullName,
      transData: newTransData,
    });

    await newTrans.save();
    await newLog.save();

    client.connection.close();
    return res.json({ success: true, message: "" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}
