import React from 'react'
import { useSelector } from 'react-redux'
import {getIsAuthSelector } from '../../redux/auth/auth.selectors'

import AuthNav from '../authNav/AuthNav'
import Navigation from '../navigation/Navigation'
import UserMenu from '../userMenu/UserMenu'

import styles from "./Header.module.css"

const Header = () => {
    
    const isAuth = useSelector(getIsAuthSelector)

    return (
        <header>
            <div className={styles.thumb}>
                <Navigation />
                
                {!!isAuth ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
    )
};


export default Header