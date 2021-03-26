import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/auth/auth.operations'
import { getNameSelector } from '../../redux/auth/auth.selectors'
import styles from "./UserMenu.module.css"


const UserMenu = () => {

    const name = useSelector(getNameSelector);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
    };
    
    
    return (
        <div className={styles.thumb}>
            <p className={styles.text}>
                Logged in as, &nbsp;
            </p>
            <span className={styles.name}>
                    {name}
            </span>
            
            
            <button type="button" className={styles.btn} onClick={ handleLogout }>Logout</button>
        </div>
    )
}


export default  UserMenu

