import TransactionComponent from "@/Components/TransactionComponent";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
const TransActionsPage = () => {
    return (
      <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={4}>
        <TransactionComponent/>
        </UserDashboard>
      );
}
 
export default TransActionsPage;