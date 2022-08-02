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
                <div className="row mt-4 mb-4">
                    <div className="col-12 col-md-6 mb-3">
                        <button type='button' className='btn btn-success w-100' data-bs-toggle="modal" data-bs-target="#createModal">
                            Create Project <i className="ms-2 fa-solid fa-circle-plus"></i>
                        </button>
                        <Create />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <input type="text" placeholder='Search Project' className='form-control' />
                    </div>
                </div>
                <div>
                    <h2 className='h4 mb-3'>Project List</h2>
                    <div className="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem sit ad veritatis dolorum culpa obcaecati repellat quam, libero cum ullam. Praesentium sequi necessitatibus velit similique magni, illum ea libero?</td>
                                    <td>
                                        <div className='d-flex justify-content-center gap-2'>
                                            <button className='btn btn-warning'>
                                                <i class="fa-solid fa-pen"></i>
                                            </button>
                                            <button className='btn btn-danger'>
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                            <button className='btn btn-success'>
                                                <i class="fa-solid fa-eye"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo sequi dolor ducimus, consectetur veritatis mollitia, repellendus inventore, reiciendis qui perspiciatis beatae tenetur dignissimos fuga atque ex praesentium nobis consequatur.</td>
                                    <td>
                                        <div className='d-flex justify-content-center gap-2'>
                                            <button className='btn btn-warning'>
                                                <i class="fa-solid fa-pen"></i>
                                            </button>
                                            <button className='btn btn-danger'>
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                            <button className='btn btn-success'>
                                                <i class="fa-solid fa-eye"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
