// Package imports
import React, { useEffect, useState } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';

// Component Imports


function DashboardProfile(props) {

    const [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: ''
    });

    const userPassword = localStorage.password

    useEffect(() => {
        axiosWithAuth()
            .get(`http://co-make-3.herokuapp.com/api/users/${localStorage.getItem('id')}`)
            .then(res => {
                setUser(res.data)
                console.log('User: ', res.data)
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
                                <Field type="text" className="form-control" id="username" name="username" defaultValue={user.username} />
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name:</label>
                                        <Field type="text" className="form-control" id="first_name" name="first_name" defaultValue={user.first_name} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name:</label>
                                        <Field type="text" className="form-control" id="last_name" name="last_name" defaultValue={user.last_name} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address:</label>
                                <Field type="text" className="form-control" id="email" name="email" defaultValue={user.email} />
                            </div>
                            
                            <div className="form-row m-t-20">
                                <div className="col">
                                    {props.touched.username && props.errors.username && (<div className="form-validation alert alert-danger" role="alert">{props.errors.username}</div>)}
                                    {props.touched.first_name && props.errors.first_name && (<div className="form-validation alert alert-danger" role="alert">{props.errors.first_name}</div>)}
                                    {props.touched.last_name && props.errors.last_name && (<div className="form-validation alert alert-danger" role="alert">{props.errors.last_name}</div>)}
                                    {props.touched.email && props.errors.email && (<div className="form-validation alert alert-danger" role="alert">{props.errors.email}</div>)}
                                </div>
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
    mapPropsToValues: ({username, first_name, last_name, email}) => ({
        username: username || '',
        first_name: first_name || '',
        last_name: last_name || '',
        email: email || ''
    }),
    validationSchema: yup.object().shape({
        username: yup
            .string()
            .required('A username is required.'),
        first_name: yup
            .string()
            .required('Your first name is required.'),
        last_name: yup
            .string()
            .required('Your last name is required.'),
        email: yup
            .string()
            .required('Your email is required.'),
    }),
    handleSubmit: (values, formikBag) => {
        axiosWithAuth()
            .post('http://co-make-3.herokuapp.com/api/auth/login', values)
            .then(res => {
                formikBag.setStatus(res.data)
                formikBag.resetForm()
            })
            .catch(err => console.log('Axios: ', err))
    }
})(DashboardProfile)