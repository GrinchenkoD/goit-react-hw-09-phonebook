import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./AuthNav.module.css"

export default class AuthNav extends Component {
    render() {
        return (
             <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/register" className={styles.link} activeClassName={styles.activeLink}>
                        Sign up
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
                        Login
                    </NavLink>
                </li>
            </ul>
        )
    }
}
