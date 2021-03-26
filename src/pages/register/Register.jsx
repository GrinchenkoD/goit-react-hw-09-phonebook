import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/auth.operations'
import styles from "./Register.module.css"


const initialState = {
    name:'',
    email: '',
    password:''
}
const Register = () => {

    const [ user, setUser ] = useState(initialState);
    const dispatch = useDispatch();


    const handleChange = (event) => {
       const { name, value } = event.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

     
   const handleSubmit = (event) => {
        event.preventDefault();
       dispatch(register(user));

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}> Name
                    <input id="name"
                    name='name'
                    type="text"
                    className={styles.input}
                    placeholder="Name*"
                    value={user?.name}
                    onChange={handleChange}
                    required
                />
            </label>
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
            <button type="submit" className={styles.submitBtn}>Sign up</button>
        </form>
    );
    
};

export default Register