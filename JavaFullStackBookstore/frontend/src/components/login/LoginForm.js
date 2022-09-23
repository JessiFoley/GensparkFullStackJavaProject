import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = ({ setUserAttempt, userAttempt, getUsers, authenticate }) => {

    const handleChanges = e => {
        setUserAttempt({
            ...userAttempt,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div>
            <form onSubmit={authenticate}>
                <label htmlFor='username'>Username </label>
                <br />
                <input type="text" name="username" id="username" required={true} onChange={handleChanges} />
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <input type="password" name="password" id="password" required={true} onChange={handleChanges} />
                <br />
                <button type="submit">Log In</button>
            </form>
            <Link to="/signup">Sign up</Link>
        </div>
    )
}

export default LoginForm