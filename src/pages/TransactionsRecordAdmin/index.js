import TransactionComponent from "@/Components/TransactionComponent";
import { IPServer } from "@/Config";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
import axios from "axios";
import { parseCookies } from "nookies";
const TransActionsPage = ({ transactionList, transactionListError }) => {
  return (
    <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={4}>
      <TransactionComponent
        transactionList={transactionList.transaction_list}
      />
    </UserDashboard>
  );
};

export default TransActionsPage;
export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let transactionList;
  let transactionListError;
  if (token) {
    try {
      const { data: transactionList2 } = await axios.get(
        `${IPServer}/AdminDashboard-Transaction/transaction-list/`,
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
