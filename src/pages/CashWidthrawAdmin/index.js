import CashWidtrawComponent from "@/Components/CashWidtrawComponent";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
import { parseCookies } from "nookies";
import axios from "axios";
import { IPServer } from "@/Config";
const CashWidtraw = ({AllCustomersWidthrawRequest,CustomersWidthrawRequestTokenError}) => {

   
  return (
    <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={2}>
      <CashWidtrawComponent AllCustomersWidthrawRequest={AllCustomersWidthrawRequest}/>
    </UserDashboard>
  );
};

export default CashWidtraw;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let AllCustomersWidthrawRequest;
  let CustomersWidthrawRequestTokenError;

  if (token) {
    try {
      const { data: WidthrawReq } = await axios.get(
        `${IPServer}/AdminDashboard-GetRequest/money-get-request-list/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      AllCustomersWidthrawRequest = WidthrawReq;
      CustomersWidthrawRequestTokenError = "200";
    } catch (error) {
      AllCustomersWidthrawRequest = error.response.data;
      CustomersWidthrawRequestTokenError = "400";
      if (
        error.response.data.detail ==
        "You do not have permission to perform this action."
      ) {
        return {
          redirect: {
            permanent: false,
            destination: "/",
          },
        };
      }
    }
  }

  return{
    props:{
        AllCustomersWidthrawRequest,
        CustomersWidthrawRequestTokenError
    }
  }
}
