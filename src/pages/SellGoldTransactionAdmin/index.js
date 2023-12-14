import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
import { parseCookies } from "nookies";
import axios from "axios";
import { IPServer } from "@/Config";
import SellGoldTransactionAdmin from "@/Components/SellGoldTransactionAdmin/SellGoldTransactionAdmin";
const GoldWidtrawAdmin = ({ sellGoldAdmin }) => {
  console.log("sellGoldAdmin:", sellGoldAdmin);
  return (
    <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={6}>
      <SellGoldTransactionAdmin sellGoldAdmin={sellGoldAdmin} />
    </UserDashboard>
  );
};

export default GoldWidtrawAdmin;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let sellGoldAdmin;
  let sellGoldAdminErrToken;

  if (token) {
    try {
      const { data: sellGoldAdmin2 } = await axios.get(
        `${IPServer}/AdminDashboard-BuySale/sale-list/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      sellGoldAdmin = sellGoldAdmin2;
      sellGoldAdminErrToken = "200";
    } catch (error) {
      sellGoldAdmin: "";
      sellGoldAdminErrToken: "400";
    }
  }

  return {
    props: {
      sellGoldAdmin,
      sellGoldAdminErrToken,
    },
  };
}
