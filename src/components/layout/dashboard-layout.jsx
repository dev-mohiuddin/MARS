import React from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { AppSidebar } from './sidebar/app-sidebar'
import Navbar from './navbar/navbar'
import { Outlet } from 'react-router-dom'


function Layout () {
    return (
        <SidebarProvider className='overflow-hidden w-full flex'>
            <AppSidebar />
            <main className='relative w-full flex-1'>
                <SidebarTrigger className='absolute top-4' />
                <Navbar />
                <div className='w-full h-[calc(100vh-57px)] bg-secondary overflow-y-auto'>
                    <div className='container w-full min-h-full mx-auto max-w-screen-2xl overflow-x-auto p-4'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </SidebarProvider>
    )
}

export default Layout
