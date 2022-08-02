import React from 'react'
import { useState } from 'react'

export const Create = () => {
    const [project, setProject] = useState({
        projecttile: '',
        projectdectiption: ''
    })
    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Project</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className='mb-3'>
                                <label htmlFor="projecttitle" className='form-label'>Project Title</label>
                                <input
                                    type="text"
                                    id='projecttitle'
                                    name='projecttile'
                                    className='form-control'
                                    value={project.projecttile}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="projectdescription" className='form-label'>Project Description</label>
                                <textarea
                                    name="projectdectiption"
                                    id="projectdecription"
                                    cols="30"
                                    rows="10"
                                    className='form-control'
                                    value={project.projectdectiption}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-dark">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
