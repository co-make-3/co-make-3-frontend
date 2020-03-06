// Package imports
import React, { useEffect, useState } from 'react'
import { withFormik, Form, Field } from 'formik'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

// Component Imports


const DashboardProfile = ({ touched, errors, ...props }) => {

    const [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: ''
    });

    useEffect(() => {
        axiosWithAuth()
            .get(`https://co-make-3.herokuapp.com/api/users/${localStorage.getItem('id')}`)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log('Axios: ', err))
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
                    <div className="col-4 content-wrapper">
                        <Form> 
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <Field type="text" className="form-control" id="username" name="username" placeholder={user.username} />
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name:</label>
                                        <Field type="text" className="form-control" id="first_name" name="first_name" placeholder={user.first_name} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name:</label>
                                        <Field type="text" className="form-control" id="last_name" name="last_name" placeholder={user.last_name} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address:</label>
                                <Field type="text" className="form-control" id="email" name="email" placeholder={user.email} />
                            </div>
                            <Field type="hidden" name="password" id="password" defaultValue={user.password} />
                            <Field type="hidden" name="profile_image_url" id="profile_image_url" defaultValue={user.profile_image_url} />
                            <button type="submit" className="btn btn-primary btn-update">Update My Details</button>
                        </Form>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: ({username, password, first_name, last_name, email, profile_image_url}) => ({
        username: username || '',
        password: password || '',
        first_name: first_name || '',
        last_name: last_name || '',
        email: email || '',
        profile_image_url: profile_image_url || ''
    }),
    handleSubmit: (values, formikBag) => {
        axiosWithAuth()
        .put(`https://co-make-3.herokuapp.com/api/users/${localStorage.getItem('id')}`)
            .then(res => {
                formikBag.setStatus(res.data)
                formikBag.resetForm()
                formikBag.props.history.push(`/dashboard/${localStorage.getItem('id')}/profile`)
            })
            .catch(err => console.log('Axios: ', err))
    }
})(DashboardProfile)