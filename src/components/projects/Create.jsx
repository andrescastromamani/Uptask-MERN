import React from 'react'

export const Create = () => {
    return (
        <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create Project</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form >
                            <div className='mb-3'>
                                <label htmlFor="projecttitle" className='form-label'>Project Title</label>
                                <input
                                    type="text"
                                    id='projecttitle'
                                    name='projecttile'
                                    className='form-control'
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
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-dark">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
