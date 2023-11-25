import CashAmount from "@/Components/CashAmount";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
const CashAmountPage = () => {
    return ( 
<UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={1}>
    <CashAmount />
</UserDashboard>
     );
}
 
export default CashAmountPage;