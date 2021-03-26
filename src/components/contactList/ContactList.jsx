import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addContact, getContacts, removeContact } from '../../redux/contacts/contacts.operations'
import { doSomeLoadingSelector, filteredContacts } from '../../redux/contacts/contacts.selectors'
import Loader from "../loader/Loader"
import sprite from "../icons/sprite.svg"

import styles from "./ContactList.module.css"


class ContactList extends PureComponent {
     

    componentDidMount() {
     this.props.getContacts()
    }
  


    handleDelete = (event) => {
        const { id } = event.target.closest("[data-id]").dataset;
        this.props.removeContact(id)

    }
     
render() {
        const {contacts,loading}=this.props

    return (

        <>
            {!contacts.length ? <h2 className={styles.noContacts}>There are no added contacts yet</h2> :
                <ul className={styles.list}>
                    {contacts.length>0 && contacts.map((contact) => (
                        <li key={contact.id} data-id={contact.id} className={styles.item}>
                            <div className={styles.textThumb}>
                                <p className={styles.text}>{contact.name}</p>
                            </div>
                            <div className={styles.textThumb}>
                                <p className={styles.text}>{contact.number}</p>
                            </div>
                            <button
                                type="button"
                                onClick={this.handleDelete}
                                className={styles.deleteBtn}
                                disabled={loading}
                                aria-label="delete contact"
                            >
                              
                            <svg width="20px" height="20px" className={styles.deleteIco}>
                                    <use href={sprite+"#bin"} />
                            </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            }

            {loading&& <Loader/>}
        </>

    )
}}

const mapStateToProps = (state) => ({
    contacts: filteredContacts(state),
    loading: doSomeLoadingSelector(state)
})

const mapDispatchToProps = {
    addContact,
    getContacts,
    removeContact
    
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
