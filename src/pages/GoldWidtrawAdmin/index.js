import GoldWidtrawComponent from "@/Components/GoldWidtrawComponent";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
import { parseCookies } from "nookies";
import axios from "axios";
import { IPServer } from "@/Config";
const GoldWidtrawAdmin = ({ AllGoldWidthrawReq }) => {

  
  return (
    <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={3}>
      <GoldWidtrawComponent AllGoldWidthrawReq={AllGoldWidthrawReq}/>
    </UserDashboard>
  );
};

export default GoldWidtrawAdmin;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let AllGoldWidthrawReq;
  let GoldWidthrawErrToken;

  if (token) {
    try {
      const { data: GoldWidthraw } = await axios.get(
        `${IPServer}/AdminDashboard-GetRequest/gold-get-request-list/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      AllGoldWidthrawReq= GoldWidthraw;
      GoldWidthrawErrToken="200";
    } catch (error) {
      AllGoldWidthrawReq: "";
      GoldWidthrawErrToken: "400";
    }
  }

  return {
    props: {
      AllGoldWidthrawReq,
      GoldWidthrawErrToken,
    },
  };
}
