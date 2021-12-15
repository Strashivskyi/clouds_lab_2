import { Link } from 'react-router-dom'
import React, {useState, useeffect, useEffect} from 'react';
import './MachineList.css'
import './AddMachine.css'
import {Button, Form} from "react-bootstrap";
import { API } from 'aws-amplify'



const AddMachine = () => {
  const [name, setName] = useState('');
  const [gpslocation, setGpsLocation] = useState('');
  const [availablebrands, setAvailableBrands] = useState('');
  const [menu, setMenu] = useState('');
  const [address, setAddress] = useState('');
  const [availablesnacks, setAvailableSnacks] = useState('');
  const [snackssoldtoday, setSnacksSoldToday] = useState('');

  async function SaveMachine(name, gpslocation, availablebrands, menu,address, availablesnacks, snackssoldtoday) {

    const data = await API.post('myapi', '/machine', {
        body: {
            name: name,
            gpslocation: gpslocation,
            availablebrands: availablebrands, 
            menu: menu, 
            address: address, 
            availablesnacks: availablesnacks, 
            snackssoldtoday: snackssoldtoday
        }
    })

    console.log(data)

}
 

  return (
    <>
<div className="header">
      <img className="logo" src="https://i.pinimg.com/originals/64/95/2d/64952d889c8bbffccd9a6722d62d5329.jpg" />
      <h2 className="create-link" >
      <Link className="internal-create-link" to="/">Back to list</Link></h2>
</div>
<div className="explanation">
    ** Add new vending machine to the list **
</div>
<div className="form-group">
      <label htmlFor="name" className="input-names">Enter name:</label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="form-control inputs"
        id="name"
      />
      <label htmlFor="address" className="input-names">Enter address:</label>
      <input
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        className="form-control inputs"
        id="address"
      />
      <label htmlFor="gps" className="input-names">Enter GPS location:</label>
      <input
        onChange={(e) => setGpsLocation(e.target.value)}
        type="text"
        className="form-control inputs"
        id="gps"
      />
      <label htmlFor="brands" className="input-names">Enter available brands:</label>
      <input
        onChange={(e) => setAvailableBrands(e.target.value)}
        type="text"
        className="form-control inputs"
        id="brands"
      />
      <label htmlFor="snacks-number" className="input-names">Enter numnber of available snacks:</label>
      <input
        onChange={(e) => setAvailableSnacks(e.target.value)}
        type="text"
        className="form-control inputs"
        id="snacks-number"
      />
      <label htmlFor="snacks-number-sold" className="input-names">Enter numnber of snacks cold today:</label>
      <input
        onChange={(e) => setSnacksSoldToday(e.target.value)}
        type="text"
        className="form-control inputs"
        id="snacks-number-sold"
      />
      <label htmlFor="menu" className="input-names">Enter menu:</label>
      <input
        onChange={(e) => setMenu(e.target.value)}
        type="text"
        className="form-control inputs"
        id="menu"
      />
<h2 className="create-link center" >
      <Link className="internal-create-link" to="/" onClick={() => SaveMachine(name, gpslocation, availablebrands, menu,address, availablesnacks, snackssoldtoday)}>Save</Link></h2>

    </div>

  
    </>
  );
}

export default AddMachine;