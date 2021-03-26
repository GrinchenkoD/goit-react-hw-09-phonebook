// const filteredContacts = (state) =>
//   state.contacts.items.filter((contact) =>
//     contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
//   );

import { createSelector } from "reselect";

const allContactsSelector = (state) => state.contacts.items;

const filterSelector = (state) => state.contacts.filter;

const doSomeLoadingSelector = (state) => state.contacts.loading;

const filteredContacts = createSelector(
  [allContactsSelector, filterSelector],
  (items, filter) =>
    items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export {
  allContactsSelector,
  filterSelector,
  doSomeLoadingSelector,
  filteredContacts,
};
