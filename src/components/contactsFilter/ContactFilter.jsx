import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../../redux/contacts/contacts.actions'

import {filterSelector} from "../../redux/contacts/contacts.selectors"

import styles from "./ContactFilter.module.css"

const ContactFilter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(filterSelector)
    
    const onHandleFilter = (event) => {
        dispatch( filterChange(event.target.value)) 
       
    }

    return (
        <div>
            <label htmlFor='search' className={styles.label} >Find contacts by name</label>
            <input id="search" type="text" className={styles.input} name="search" value={filter}
                onChange={onHandleFilter} placeholder="Name*" />
        </div>
    )

}


export default ContactFilter