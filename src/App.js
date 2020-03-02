// Package imports
import React from 'react'
import { Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Component Imports
import Dashboard from './components/Dashboard'
import Home from './components/Home'


function App() {
    const location = useLocation()

    console.log('Location', location)

    if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register") {
        return (
            <div className="row App">
                <Route path="/dashboard" component={Dashboard} />

                <div className="row page-wrapper">
                    <Home />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Route path="/dashboard" component={Dashboard} />
            </div>
        )
    }
}

export default App