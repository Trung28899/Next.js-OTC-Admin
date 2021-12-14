import mongoose from "mongoose";
import Transaction from "../../../models/accounting/Transaction";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.json({ success: false, message: "Invalid Request !!" });

  const { transData } = req.body;

  try {
    const client = await mongoose.connect(process.env.DB_HOST);

    const newTrans = new Transaction({
      description: transData.description,
      amount: parseInt(transData.amount),
      invoice: transData.invoice,
      transType: transData.transType,
      department: transData.department,
      date: transData.date,
      notes: transData.notes,
      journalName: transData.name,
      journalID: transData.journalID,
      transID: Date.now(),
    });

    await newTrans.save();

    client.connection.close();
    return res.json({ success: true, message: "" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}
