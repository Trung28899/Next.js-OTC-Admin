import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { sortTransaction } from "./helper2";

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const exportToExcel = (apiData, fileName, fileType) => {
  const objectMaxLength = [];
  const wscols = [];
  const wsrows = [];

  for (let i = 0; i < apiData.length; i++) {
    let value = Object.values(apiData[i]);
    const keyVal = [];

    value.forEach((value) => {
      if (value) {
        keyVal.push(getKeyByValue(apiData[i], value));
      }
    });

    for (let j = 0; j < value.length; j++) {
      if (typeof value[j] == "number") {
        objectMaxLength[j] = keyVal[j].length;
      } else if (typeof value[j] === undefined) {
        objectMaxLength[j] = keyVal[j].length;
      } else {
        // j === 2 > Date Column for Order Excel File
        // j === 1 > Seller Name Column
        if (j === 2 || j === 1) {
          const columnLength =
            value[j].length > keyVal[j].length
              ? value[j].length
              : keyVal[j].length;
          objectMaxLength[j] = columnLength + 10;
        } else {
          const stringLength = keyVal[j] ? keyVal[j].length : 15;
          objectMaxLength[j] = stringLength + 2;
        }
      }
    }
  }

  objectMaxLength.forEach((value) => {
    wscols.push({ width: value });
    wsrows.push({ hpx: 21 });
  });

  wsrows[0] = { hpx: 30 };

  const ws = XLSX.utils.json_to_sheet(apiData);
  ws["!cols"] = wscols;
  ws["!rows"] = wsrows;

  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + ".xlsx");
};

export const allTransToExcel = (allTransactions, fileName) => {
  sortTransaction(allTransactions);
  const ordersObject = [];

  if (allTransactions.length === 0) return alert("No Transaction To Export");

  for (let i = 0; i < allTransactions.length; i++) {
    const transType = allTransactions[i].transType;

    const transDetail = {
      "DATE OF TRANSACTION":
        `${allTransactions[i].date}, ${allTransactions[i].journalName}` || "",
      Description: `${allTransactions[i].description}` || "",
      "DEBIT (iN CAD)": transType === "Income" ? allTransactions[i].amount : "",
      "CREDIT (in CAD)":
        transType === "Expense" ? allTransactions[i].amount : "",
      "TRANSACTION TYPE": allTransactions[i].transType || "",
      DEPARTMENT: allTransactions[i].department || "",
      NOTES: allTransactions[i].notes || "",
      "INVOICE LINK": allTransactions[i].invoice || "",
    };
    ordersObject.push(transDetail);
  }

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  exportToExcel(ordersObject, fileName, fileType);
};
