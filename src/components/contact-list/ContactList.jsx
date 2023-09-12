import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name} : {contact.number}
          <Button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
