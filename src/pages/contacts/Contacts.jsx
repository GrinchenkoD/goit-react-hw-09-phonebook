import React from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import ContactList from '../../components/contactList/ContactList'
import ContactFilter from '../../components/contactsFilter/ContactFilter'

const Contacts = () => {
    return (
    <div className="">
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
    )
}

export default Contacts
