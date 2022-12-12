import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// components and pages
import Navbar from './components/Navbar.component'

import HomePage from './pages/Home.page'
import RegisterPage from './pages/Register.page'
import NotFoundPage from './pages/NotFound.page'

// style
import "./style/app.css"

export default function App() {
  return (
    <Router>
      <div className="application">
        <Navbar />
          <Routes>
            <Route path="/" element = { <HomePage /> } />
            <Route path="*" element = { <NotFoundPage /> } />
            <Route path="/search" element = { <RegisterPage /> } />
          </Routes>
      </div>
    </Router>
  )
}
