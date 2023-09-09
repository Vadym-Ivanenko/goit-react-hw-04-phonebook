import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './phonebook/Phonebook';
import { Filter } from './filter/Filter';
import { ContactList } from './contact-list/ContactList';
import { Wrapper, Title, Subtitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('phonebook-contacts');
    if (savedContacts) {
      const parseContacts = JSON.parse(savedContacts);
      console.log(savedContacts);
      this.setState({
        contacts: parseContacts,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'phonebook-contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  handelChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contact.`);
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          ...newContact,
        },
      ],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilterContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Phonebook onAdd={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter filter={filter} handelChange={this.handelChange} />
        <ContactList
          contactFilter={this.getFilterContacts()}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
