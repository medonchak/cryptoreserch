import logo from './logo.svg';
import './App.css';

function App() {
  const tg = window.Telegram.WebApp
  return (
    <div className="App">
      <header className="App-header">
      
       
              {tg.initDataUnsafe.user.username}
       
        
      </header>
    </div>
  );
}

export default App;
