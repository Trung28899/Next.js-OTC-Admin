import mongoose from "mongoose";
import Transaction from "../../../models/accounting/Transaction";
import TransactionLog from "../../../models/accounting/TransactionLog";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.json({ success: false, message: "Invalid Request !!" });

  try {
    const { deleteAction, transData } = req.body;
    const { userName, fullName } = req.body;
    const { _id } = transData;
    const client = await mongoose.connect(process.env.DB_HOST);

    const transaction = await Transaction.findById(_id);
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

    const newLog = new TransactionLog({
      logID: logID,
      logType: deleteAction ? "delete" : "restore",
      transID: transaction.transID,
      userName: userName,
      fullName: fullName,
      transData: transData,
    });

    await Transaction.findByIdAndUpdate(
      _id,
      {
        isDeleted: deleteAction,
        logs: logArray,
      },
      { new: true, useFindAndModify: false }
    );

    await newLog.save();

    client.connection.close();
    return res.json({ success: true, message: "" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}
