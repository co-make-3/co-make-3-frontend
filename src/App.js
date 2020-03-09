// Package imports
import React from 'react'
import { Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Component Imports
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import PrivateRoute from './privateRoute/PrivateRoute'


function App() {

    const location = useLocation()
    const id = localStorage.getItem('id')

    if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register") {
        return (
            <div className="row App">
                <Route path={`/dashboard/${id}`} component={Dashboard} />

                <div className="row page-wrapper">
                    <Home />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <PrivateRoute path={`/dashboard/${id}`} component={Dashboard} />
            </div>
        )
    }
}

export default App