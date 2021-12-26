import { Link } from 'react-router-dom'
import React, {useState, useeffect, useEffect} from 'react';
import './MachineList.css'
import './AddMachine.css'
import axios from "axios";


const AddMachine = () => {
  const [name, setName] = useState('some machine');
  const [gpslocation, setGpsLocation] = useState('York, Pennsylvania, United States of America. Latitude: 39.962398 | Longitude: -76.727392');
  const [availablebrands, setAvailableBrands] = useState('Nestle, Roshen');
  const [menu, setMenu] = useState('chocolate bars, candy, wafels');
  const [address, setAddress] = useState('York, PA');
  const [availablesnacks, setAvailableSnacks] = useState('1200');
  const [snackssoldtoday, setSnacksSoldToday] = useState('96');
  const [sensorId, setSensorId] = useState("dsf");
  const [sensorType, setSensorType ]= useState("fdsf");
  const [timestamp, setTimestamp ]= useState("fdsf");
  const [apiKey, setApiKey]= useState("standart_key")


  async function SaveMachine(name, gpslocation, availablebrands, menu,address, availablesnacks, snackssoldtoday, sensorId, sensorType, timestamp, apiKey) {
    const body = {
      name: name,
      gpslocation: gpslocation,
      availablebrands: availablebrands, 
      menu: menu, 
      address: address, 
      availablesnacks: availablesnacks, 
      snackssoldtoday: snackssoldtoday,
      sensorId: sensorId, 
      sensorType: sensorType, 
      timestamp: timestamp, 
      API_KEY: apiKey
  };
  const data = await axios.post(`http://www.iotctlab1.xyz/api/`, {body})
  
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
      <label htmlFor="sensorId" className="input-names">Enter sensor id:</label>
      <input
        onChange={(e) => setSensorId(e.target.value)}
        type="text"
        className="form-control inputs"
        id="sensorId"
      />
      <label htmlFor="sensorType" className="input-names">Enter sensor type:</label>
      <input
        onChange={(e) => setSensorType(e.target.value)}
        type="text"
        className="form-control inputs"
        id="sensorType"
      />
      <label htmlFor="timestamp" className="input-names">Enter timestamp:</label>
      <input
        onChange={(e) => setTimestamp(e.target.value)}
        type="text"
        className="form-control inputs"
        id="timestamp"
      />
      <label htmlFor="secretKey" className="input-names">Enter secret key:</label>
      <input
        onChange={(e) => setApiKey(e.target.value)}
        type="text"
        className="form-control inputs"
        id="secretKey"
      />
<h2 className="create-link center" >
      <Link className="internal-create-link" to="/" onClick={() => SaveMachine(name, gpslocation, availablebrands, menu,address, availablesnacks, snackssoldtoday, sensorId, sensorType, timestamp, apiKey)}>Save</Link></h2>

    </div>

  
    </>
  );
}

export default AddMachine;