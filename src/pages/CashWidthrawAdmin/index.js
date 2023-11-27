import CashWidtrawComponent from "@/Components/CashWidtrawComponent";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
const CashWidtraw = () => {
    return ( 
        <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={2}>
        <CashWidtrawComponent />
        </UserDashboard>
     );
}
 
export default CashWidtraw;