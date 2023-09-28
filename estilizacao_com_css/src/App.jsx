import './App.css'
import Button from './components/Button/Button';
import HelloWorld from './components/HelloWorld';
import ThemeLightDark from './components/ThemeToggle/ThemeToggle';

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

      <div>
        <h2>3 - Tema light e dark</h2>
        <ThemeLightDark />
      </div>
    </>
  );
}

export default App;
