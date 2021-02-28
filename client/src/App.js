import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import TextFields from '@material-ui/icons/TextFields';
import {makeSyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
         href='#'
          onClick={()=>alert('da vjncj dissonance')}
           variant='outlined'
            color='secondary'
            size='small'
            style={{fontSize:12}}
            startIcon={<SaveIcon
            />{/**I can make anything I want to happen, happen on the click of a button|I can even run a function from my store directory|figured out how to comprehend the material-ui syntax|can set buttons to a 'Link' */}
          da Vjncj dissonance
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
