import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
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
                    <div className='text-center'>
                        <input className='btn btn-dark w-100 mb-3' type="button" value="Log in" />
                        <Link to={'/register'} className="text-center text-dark">Create an account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
