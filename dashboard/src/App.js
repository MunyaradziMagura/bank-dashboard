import './App.css';
import {useState, useEffect} from 'react'
import Server from './components/Server'
function App() {
  const [id, setID] = useState();

  async function UpBank(_token, _endpoint){
    var connection = await new Server(_token,_endpoint);

    // get data 
    var data = await connection.getUpData()
    console.log(data)
    // get accounts
    var result = await connection.accounts(data)
    console.log(result)
  }

  useEffect(() => {
    UpBank(id, '/accounts')

  },[id])
  
  

  return (
    
    <div className="container text-center">
      <div className="row">
      <nav className="navbar bg-light">
    {/* navigation bar */}
      <div className="container-fluid">
        <a className="navbar-brand">Up Account</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Enter Up API code" aria-label="Search" onChange={(e) => setID(e.target.value) }/>
        </form>
      </div>
    </nav>
      </div>
      <div className="row">
      <div className="col">
      1 of 3
    </div>
    <div className="col-8">



      
    </div>
    <div className="col">
      3 of 3
    </div>
      </div>
    </div>
    
  );
}

export default App;
