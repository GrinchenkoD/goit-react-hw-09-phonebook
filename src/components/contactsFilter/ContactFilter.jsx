import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../../redux/contacts/contacts.actions'
// import { addFilter } from "../../redux/phoneBook/phone.action"
import {filterSelector} from "../../redux/contacts/contacts.selectors"

import styles from "./ContactFilter.module.css"

const ContactFilter = ({ filterChange, filter }) => {

    return (
        <div>
            <label htmlFor='search' className={styles.label} >Find contacts by name</label>
            <input id="search" type="text" className={styles.input} name="search" value={filter}
                onChange={(event) => { filterChange(event.target.value) }} placeholder="Name*" />
        </div>
    )

}

const mapDispatchToProps = { filterChange }
const mapStateToProps = (state) => ({
    filter: filterSelector(state)
})


export default connect(mapStateToProps, mapDispatchToProps) (ContactFilter)