import { createAction } from "@reduxjs/toolkit";

// =========  get contacts  ========
const getContactsRequest = createAction("contacts/get-contacts-request");
const getContactsSuccess = createAction("contacts/get-contacts-success");
const getContactsError = createAction("contacts/get-contacts-error");

//=========== add contact ==============

const addContactRequest = createAction("contacts/add-contact-request");
const addContactSuccess = createAction("contacts/add-contact-success");
const addContactError = createAction("contacts/add-contact-error");

//=========== delete contact ==============
const removeContactRequest = createAction("contacts/remove-contact-request");
const removeContactSuccess = createAction("contacts/remove-contact-success");
const removeContactError = createAction("contacts/remove-contact-error");
// =============== patch contact ==================

const filterChange = createAction("contacts/filter-change");

export {
  filterChange,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  addContactError,
  addContactSuccess,
  addContactRequest,
  getContactsError,
  getContactsSuccess,
  getContactsRequest,
};
