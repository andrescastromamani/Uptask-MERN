import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Register = () => {
    const [user, setUser] = useState({});
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='login-content d-flex justify-content-center align-items-center'>
            <div className='form-content shadow p-4 bg-light rounded'>
                <h2 className='text-center h3'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmpassword"
                            name="confirmpassword"
                            className="form-control"
                            value={user.confirmpassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-dark w-100 mb-3' type="button" value="Register" />
                        <Link to={'/login'} className="text-center text-dark">do you have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
