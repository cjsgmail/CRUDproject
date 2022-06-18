import './App.css';
import Read from './pages/Read';

function Header() {
  return <header className='header'>
    <h1>React-CRUD-Project</h1>
  </header>
}

function App() { 
  return (
    <div className="App">
      <Header />
      <div className='contents'>
        <Read />
      </div>
    </div>
  );
}

export default App;

