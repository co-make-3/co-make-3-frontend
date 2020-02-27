// Package imports
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'


const LoginForm = ({ touched, errors, ...props }) => {
    const [status, setStatus] = useState([])

    return (
        <div className="text-center">
            <div className="row">
                <div className="col-12">
                    <img className="form-logo" alt="co-make logo" src="images/co-make-logo.png" />
                </div>
            </div>
            <h2 className="form-title">Login to your account below</h2>
            <Form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <Field type="email" class="form-control" id="email" name="email" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" class="form-control" id="password" name="password" placeholder="Password" />
                    
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
    mapPropsToValues: ({email, password}) => ({
        email: email || '',
        password: password || ''
    }),
    validationSchema: yup.object().shape({
        email: yup
            .string()
            .email('This email is not valid')
            .required('An email is required.'),
        password: yup
            .string()
            .required('A password is required.'),
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
})(LoginForm)