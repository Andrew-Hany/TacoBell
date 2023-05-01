import logo from './images/TacoBell2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo}  alt="logo" />
  
   
        <p class="opening-date">Opening will be on 31th May</p>
        <button class="btn  rounded-pill reserve_seat" type="submit">Book Your seat </button>
          {/* Learn React */}
     
      </header>
    </div>
  );
}

export default App;
