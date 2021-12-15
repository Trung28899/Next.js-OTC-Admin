export const validateAddTrans = (data) => {
  const { transType, department, date } = data;
  const { description, amount, invoice, name } = data;

  if (!description) return "Please fill in Description";
  if (!amount) return "Please fill in Amount";
  if (!invoice) return "Please fill in Invoice Link";
  if (!transType) return "Please choose Transaction Type";
  if (!department) return "Please choose Department";
  if (!date) return "Please choose Date";
  if (!name) return "Some Error Happened (No Journal Report Name)";

  return "";
};

export const validateUpdateTrans = (data) => {
  const { transType, department, date } = data;
  const { description, amount, invoice, name } = data;

  if (!description) return "Please fill in Description";
  if (!amount) return "Please fill in Amount";
  if (!invoice) return "Please fill in Invoice Link";
  if (!transType) return "Please choose Transaction Type";
  if (!department) return "Please choose Department";
  if (!date) return "Please choose Date";

  return "";
};
