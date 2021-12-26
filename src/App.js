import React, { useState, useEffect } from 'react';
import "./styles.css";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'  
import MachineList from './components/MachineList';
import AddMachine from './components/AddMachine';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    

      return (
        <Router>
          <Routes>
          <Route path="/" element={<MachineList />} />
          <Route path="/add-machine" element={<AddMachine />} />
          </Routes>
        
        </Router>
    
      );

}

export default App;