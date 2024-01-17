import './App.css';
import { useState, useEffect } from 'react'
import Server from './components/Server'
import Accounts from './components/Accounts'
import Navigation from './components/Navigation'
import Transactions from './components/Transactions'
import Charts from './components/Charts'
function App() {
  const [id, setID] = useState<string | null>(localStorage.getItem('ApiKey'));  // this signifies the upbank API id and remove the collen at the begining
  const [accountsList, setAccountsList] = useState<any>([]) // a list of all account names on the bank account 
  const [selectedAccountID, setSelectedAccountID] = useState<any>(0) // id of the selected account is set when the account div is clicked
  const [selectedAccountData, setSelectedAccountData] = useState<any>({}) // all data about a selected account
  const [transactionsByAccount, setTransactionsByAccount] = useState<any>([])
  const [data, setData] = useState<any>([{}])

  async function UpBank(_token: any, _endpoint: any, _callType: any, _accountID: any = null) {
    const connection = await new Server(_token, _endpoint);

    switch (_callType) {
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
      default:
        console.log("Account type not selected");
        break;

    }
  }
  useEffect(() => {
    UpBank(id, '/accounts', 'accounts')
  }, [id])

  useEffect(() => {
    //  return data for the clicked on account
    setSelectedAccountData(data.find((account: any) => account.id == selectedAccountID))

    UpBank(id, '/accounts', 'transactionXaccount', selectedAccountID)
  }, [selectedAccountID])



  return (

    <>
      <Navigation {...{ setID: setID }} />

      {/* main page content */}
      <div className="row" style={{ height: '1000px' }}>
        <div className="col-8" style={{ border: '2px dotted orange' }}>
          <div className="mb-1" style={{ backgroundColor: 'rgba(201, 76, 76, 0.3)' }}><Charts /></div>
          {/* generates cards for each account */}
          <div className="row mb-1" style={{ backgroundColor: 'rgba(201, 176, 76, 0.3)' }}>
            {accountsList.map((account: any) => (
              <>
                <Accounts {...{ accountID: account[0], account: account[1], select: setSelectedAccountID }} />
                {console.log(account[0])}
              </>
            ))}
          </div>
          <div className="mb-1" style={{ backgroundColor: 'rgba(300, 76, 76, 0.3)' }}><h1>Weekly Transactions</h1><Transactions transactionData={transactionsByAccount} /></div>
        </div>

        <div className="col-4 p-0" style={{ border: '2px dotted purple' }}>
          <div style={{ height: '100px', border: '2px dotted blue' }}>

          </div>
          <div style={{ height: '500px', border: '2px dotted green' }}>

          </div>
        </div>
      </div>
    </>

  );
}

export default App;
