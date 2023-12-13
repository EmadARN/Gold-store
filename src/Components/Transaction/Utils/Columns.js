export const columnswithdraw = [
  { id: "money_amount", label: "مبلغ", minWidth: 100 },
  {
    id: "request_date",
    label: "تاریخ",
    minWidth: 100,
    align: "Center",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "request_status", label: "وضعیت", minWidth: 100 },
];
export const columnsDeposit = [
  { id: "money_amount", label: "مبلغ", minWidth: 100 },
  {
    id: "payment_date",
    label: "تاریخ",
    minWidth: 100,
    align: "Center",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "status", label: "وضعیت", minWidth: 100 },
];
