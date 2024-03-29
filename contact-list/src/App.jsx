import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList'; // Importing the ContactList component

function App() {
  const [] = useState(0);

  return (
    <>
      <ContactList /> {/* Using the ContactList component within the React fragments */}
    </>
  );
}

export default App;