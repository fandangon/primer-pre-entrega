import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
       <ItemListContainer greeting="Bienvenidos!!!"/>
       <ItemListContainer foto="como se pone una foto aca?"/>
         <ItemListContainer pieFoto="Bienvenidos a la primera pre entrega del proyecto final del curso REACT-CoderHouse!!"/>
       
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
