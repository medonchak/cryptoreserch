import logo from './logo.svg';
import './App.css';

function App() {
  const tg = window.Telegram.WebApp
  const test =  tg.initDataUnsafe.user
  return (
    <div className="App">
      <header className="App-header">
      
      {test}
             
       
        
      </header>
    </div>
  );
}

export default App;
