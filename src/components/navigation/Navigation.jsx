import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { getIsAuthSelector } from '../../redux/auth/auth.selectors'

import styles from "./Navigation.module.css"

const Navigation = ({isAuth}) => {
    return (
        <div className={styles.thumb}>
            <span><Link to="/" className={styles.logo}>LOGO</Link></span>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
                            Главная
                            </NavLink>
                    </li>

                    {!!isAuth&&
                   ( <li className={styles.item}>
                        <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
                            Контакты
                        </NavLink>
                    </li>)}
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = (state)=> ({
   isAuth: getIsAuthSelector(state)
})


export default connect(mapStateToProps,null) (Navigation)
