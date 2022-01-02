import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='redcolor'> Hello React</h1>

      {[1,2,3,4,5].map(e=>{
        return <h1>hello {e}</h1>
      })}

      <Button/>
    </div>
  );
}

function Button(){
  return <button>submit</button>
}
export default App;
