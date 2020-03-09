// Package imports
import React, { useEffect, useState } from 'react'
import { withFormik, Form, Field } from 'formik'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'


const DashboardProfile = ({ touched, errors, ...props }) => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        profile_image_url: ''
    })

    console.log('user: ', user)

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
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <Field type="password" className="form-control" id="password" name="password" />
                            </div>
                            <div>
                                {touched.username && errors.username && (<div className="form-validation alert alert-danger" role="alert">{props.errors.username}</div>)}
                                {touched.first_name && errors.first_name && (<div className="form-validation alert alert-danger" role="alert">{props.errors.first_name}</div>)}
                                {touched.last_name && errors.last_name && (<div className="form-validation alert alert-danger" role="alert">{props.errors.last_name}</div>)}
                                {touched.email && errors.email && (<div className="form-validation alert alert-danger" role="alert">{props.errors.email}</div>)}
                                {touched.password && errors.password && (<div className="form-validation alert alert-danger" role="alert">{props.errors.password}</div>)}
                            </div>
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
    enableReinitialize: true,
    mapPropsToValues: ({ username, password, first_name, last_name, email, profile_image_url }) => ({
        username: username || '',
        password: password || '',
        first_name: first_name || '',
        last_name: last_name || '',
        email: email || '',
        profile_image_url: profile_image_url || 'https://img.cartoongoodies.com/wp-content/uploads/2019/11/07152740/Rick-Sanchez-face-778x1024.png'
    }),
    handleSubmit: (values, formikBag) => {
        console.log('values: ', values)
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