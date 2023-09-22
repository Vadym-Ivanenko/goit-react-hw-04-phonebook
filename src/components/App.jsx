import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './phonebook/Phonebook';
import { Filter } from './filter/Filter';
import { ContactList } from './contact-list/ContactList';
import { Wrapper, Title, Subtitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem('contacts');

    if (saveContacts !== null) {
      const parsedContacts = JSON.parse(saveContacts);
      return parsedContacts;
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handelChange = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contact.`);
    }
    setContacts(prevContacts => [
      ...prevContacts,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Phonebook onAdd={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter filter={filter} handelChange={handelChange} />
      <ContactList
        contacts={getFilterContacts()}
        deleteContact={deleteContact}
      />
    </Wrapper>
  );
};
