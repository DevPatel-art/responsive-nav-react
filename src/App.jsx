import React, { useState } from 'react';
import NavBar from './NavBar';
import Content from './Content';
import './index.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <NavBar setPage={setPage} />
      <Content page={page} />
    </>
  );
}

export default App;
