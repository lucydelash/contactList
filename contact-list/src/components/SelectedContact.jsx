import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log("Contact from API: ", result);
      } catch (error) {
        console.error(error);
      }
    }
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      {contact && (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      )}
    </div>
  );
}