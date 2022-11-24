import './App.css';
import {useState, useEffect} from 'react'
import Server from './components/Server'
import Accounts from './components/Accounts'
import Navigation from './components/Navigation'
import Transactions from './components/Transactions'
import Charts from './components/Charts'
function App() {

  const [id, setID] = useState();  // this signifies the upbank API id 
  const [accountsList, setAccountsList] = useState([]) // a list of all account names on the bank account 
  const [selectedAccountID, setSelectedAccountID] = useState(0) // id of the selected account is set when the account div is clicked
  const [selectedAccountData, setSelectedAccountData] = useState({}) // all data about a selected account
  const [transactionsByAccount, setTransactionsByAccount] = useState([])
  const [data, setData] = useState([{}])

  async function UpBank(_token, _endpoint, _callType, _accountID = null){
    const connection = await new Server(_token,_endpoint);

    switch(_callType){
      case 'accounts':
        // get account data 
        const accountData = await connection.getUpData()
        setData(accountData)
        // get accounts
        setAccountsList(await connection.accounts(accountData))
        break;
      case 'transactionXaccount':
        const accountTransactionHistory = await connection.accountTransactions(_accountID)
        // set transaction history
        setTransactionsByAccount(accountTransactionHistory)
        break;
    }
  }
  useEffect(() => {
    UpBank(id, '/accounts', 'accounts')

  },[id])

  useEffect(() => {
  //  return data for the clicked on account
  setSelectedAccountData(data.find(account => account.id == selectedAccountID))

  UpBank(id, '/accounts', 'transactionXaccount', selectedAccountID)
  },[selectedAccountID])
  
  

  return (
    
    <div className="ms-5 me-5">
      
      <Navigation setID={setID}/>

      {/* main page content */}
      <div className="row">
    <div className="row gy-3">
    <div className="col">
    {/* generates cards for each account */}
    <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
      {accountsList.map(account => (
        <Accounts accountID={account[0]} account={account[1]} select={setSelectedAccountID} />
      ))}
    </div>

    </div>
    <div className="col-12">
      <div className="p-3 border bg-light">
      <div className="row">
      <div className="col-4"><h1>Weekly Transactions</h1><Transactions transactionData={transactionsByAccount}/></div>
        <div className="col-8"><Charts/></div>
      </div>

      </div>
    </div>
    </div>
    </div>
    </div>
    
  );
}

export default App;
