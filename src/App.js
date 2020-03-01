// Package imports
import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

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
<<<<<<< HEAD
            <Redirect exact from="/" to="login" />
=======
>>>>>>> 8651aa7311c4325f0422cb3ce8a596648358b00d
            
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
                                return <LoginForm {...renderProps} />
                            }} />
<<<<<<< HEAD
                            <Route exact path="/register" render={renderProps => {
                                return <RegisterForm {...renderProps} />
=======
                            <Route path="/register" render={renderProps => {
                                return <RegisterForm />
>>>>>>> 8651aa7311c4325f0422cb3ce8a596648358b00d
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App