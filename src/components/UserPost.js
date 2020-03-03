// Package imports
import React from 'react'

function UserPost() {
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea className="form-control" name="description" id="description" rows="15"></textarea>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="city" >City:</label>
                                        <input className="form-control" type="text" name="city" id="city" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="city" >Zip Code:</label>
                                        <input className="form-control" type="text" name="city" id="city" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input className="form-control-file" type="file" />
                                </div>
                            </div>
                            <div className="form-row m-t-20">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary btn-update">Post</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-8"></div>
                </div>
                    
    
            </div>
        </div>
    )
}

export default UserPost