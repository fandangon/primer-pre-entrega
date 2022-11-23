import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
       <ItemListContainer greeting="farmacia tonini"/>
       <ItemListContainer foto="como se pone una foto aca?"/>
         <ItemListContainer pieFoto="Farmacia Tonini se encuentra Ubicada en Avellaneda 3498, Santa Fe, desde hace mas de 90 años trabaja diariamente enfocada en su compromiso con la salud y orientación a satisfacer las necesidades de sus clientes. Somos una farmacia dinámica, profesional, humana y vanguardista que lleva años apostando por un nuevo concepto de Farmacia más cercana y profesional, que trabaja día a día por y para los que confían en nosotros. 
Nuestro objetivo es ofrecer una respuesta flexible a las oportunidades y cambios del mercado manteniendo siempre un gran stock que permite la respuesta inmediata a las necesidades del cliente. Las claves de nuestro éxito se basan en la capacitación continua de nuestro personal, en la satisfacción de nuestros clientes, en el uso de las nuevas tecnologías y, sobretodo, en una dedicación permanente por la innovación en todos los servicios profesionales que ofrecemos, en beneficio del cliente."/>
       
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
