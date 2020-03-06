// Package imports
import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'


function UserPost(props) {
    
    return (
        <div className="row">
            <div className="col-12">

                <div className="row page-title">
                    <div className="col-12 text-left">
                        <h1>New Post</h1>     
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 content-wrapper">
                        <Form>
                            <div className="form-row">
                                <label htmlFor="title">Title:</label>
                                <Field type="text" className="form-control" name="title" id="title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <Field component="textarea" className="form-control" name="description" id="description" rows="15"></Field>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <Field type="text" className="form-control" name="city" id="city" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="zip_code">Zip Code:</label>
                                        <Field type="text" className="form-control" name="zip_code" id="zip_code" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <Field type="file" className="form-control-file" name="post_image_url" id="post_image_url"  />
                                </div>
                            </div>
                            <div className="form-row m-t-20">
                                <div className="col">
                                    {props.touched.title && props.errors.title && (<div className="form-validation alert alert-danger" role="alert">{props.errors.title}</div>)}
                                    {props.touched.description && props.errors.description && (<div className="form-validation alert alert-danger" role="alert">{props.errors.description}</div>)}
                                    {props.touched.city && props.errors.city && (<div className="form-validation alert alert-danger" role="alert">{props.errors.city}</div>)}
                                    {props.touched.zip_code && props.errors.zip_code && (<div className="form-validation alert alert-danger" role="alert">{props.errors.zip_code}</div>)}
                                </div>
                            </div>
                            <div className="form-row m-t-20">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary btn-update">Post</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: ({ title, description, city, zip_code, post_image_url }) => ({
        title: title || '',
        description: description || '',
        city: city || '',
        zip_code: zip_code || '',
        post_image_url: post_image_url || ''
    }),
    validationSchema: yup.object().shape({
        title: yup
            .string()
            .required('A title is required.'),
        description: yup
            .string()
            .required('A title is required.'),
        city: yup
            .string()
            .required('A city is required.'),
        zip_code: yup
            .string()
            .required('A zip code is required.'),
    }),
    handleSubmit: (values, formikBag) => {
        axiosWithAuth().post('https://co-make-3.herokuapp.com/api/posts', values)
            .then(res => {
                console.log('Post Return Data: ', res.data)
                formikBag.setStatus(res.data)
                formikBag.resetForm()
                formikBag.props.history.push(`/dashboard/${localStorage.getItem('id')}/view-posts`)
            })
            .catch(err => console.log('Axios: ', err))
    }
})(UserPost)