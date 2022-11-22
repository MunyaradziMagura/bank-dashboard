import './App.css';
import {useState, useEffect} from 'react'
import Server from './components/Server'
import Accounts from './components/Accounts';
function App() {
  const [id, setID] = useState();
  const [accountsList, setAccountsList] = useState(["none"])
  async function UpBank(_token, _endpoint){
    const connection = await new Server(_token,_endpoint);

    // get data 
    const data = await connection.getUpData()
    // get accounts
    const getAccounts = await connection.accounts(data)
    setAccountsList(getAccounts)
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
        <h1 className="navbar-brand">Up Account</h1>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Enter Up API code" aria-label="Search" onChange={(e) => setID(e.target.value) }/>
        </form>
      </div>
    </nav>
      </div>
      <div className="row">
      <div className="col"/>
      {/* main page content */}
    <div className="col-12">

    <div className="row gy-3">
    <div className="col-12">
    {/* generates cards for each account */}
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {accountsList.map(account => (
        <Accounts account={account}/>
      ))}
    </div>

    </div>
    <div className="col-12">
      <div className="p-3 border bg-light">account content</div>
    </div>
    </div>


      
    </div>
    <div className="col"/>
    </div>
    </div>
    
  );
}

export default App;
