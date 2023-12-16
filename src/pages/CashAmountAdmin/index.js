import CashAmount from "@/Components/CashAmount";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
import axios from "axios";
import { IPServer } from "@/Config";
import { parseCookies } from "nookies";
const CashAmountPage = ({ AllMembers, AllMembersTokenError }) => {
  return (
    <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={1}>
      <CashAmount AllMembers={AllMembers} />
    </UserDashboard>
  );
};

export default CashAmountPage;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let AllMembers;
  let AllMembersTokenError;

  if (token) {
    try {
      const { data: AllMembersToken2 } = await axios.get(
        `${IPServer}/AdminDashboard-DeskPage/users-information-list/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      AllMembers = AllMembersToken2;
      AllMembersTokenError = "200";
    } catch (error) {
      AllMembers = error.response.data;
      AllMembersTokenError = "400";
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
      AllMembers,
      AllMembersTokenError,
    },
  };
}
