import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import PaymentCredit from './PaymentCredit'




function Layout() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
            </Route>
            <Route path='/payments' element={<PaymentCredit/>}/>
        </Routes>
        
        </BrowserRouter>
        
        
        </>
    )
}

export default Layout
