import React from 'react'
import { connect } from 'react-redux'
import {getIsAuthSelector } from '../../redux/auth/auth.selectors'

import AuthNav from '../authNav/AuthNav'
import Navigation from '../navigation/Navigation'
import UserMenu from '../userMenu/UserMenu'

import styles from "./Header.module.css"

const Header = ({ isAuth }) => {
    
    return (
        <header>
            <div  className={styles.thumb}>
                <Navigation />
                
                {!!isAuth? <UserMenu/> :<AuthNav /> }
                
            </div>
        </header>
    )
}

// const mapStateToProps = (state) => ({
    
// })

const mapStateToProps = (state)=> ({
   isAuth: getIsAuthSelector(state)
})


export default connect(mapStateToProps,null) (Header)
