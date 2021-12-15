import { Link } from 'react-router-dom'
import "./MachineList.css"
import { Table} from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { API } from 'aws-amplify'

function MachineList() {
  const [textObj, setTextObj] = useState([]);
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
  async function deleteObj(id) {
    const del = await API.del('myapi', `/machine/${id}`)
    console.log(del);
  }
  

  
  return (
    <>
<div className="header">
      <img className="logo" src="https://i.pinimg.com/originals/64/95/2d/64952d889c8bbffccd9a6722d62d5329.jpg" />
      <h2 className="create-link" >
      <Link className="internal-create-link" to="/add-machine">Add new machine</Link></h2>
</div>
<div className="explanation">
    ** Here is the list of vending machines where you can buy snacks **
</div>

<div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>GPS location</th>
                      <th>Menu</th>
                      <th>Available brands</th>
                      <th>Available snacks</th>
                      <th>Snacks sold today</th>
                      <th>DELETE</th>

                    </tr>
                  </thead>
                  <tbody>
                  {textObj.map((machine) => (
                    <tr>
                      <td>{machine.name.S}</td>
                      <td>{machine.address.S}</td>
                      <td>{machine.gpslocation.S}</td>
                      <td>{machine.menu.S}</td>
                      <td>{machine.availablebrands.S}</td>
                      <td>{machine.availablesnacks.S}</td>
                      <td>{machine.snackssoldtoday.S}</td>
                      <th className="delete" onClick={() => deleteObj(machine.id.S)}>❌</th>
                    </tr>
                    
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>


</>
  );
}

export default MachineList;