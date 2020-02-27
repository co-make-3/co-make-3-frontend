// Package imports
import React from 'react'
import { Route } from 'react-router-dom'

// Component Imports
//import Login from './components/Login'
//import Login from './components/Register'

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
        <div className="App">
            <Route path="/login" />
            <Route path="/register" />
            <Route path="/dashboard/:userid" />
            <Route path="/dashboard/:userid/activities" />
            <Route path="/post/:userid" />
            <Route path="/view/:postid" />
            
            <h1>Hello I'm the App!</h1>
        </div>
    )
}

export default App