import { Link } from 'react-router-dom'
import './MachineList.css'
import './AddMachine.css'

function AddMachine() {
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
        type="text"
        className="form-control inputs"
        id="name"
      />
      <label htmlFor="address" className="input-names">Enter address:</label>
      <input
        type="text"
        className="form-control inputs"
        id="address"
      />
      <label htmlFor="gps" className="input-names">Enter GPS location:</label>
      <input
        type="text"
        className="form-control inputs"
        id="gps"
      />
      <label htmlFor="brands" className="input-names">Enter available brands:</label>
      <input
        type="text"
        className="form-control inputs"
        id="brands"
      />
      <label htmlFor="snacks-number" className="input-names">Enter numnber of available snacks:</label>
      <input
        type="text"
        className="form-control inputs"
        id="snacks-number"
      />
      <label htmlFor="snacks-number-sold" className="input-names">Enter numnber of snacks cold today:</label>
      <input
        type="text"
        className="form-control inputs"
        id="snacks-number-sold"
      />
<h2 className="create-link center" >
      <Link className="internal-create-link" to="/">Save</Link></h2>

    </div>
    </>
  );
}

export default AddMachine;