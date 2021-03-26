import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/contacts/contacts.operations'
import { allContactsSelector } from '../../redux/contacts/contacts.selectors'

import styles from "./ContactForm.module.css"

const initialState = {
    name: "",
    number: ""
}

const ContactForm =()=> {
   
    const [contact, setContact] = useState();
    const dispatch = useDispatch();
    const contacts = useSelector(allContactsSelector);

  const  handleChange = (event) => {
    const {name, value} = event.target;
      setContact({...contact, [name]: value });

    }
   const  handleSubmit = (event) => {
       event.preventDefault();

        if (contacts.some((item) => item.name ===contact.name)) {
            alert(`${contact.name} is already exist`);
            return;
        }
       dispatch(addContact(contact));
       setContact({ ...initialState });
    }


    
        // const { name, number } = contact
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Phonebook</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="name" className={styles.label} >Name</label>
                    <input id="name" type="text" name="name" value={contact?.name} onChange={handleChange}
                        placeholder="Name*" required className={styles.input} />

                    <label htmlFor="number" className={styles.label}>Number</label>
                    <input id="number" type="tel" name="number" value={contact?.number} onChange={handleChange}
                        placeholder="Phone number*" required className={styles.input} />

                    <button
                        type="submit"
                        className={styles.submitBtn}
                    >
                        Add contact
                </button>
                </form>
            </div>
        )
}




export default ContactForm;