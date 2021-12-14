import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import "./styles.css";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'  
import MachineList from './components/MachineList';
import AddMachine from './components/AddMachine';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [textObj, setTextObj] = useState([]);
    /*API.post('myapi', '/machine', { 
      body: { 
        name: 'Mch22', 
        address: 'Miami FL', 
      } 
    })
    */
    /*API.del('myapi', `/machine/58b6e523-aa95-4e25-bed0-78c1d4137b7c`)*/
    const data=API.get('myapi', `/machine`)
    console.log(data)


    const fetchData = async () => {
        try {
          const data = await API.get('myapi', '/machine');
          console.log(data)
          setTextObj(data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchData();
      }, [
        textObj
      ]);

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