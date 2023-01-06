import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Escovar os dentes', 'Comer', 'Escovar os dentes', 'Trybe'];

function App() {
  return (
    <>
      <div>
        <h1 className="header">Exercicio 1</h1>
        <span>
          {Task("Hello World")}
          <ul>
            {tasks.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
        </span>
      </div>
      <br />
      <br />
      <div>
        <h1>Exercicio 2</h1>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
