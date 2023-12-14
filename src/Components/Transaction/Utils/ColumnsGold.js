export const columnsBuy = [
  { id: "money_amount", label: "مبلغ", minWidth: 100 },
  { id: "gold_amount", label: "گرم", minWidth: 100 },
  {
    id: "buy_date",
    label: "تاریخ",
    minWidth: 100,
    align: "Center",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "request_status", label: "وضعیت", minWidth: 100 },
];
export const columnsSell = [
  { id: "money_amount", label: "مبلغ", minWidth: 100 },
  { id: "gold_amount", label: "گرم", minWidth: 100 },
  {
    id: "sale_date",
    label: "تاریخ",
    minWidth: 100,
    align: "Center",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "request_status", label: "وضعیت", minWidth: 100 },
];

export const columnsWithdraw = [
  { id: "gold_amount", label: "گرم", minWidth: 100 },
  {
    id: "request_date",
    label: "تاریخ",
    minWidth: 100,
    align: "Center",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "request_status", label: "وضعیت", minWidth: 100 },
];
