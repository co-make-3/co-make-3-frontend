// Package imports
import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';


const LoginForm = ({ touched, errors, ...props }) => {

    console.log(props)
    console.log('LocalStorage - id: ', localStorage.getItem('id'))

    return (
        <div className="text-center">
            <h2 className="form-title">Login</h2>
            <Form>
                <div className="form-group text-left">
                    <label htmlFor="username">Username:</label>
                    <Field type="text" className="form-control" id="username" name="username" placeholder="Enter username" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="password">Password:</label>
                    <Field type="password" className="form-control" id="password" name="password" placeholder="Password" />
                </div>
                <div>
                    {props.touched.username && props.errors.username && (<div className="form-validation alert alert-danger" role="alert">{props.errors.username}</div>)}
                    {props.touched.password && props.errors.password && (<div className="form-validation alert alert-danger" role="alert">{props.errors.password}</div>)}
                </div>
                <button type="submit" className="btn btn-alt btn-primary">Login</button>
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
            .required('A username is required.'),
        password: yup
            .string()
            .required('A password is required.'),
    }),
    handleSubmit: (values, formikBag) => {
        axiosWithAuth()
            .post('https://co-make-3.herokuapp.com/api/auth/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('password', values.password)
                formikBag.setStatus(res.data)
                //console.log('Res.data: ', res.data)
                formikBag.resetForm()
                formikBag.props.history.push(`/dashboard/${res.data.id}`)
            })
            .catch(err => console.log('Axios: ', err))
    }
})(LoginForm)