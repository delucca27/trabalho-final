import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// components and pages
import Navbar from './components/Navbar.component'
import SearchPage from './pages/Search.page'
import HomePage from './pages/Home.page'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element = { <HomePage /> } />
          <Route path="/search" element = { <SearchPage /> } />
        </Routes>


      </div>
    </Router>
  )
}
