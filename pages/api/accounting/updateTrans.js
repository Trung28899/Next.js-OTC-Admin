import mongoose from "mongoose";
import Transaction from "../../../models/accounting/Transaction";
import TransactionLog from "../../../models/accounting/TransactionLog";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.json({ success: false, message: "Invalid Request !!" });

  try {
    const { transData, previousData, userName, fullName } = req.body;
    const { description, amount, invoice, transType } = transData;
    const { department, date, notes, transID } = transData;
    const client = await mongoose.connect(process.env.DB_HOST);

    const transaction = await Transaction.findOne({ transID: transID });
    if (!userName || !fullName)
      return res.json({
        success: false,
        message: "Invalid Request (No Username or Fullname)",
      });

    if (!transaction)
      return res.json({
        success: false,
        message: "Invalid Request (No Transaction Found)",
      });

    const logID = Date.now();
    const logArray = transaction.logs.concat([{ logID: logID }]);

    await Transaction.findByIdAndUpdate(
      transaction._id,
      {
        description: description,
        amount: amount,
        invoice: invoice,
        transType: transType,
        department: department,
        date: date,
        notes: notes,
        logs: logArray,
      },
      { new: true, useFindAndModify: false }
    );

    const newLog = new TransactionLog({
      logID: logID,
      logType: "update",
      transID: transaction.transID,
      userName: userName,
      fullName: fullName,
      previousTransData: previousData,
      transData: transData,
    });

    await newLog.save();

    client.connection.close();
    return res.json({ success: true, message: "" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}
