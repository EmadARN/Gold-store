//Href ProfilePass to Admin || customer
import { useCookies } from "react-cookie";

export const DashboardPath = () => {
  const [cookies] = useCookies(["phone_number"]);
  if (cookies.user_type === "admin") {
    return "/CashAmountAdmin";
  }
  return "/DeskPage";
};
