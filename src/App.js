// Package imports
import React from 'react'
import { Route } from 'react-router-dom'

// Component Imports
//import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

/**
 * ### Routes - 
 * 1. Login
 * 2. Register
 * 3. Dashboard
 * 4. Activities
 * 5. Post
 * 6. View
 * 7. Protected Application Route
 */

function App() {
    return (
        <div className="row App">
            <Route path="/login" />
            <Route path="/register" />
            <Route path="/dashboard/:userid" />
            <Route path="/dashboard/:userid/activities" />
            <Route path="/post/:userid" />
            <Route path="/view/:postid" />
            
            <div className="row page-wrapper">
                <div className="col form-wrapper">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default App