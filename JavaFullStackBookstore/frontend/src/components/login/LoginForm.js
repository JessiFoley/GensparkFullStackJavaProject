import React, { useState } from 'react'

import bcrypt from "bcryptjs"

const LoginForm = () => {

    const [password, setPassword] = useState()

    const authenticate = async () => {
        const salt = bcrypt.genSaltSync(10)
        alert(salt)

        //the salt from above has been hardcoded so it won't change every time.
        alert(bcrypt.hashSync(password, "$2a$10$FJI.ukGRoDjUQwjmrYgNPu"))
        
    }

  return (
    <div>
        <form onSubmit={authenticate}>
            <label htmlFor='username'>Username </label>
            <input type="text" name="username" id="username" required={true} />
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" id="password" required={true} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default LoginForm