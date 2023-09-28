import './App.css'
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import HelloWorld from './components/HelloWorld';
import StyleComponentExample from './components/StyleComponentExample';
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

      <div>
        <h2>4 - Styled Components</h2>
        <StyleComponentExample />
      </div>

      <div>
        <h2>5- SASS cm React</h2>
        <Card title={'Título'} body={'Descrição'} />
      </div>
    </>
  );
}

export default App;
