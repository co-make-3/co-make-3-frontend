// Package imports
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'


const RegisterForm = ({ touched, errors, ...props }) => {
    const [status, setStatus] = useState([])

    return (
        <div className="text-center">
            <div className="row">
                <div className="col-12">
                    <img className="form-logo" alt="co-make logo" src="images/co-make-logo.png" />
                </div>
            </div>
            <h2 className="form-title">Register to your account below</h2>
            <Form>
                <div className="form-group text-left">
                    <label htmlFor="email">Email Address:</label>
                    <Field type="email" class="form-control" id="email" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="name">Your Name:</label>
                    <Field type="text" class="form-control" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div class="form-group text-left">
                    <label htmlFor="password">Password:</label>
                    <Field type="password" class="form-control" id="password" name="password" placeholder="Password" />
                </div>
                <div class="form-group text-left">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <Field type="password" class="form-control" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" />
                </div>
                <div class="form-group text-left">
                    <label htmlFor="zipcode">Zip Code:</label>
                    <Field type="text" class="form-control" id="zipcode" name="zipcode" placeholder="Zip Code" />
                </div>
                <div>
                    {touched.password && errors.password && (<div class="form-validation alert alert-danger" role="alert">{errors.password}</div>)}
                    {touched.email && errors.email && (<div class="form-validation alert alert-danger" role="alert">{errors.email}</div>)}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </Form>
        </div>
    )
}
                
export default withFormik({
    mapPropsToValues: ({email, name, password, confirmpassword, zipcode}) => ({
        email: email || '',
        name: name || '',
        password: password || '',
        confirmpassword: confirmpassword || '',
        zipcode: zipcode || ''
    }),
    validationSchema: yup.object().shape({
        email: yup.string().email('This email is not valid').required('An email is required.'),
        name: yup.string().required('Your name is required.'),
        password: yup.string().required('A password is required.'),
        confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match.').required('These passwords do not match.'),
        zipcode: yup.string().matches(/^\d{5}$/, 'This zip code is incorrect.').required('Your zip code is required.')
    }),
    handleSubmit: (values, { resetForm, setStatus }) => {
        axios
        .post('', values)
        .then(res => {
            setStatus(res.data)
            resetForm()
        })
        .catch(err => console.log('Axios: ', err.res))
    }
})(RegisterForm)