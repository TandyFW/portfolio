import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <main className="App">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
