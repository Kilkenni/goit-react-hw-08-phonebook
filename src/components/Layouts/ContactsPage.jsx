import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

export default function ContactsLayout(props) {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        //onSubmit={(newContact) => {addContact(newContact)}}
      />

      <h2>Contacts</h2>

      <Filter
        //value={filter}
        //onChange={onFilterChange}
      />

      <ContactList
        //contacts={contacts}
        //filter={filter}
      />
    </>
  )
}