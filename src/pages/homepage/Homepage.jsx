import React, { Component } from 'react'

import styles from "./Homepage.module.css"
import { Link } from 'react-router-dom'


 class Homepage extends Component {
    render() {
        return (
             <div>
                <h1 className={styles.title}>Wellcome to Phonebook</h1>
                <div className={styles.thumb}>
                    <Link to="/register" className={styles.link} >
                        <span> Sing up</span>
                    </Link>
                    <Link to="/login" className={styles.link} >
                            <span className={styles.label}> Login</span>
                    </Link>

                </div>
            </div>
        )
    }
}





export default Homepage
