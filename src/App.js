import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
function App() {

    /*useEffect(() => {
            await API.put('myapi', '/machine/54567c8c-c506-4248-a961-1cc35b5b0eaa', 
            {
                body: {
                    name : 'sweets===nacks',
                    address : 'Miami, FL'
                }
            }
            )
            
            API.get('myapi', '/machine').then(data => {
                setMachines(data.machine);
            })
            console.log(data)
        

        fetch('/machine').then(response =>
            response.json().then(data => {
                setMachines(data.machines);
            })
          );

    }, [])
    */
    const [textObj, setTextObj] = useState([]);

    const fetchData = async () => {
      try {


        axios.get('http:/localhost:3000/machine').then(res => {
                const data = res.data;
                setTextObj(data);
            })
      } catch (error) {
        console.log(error);
      }
  };
  useEffect(() => {
    fetchData();
  }, [
      textObj
    ]);
    
    return <>
    {textObj.map((obj) => (<>
    <span style={{}}>

TEXT{obj.name}
</span>
    </>
    ))}
    </>
}

export default App;