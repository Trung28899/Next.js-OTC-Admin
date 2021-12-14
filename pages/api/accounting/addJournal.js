import mongoose from "mongoose";
import Journal from "../../../models/accounting/Journal";

export default async function handler(req, res) {
  const { newJournal } = req.body;

  if (req.method !== "POST")
    return res.json({ success: false, message: "Invalid Request !!" });

  try {
    const client = await mongoose.connect(process.env.DB_HOST);

    const newJournalReport = new Journal({
      name: newJournal.name,
      month: newJournal.month,
      year: newJournal.year,
      journalID: newJournal.journalID,
    });

    await newJournalReport.save();

    client.connection.close();
    return res.json({ success: true, message: "" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}
