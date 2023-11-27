import GoldWidtrawComponent from "@/Components/GoldWidtrawComponent";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
const GoldWidtrawAdmin = () => {
    return ( 
        <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={3}>
        <GoldWidtrawComponent/>
        </UserDashboard>
     );
}
 
export default GoldWidtrawAdmin;