import GoldAmountMain from '@/Components/GoldAmountInStoreAdmin'
import UserDashboard from '@/Containers/DashboardUser/UserDashboard'
import { DrawerObjAdmin } from '@/Utils/DrawerObjectAdmin'
import React from 'react'

const GoldAmount = () => {
  return (
 <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={6}>
  <GoldAmountMain/>
 </UserDashboard>
  )
}

export default GoldAmount