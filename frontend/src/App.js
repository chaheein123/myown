import './App.css';
import Greet from "./components/Greet"
import Message from './components/Message';
import Postredis from './components/Postredis';

function App() {
  return (
    <div className="App">
      {/* <Greet name="sammmm">

        <button>Action</button>
      </Greet> */}
      {/* <Message /> */}
      {/* <Greet /> */}
      <Postredis />
      
    </div>
  );
}

export default App;
