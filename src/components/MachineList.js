import { Link } from 'react-router-dom'
import "./MachineList.css"
import React from "react";
import { Table} from 'react-bootstrap';
function MachineList() {
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
                      <th>Number of available snacks</th>
                      <th>Number of snacks sold today</th>
                      <th className="delete">DELETE</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <th className="delete">❌</th>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <th className="delete">❌</th>
                    </tr>
                    <tr>
                      <td>hn</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <th className="delete">❌</th>
                    </tr>
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