import React from 'react'

export const Login = () => {
    return (
        <div className='login-content d-flex justify-content-center align-items-center'>
            <div className='form-content shadow p-3 bg-light rounded'>
                <h2 className='text-center h3'>Login</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className="form-control" />
                    </div>
                    <div>
                        <input className='btn btn-dark w-100' type="button" value="Log in" />
                    </div>
                </form>
            </div>
        </div>
    )
}
