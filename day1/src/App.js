import logo from './logo.svg';
import './App.css';
import {Greet} from './Component/Greet';
import Hello from './Component/Message';
import Count from './Component/Count';
import FunctionClick from './Component/FunctionClick';

function App() {
  return (
    <div className="App">
      
      <h2>Welcome to React</h2>
      {/* <Greet name="SANTOSH">
        <p>kids of greet</p>
      </Greet>
      <Hello/> */}
      <Count/>
    </div>
  );
}

export default App;
