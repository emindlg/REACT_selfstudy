import './App.css';
import Main from "./components/Main";
import Data from "./components/Data";


function App() {
  let tempData = Data;
  return (
    <div className="App">

      <Main tempDataProp={tempData}/>
      
    </div>
  );
}

export default App;
