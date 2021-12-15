import mongoose from "mongoose";
import Transaction from "../../../models/accounting/Transaction";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.json({ success: false, message: "Invalid Request !!" });

  try {
    const { description, amount, invoice, transType } = req.body.transData;
    const { department, date, notes, transID } = req.body.transData;
    const client = await mongoose.connect(process.env.DB_HOST);

    await Transaction.findOneAndUpdate(
      { transID: transID },
      {
        description: description,
        amount: amount,
        invoice: invoice,
        transType: transType,
        department: department,
        date: date,
        notes: notes,
      },
      { new: true, useFindAndModify: false }
    );

    client.connection.close();
    return res.json({ success: true, message: "" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}
