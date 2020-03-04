// Package imports
import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'


function UserPost() {

    /**
     * 
     * @param newPost 
     * The API will expect an object in this format
     * {
            description: "stuff needs to be fixed",
            city: "Portland",
            zip_code: "97206",
            post_image_url: "www.image.com"
     * }
     */
    function handleSubmit(newPost) {
        axiosWithAuth().post('http://co-make-3.herokuapp.com/api/posts', newPost)
            .then(res => console.log(res))
    } 
    
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
    mapPropsToValues: ({ description, city, zip_code, post_image_url }) => ({
        description: description || '',
        city: city || '',
        zip_code: zip_code || '',
        post_image_url: post_image_url || ''
    }),
    validationSchema: yup.object().shape({
        description: yup
            .string()
            .required('A description is required.'),
        city: yup
            .string()
            .required('A city is required.'),
        zip_code: yup
            .string()
            .required('A zip code is required.'),
    }),
})(UserPost)