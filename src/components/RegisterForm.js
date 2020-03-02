// Package imports
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const RegisterForm = ({ touched, errors, ...props }) => {
    const [status, setStatus] = useState([])

    return (
        <div className="text-center">
            <div className="row">
                <div className="col-12">
                    <img className="form-logo" alt="co-make logo" src="images/co-make-logo.png" />
                </div>
            </div>
           
            <h2 className="form-title">Register</h2>
            <Form>
                <div className="form-group text-left">
                    <label htmlFor="username">Username:</label>
                    <Field type="text" className="form-control" id="username" name="username" placeholder="Enter username" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="email">Email Address:</label>
                    <Field type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="firstName">Your first name:</label>
                    <Field type="text" className="form-control" id="first_name" name="first_name" placeholder="Enter your first name" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="lastName">Your last name:</label>
                    <Field type="text" className="form-control" id="last_name" name="last_name" placeholder="Enter your last name" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="password">Password:</label>
                    <Field type="password" className="form-control" id="password" name="password" placeholder="Password" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <Field type="password" className="form-control" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" />
                </div>
                <div>
                    {touched.username && errors.username && (<div className="form-validation alert alert-danger" role="alert">{errors.username}</div>)}
                    {touched.email && errors.email && (<div className="form-validation alert alert-danger" role="alert">{errors.email}</div>)}
                    {touched.firstName && errors.firstName && (<div className="form-validation alert alert-danger" role="alert">{errors.firstName}</div>)}
                    {touched.lastName && errors.lastName && (<div className="form-validation alert alert-danger" role="alert">{errors.lastName}</div>)}
                    {touched.password && errors.password && (<div className="form-validation alert alert-danger" role="alert">{errors.password}</div>)}
                    {touched.confirmpassword && errors.confirmpassword && (<div className="form-validation alert alert-danger" role="alert">{errors.confirmpassword}</div>)}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    )
}
                
export default withFormik({
    mapPropsToValues: ({username, email, first_name, last_name, password, confirmpassword}) => ({
        username: username || '',
        email: email || '',
        first_name: first_name || '',
        last_name: last_name || '',
        password: password || '',
        confirmpassword: confirmpassword || '',
    }),
    validationSchema: yup.object().shape({
        username: yup.string().required('A username is requried.'),
        email: yup.string().email('This email is not valid').required('An email is required.'),
        first_name: yup.string().required('Your first name is required.'),
        last_name: yup.string().required('Your last name is required.'),
        password: yup.string().required('A password is required.'),
        confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match.').required('These passwords do not match.')
    }),
    handleSubmit: (values, formikBag) => {
        console.log(values);
        const {username, email, first_name, last_name, password} = values;
        const newUser = {
            username,
            email,
            first_name,
            last_name,
            password
        }
        axios
        .post('http://co-make-3.herokuapp.com/api/auth/register', newUser)
        .then(res => {
            formikBag.setStatus(res.data)
            formikBag.resetForm()
            formikBag.props.history.push('/login');
        })
        .catch(err => console.log('Axios: ', err.res))
    }
})(RegisterForm)