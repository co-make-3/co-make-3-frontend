// Package imports
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'


const LoginForm = ({ touched, errors, ...props }) => {
    const POST_AUTH_API = '' // Add backend auth api for login
    const [status, setStatus] = useState([])

    return (
        <div>
            <Form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Field type="email" class="form-control" id="email" name="email" placeholder="Enter email" />
                    {touched.name && errors.name && (<div class="alert alert-danger" role="alert">{errors.email}</div>)}
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" class="form-control" id="password" name="password" placeholder="Password" />
                    {touched.email && errors.email && (<div class="alert alert-danger" role="alert">{errors.email}</div>)}
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
            .post(POST_AUTH_API, values)
            .then(res => {
                setStatus(res.data)
                resetForm()
        })
        .catch(err => console.log('Axios: ', err.res))
    }
})(LoginForm)