import logo from './logo.svg';
import './App.css';

function App() {
  const tg = window.Telegram.WebApp
  const test =  tg.initDataUnsafe.user
  return (
    <div className="App">
    
      
      {test}
             
       
        
   
    </div>
  );
}

export default App;
