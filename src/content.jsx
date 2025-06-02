import React from 'react';

function Content({ page }) {
  const pages = {
    home: <><h1>Home</h1><p>This is the home page.</p></>,
    about: <><h1>About</h1><p>About us information.</p></>,
    services: <><h1>Services</h1><p>Our services are shown below.</p></>,
    contact: <><h1>Contact</h1><p>Email us at: xyz@gmail.com</p></>,
  };

  return <main className="content">{pages[page] || <h1>Page not found</h1>}</main>;
}

export default Content;
