import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero title={
        <span>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </span>
      }>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </Hero>
    </div>
  );
}

export default App;
