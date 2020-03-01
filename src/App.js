// Package imports
import React from 'react'
import { Route, Link } from 'react-router-dom'

// Component Imports
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Dashboard from './components/Dashboard'

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
            <Route path="/dashboard"><Dashboard /></Route>
            <Route exact path="/dashboard/:userid/activities" />
            <Route exact path="/post/:userid" />
            <Route exact path="/view/:postid" />
            
            <div className="row page-wrapper">
                <div className="col form-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <img className="form-logo" alt="co-make logo" src="images/co-make-logo.png" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <nav className="comp-nav">
                                        <Link to="/">Home</Link>
                                        <Link to="/login">Login</Link>
                                        <Link to="/register">Register</Link>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </nav>
                                    <hr />
                                </div>
                            </div>
                            <Route path="/login" render={renderProps => {
                                return <LoginForm />
                            }} />
                            <Route path="/register" render={renderProps => {
                                return <RegisterForm />
                            }} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App