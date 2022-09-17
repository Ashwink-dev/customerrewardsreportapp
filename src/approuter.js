import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

import HomePage from './pages/homepage'

import Login from './pages/login'

export default function AppRouter() {
    return (
        <div>
            <Header />
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<HomePage />} />
                    </Routes>
                </Suspense>
            </Router>
            <Footer />
        </div>
    )
}