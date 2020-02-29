// Package imports
import React, { useState, useEffect} from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';
import { Link } from 'react-router-dom'


const LoginForm = (props) => {
    const [status, setStatus] = useState([])

    console.log(props)

    return (
        <div className="text-center">
            <div className="row">
                <div className="col-12">
                    <img className="form-logo" alt="co-make logo" src="images/co-make-logo.png" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <nav className="comp-nav">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </nav>
                    <hr />
                </div>
            </div>
            <h2 className="form-title">Login</h2>
            <Form>
                <div className="form-group">
                    <label htmlFor="username">username:</label>
                    <Field type="text" class="form-control" id="username" name="username" placeholder="Enter username" />
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password:</label>
                    <Field type="password" class="form-control" id="password" name="password" placeholder="Password" />
                </div>
                <div>
                    {props.touched.password && props.errors.password && (<div class="form-validation alert alert-danger" role="alert">{props.errors.password}</div>)}
                    {props.touched.email && props.errors.email && (<div class="form-validation alert alert-danger" role="alert">{props.errors.email}</div>)}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </Form>
        </div>
    )
}
                
export default withFormik({
    mapPropsToValues: ({username, password}) => ({
        username: username || '',
        password: password || ''
    }),
    validationSchema: yup.object().shape({
        username: yup
            .string()
            .required('An email is required.'),
        password: yup
            .string()
            .required('A password is required.'),
    }),
    handleSubmit: (values, formikBag) => {
        axiosWithAuth()
            .post('http://co-make-3.herokuapp.com/api/auth/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userID', res.data.id)
                formikBag.setStatus(res.data)
                formikBag.resetForm()
                formikBag.props.history.push(`/dashboard/${res.data.id}`)
            })
            .catch(err => console.log('Axios: ', err.res))
    }
})(LoginForm)