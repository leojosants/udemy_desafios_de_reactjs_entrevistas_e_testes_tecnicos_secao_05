import './App.css'
import Button from './components/ButtonComponent/Button';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <>
      <div>
        <h2>1 - Hello World com estilos</h2>
        <HelloWorld />
      </div>

      <div>
        <h2>2 - Estilo com CSS externo</h2>
        <Button />
      </div>
    </>
  );
}

export default App;
