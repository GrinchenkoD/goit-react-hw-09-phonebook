import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/auth.operations'


import styles from "./Login.module.css"

const initialState = {
    email: '',
    password:''
}
const Login = () => {
    
    const [ user, setUser ] = useState(initialState);
    const dispatch = useDispatch();


    const handleChange = (event) => {
       const { name, value } = event.target;
        setUser((prevState)=>({...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(logIn(user));
    };


    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.label}>Email
                    <input id="email"
                    name='email'
                    type="mail"
                    className={styles.input}
                    placeholder="Email*"
                    value={user?.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="password" className={styles.label}>Password
                    <input id="password"
                    name='password'
                    type="password"
                    className={styles.input}
                    placeholder="Password*"
                    value={user?.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit" className={styles.submitBtn}>Log in</button>
        </form>
    )
    
};

export default Login;