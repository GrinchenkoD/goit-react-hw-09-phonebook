import React from 'react'
import styles from "./Loader.module.css"

function Loader() {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.ldsSpinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Loader
