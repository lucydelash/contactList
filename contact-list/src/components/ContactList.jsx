import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setContacts(result);
        console.log("Contacts from API: ", result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  console.log("Contacts state variable: ", contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
}