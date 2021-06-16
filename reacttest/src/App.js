import Web3 from 'web3';

function App() {
  var web3 = new Web3();
  var accounts = accounts[];
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
    web3.eth.getAccounts((error, accounts) => console.log(accounts[0]));
  }


  return (
      <div>{accounts[0]}</div>
  );
}

export default App;
