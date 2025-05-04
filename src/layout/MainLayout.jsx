import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@src/components/Header'
import Footer from '@src/components/Footer'
const MainLayout = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="h-full overflow-auto pt-20 w-full md:pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
