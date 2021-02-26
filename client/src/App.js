import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Icons

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
         href='#'
          onClick={()=>alert('da Vjncj dissonance')}
           variant='outlined'
            color='secondary'
            size='small'
            style={{fontSize:12}}>{/**I can make anything I want to happen, happen on the click of a button|I can even run a function from my store directory|figured out how to comprehend the|can set buttons to a 'Link' */}
          2D surface layer
        </Button>
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
