import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//
import Navbar from './components/Navbar'; 
import Home from './Pages/Home';
import Quiz from './Pages/Quiz/Quiz';
import Form from './Pages/Form/Form';
import Quotes from './Pages/Quotes/Quotes';
import Calculator from './Pages/Calculator/Calculator';

  
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Quiz' element={<Quiz/>} />
        <Route path='/Calculator' element={<Calculator/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/Quotes' element={<Quotes/>} />
    </Routes>
    </Router>
  );
}

export default App;
