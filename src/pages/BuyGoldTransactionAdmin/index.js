import BuyGoldTransaction from "@/Components/BuyGoldTransaction/BuyGoldTransaction";
import { IPServer } from "@/Config";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
import axios from "axios";
import { parseCookies } from "nookies";
const BuyGoldTransactionAdmin = ({ transactionList, transactionListError }) => {
  console.log("transactionList:", transactionList.data);
  return (
    <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={5}>
      <BuyGoldTransaction transactionList={transactionList.data} />
    </UserDashboard>
  );
};

export default BuyGoldTransactionAdmin;
export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let transactionList;
  let transactionListError;
  if (token) {
    try {
      const { data: transactionList2 } = await axios.get(
        `${IPServer}/AdminDashboard-BuySale/buy-list/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      transactionList = transactionList2;
      transactionListError = "200";
    } catch (error) {
      transactionList = "";
      transactionListError = "400";
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/SignUp",
      },
    };
  }
  return {
    props: {
      transactionList,
      transactionListError,
    },
  };
}
