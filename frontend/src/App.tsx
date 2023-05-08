import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ERC20 from './components/ERC20/ERC20';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <ERC20 />
      <Footer />
    </>
  );
}

export default App;
