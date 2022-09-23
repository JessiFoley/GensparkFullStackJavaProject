import React, { useEffect } from 'react'

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
                <input type="text" name="username" id="username" required={true} onChange={handleChanges} />
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="password" required={true} onChange={handleChanges} />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm