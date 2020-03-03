// Package imports
import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';

// Component Imports
//

function DashboardProfile(props) {
    console.log('Profile Props', props)
    console.log('LocalStorage: ', localStorage)

    const [user, setUser] = useState({});

    useEffect(() => {
        axiosWithAuth().get(`http://co-make-3.herokuapp.com/api/users/${localStorage.getItem('userID')}`)
            .then(res => setUser(res.data))
    }, [])

    return (
        <div className="row">
            <div className="col-12">
                <div className="row page-title">
                    <div className="col-12 text-left">
                        <h1>Profile</h1>     
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 profile-wrapper">
                        <div className="form-group">
                            <label htmlFor="p-username">Username:</label>
                            <input type="text" className="form-control" id="p-username" name="p-username" />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="p-firstName">First Name:</label>
                                    <input type="text" className="form-control" id="p-firstName" name="p-firstName" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="p-LastName">Last Name:</label>
                                    <input type="text" className="form-control" id="p-lastName" name="p-lastName" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="p-email">Email Address:</label>
                            <input type="text" className="form-control" id="p-email" name="p-email" />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="p-oldPassword">Old Password:</label>
                                    <input type="text" className="form-control" id="p-oldPassword" name="p-oldPassword" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="p-newPassword">New Password:</label>
                                    <input type="text" className="form-control" id="p-newPassword" name="p-newPassword" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="p-zipCode">Zip Code:</label>
                                    <input type="text" className="form-control" id="p-zipCode" name="p-zipCode" />
                                </div>
                            </div>
                            <div className="col align-self-end text-right"></div>
                        </div>
                        <div className="form-row">
                            <div className="col text-center">
                                <button type="submit" className="btn btn-primary btn-update">Update My Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardProfile