import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';  // Ensure you're using 'react-router-dom'
import Validationpage from './components/validationPage';
import HomePage from './components/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Validationpage />} />
          <Route path="/" element={<HomePage />} />

        </Routes>
      </>
    );
  }
}

export default App;
