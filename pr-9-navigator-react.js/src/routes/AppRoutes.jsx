import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayouts from './layouts/MainLayouts'
import ProductRoute from './ProductRoute'
import About from '../pages/About'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from '../pages/dashboard/DashboardHome'
import Users from '../pages/dashboard/Users'
import Settings from '../pages/dashboard/Settings'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>


        <Route element={<ProductRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path='/dashboard' element={<DashboardHome />} />
            <Route path='/dashboard/users' element={<Users />} />
            <Route path='/dashboard/settings' element={<Settings />} />
          </Route>
        </Route>

        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />
      </Routes>


    </>
  )
}

export default AppRoutes
