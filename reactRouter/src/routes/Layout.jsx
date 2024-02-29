import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import { Footer, Header, SecondHeader } from '../components/index.js'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'

//css for ToastContainer
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return (
    <>
      <NextUIProvider>
        <main className=" text-foreground bg-background">
          <Header/>
          <SecondHeader/>
          <Outlet/>
          <Footer/>
          <ToastContainer position="bottom-right"/>
        </main>
      </NextUIProvider>
    </>
  )
}

export default Layout