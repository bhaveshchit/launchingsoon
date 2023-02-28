import logo from './logo.svg';
import r from "./img/r.png"
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='image'>

     </div>

     <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'><img src={r} alt="SPEAKOV LOGO" className='imagelogo' /></div>
        <div className='col-md-6 ' ><h1 className='text'>Launching Soon..</h1></div>

      </div>
     </div>
    </div>
  );
}

export default App;
