import './App.css';
import NavBar from '../src/components/NavBar'
import ItemListContainer from '../src/components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenido a nuestra página! A continuación te mostramos nuestra lista de productos"/>
    </div>
  );
}

export default App;
