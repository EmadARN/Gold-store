export const columns = [
  { field: "id", headerName: "id", width: 130 },
  { field: "first_name", headerName: "نام", width: 130, editable: false },
  { field: "last_name", headerName: "نام خانوادگی", width: 130 },
  {
    field: "money_amount",
    headerName: "مبلغ ",

    type: "number",
    width: 160,
  },
  {
    field: "payment_id",
    headerName: " شناسه تراکنش ",
    type: "number",
    width: 190,
  },
  {
    field: "payment_date",
    headerName: "تاریخ",

    type: "number",
    width: 200,
  },

  {
    field: "phone_number",
    headerName: "شماره همراه",

    type: "number",
    width: 200,
  },
  {
    field: "status",
    headerName: "وضعیت",

    type: "number",
    width: 200,
  },
];
