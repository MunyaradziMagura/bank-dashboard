import logo from './logo.svg';
import './App.css';
import Server from './components/Server'

function App() {

  async function UpBank(_token, _endpoint){
    var connection = await new Server(_token,_endpoint);

    // get data 
    var data = await connection.getUpData()
    // get accounts
    var result = await connection.accounts(data)
  }
  console.log(process.env.UP_TOKEN)

  UpBank(process.env.UP_TOKEN, '/accounts')
  
  



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
