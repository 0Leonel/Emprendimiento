import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from '../components/appHeader/appHeader'

export const Layout = () => {
  return (
    <>
    <AppHeader/>
    <main className='min-h-screen bg-[#153840]  '> 
        <Outlet/>
    </main>

    </>
  )
}
