import React, { Fragment } from 'react'
import { Navbar } from '../layout/Navbar'
import { Sidebar } from '../layout/Sidebar'
import { Create } from './Create'

export const Projects = () => {
    return (
        <Fragment>
            <Navbar />
            <Sidebar />
            <div className='container'>
                <div className="row mt-4">
                    <div className="col-12 col-md-6">
                        <button type='button' className='btn btn-success' data-bs-toggle="modal" data-bs-target="#createModal">
                            Create Project <i class="fa-solid fa-circle-plus"></i>
                        </button>
                        <Create />
                    </div>
                    <div className="col-12 col-md-6">
                        <input type="text" placeholder='Search Project' className='form-control' />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
