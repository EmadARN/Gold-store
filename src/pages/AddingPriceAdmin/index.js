import AddingPrice from '@/Components/AddingPriceAdmin'
import UserDashboard from '@/Containers/DashboardUser/UserDashboard'
import { DrawerObjAdmin } from '@/Utils/DrawerObjectAdmin'
import React from 'react'

const AddingPriceAdmin = () => {
  return (
  <UserDashboard indexBtn={5} DrawerObj={DrawerObjAdmin}>
    <AddingPrice/>
  </UserDashboard>
  )
}

export default AddingPriceAdmin