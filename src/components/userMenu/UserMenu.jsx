import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logOut } from '../../redux/auth/auth.operations'
import { getIsAuthSelector, getNameSelector } from '../../redux/auth/auth.selectors'
import styles from "./UserMenu.module.css"


const UserMenu = ({ name, onLogout, history, isAuth }) => {

    const handleLogout = () => {
        onLogout().then(() => {
              console.log(!isAuth)
            if (!isAuth) {
                history.push("/")
            }
        })
    }
    
    
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
const mapStateToProps = (state) => ({
    name: getNameSelector(state),
    isAuth: getIsAuthSelector(state)
})

const mapDispatchToProps = {
   onLogout: logOut,
}


export default connect(mapStateToProps,mapDispatchToProps) (withRouter(UserMenu))

