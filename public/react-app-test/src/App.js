import logo from './logo.svg';
import './App.css';
import { HelloMessage } from './Components/TestTriggerFromComponent';
import { Square } from './Components/Square';
import { TicketContainer } from './Components/TicketContainer';
import { ticket } from './Ticket';

function App() {
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
        <TicketContainer Ticket = {ticket}>
          
        </TicketContainer>
        
      </header>
    </div>
  );
}

export default App;
