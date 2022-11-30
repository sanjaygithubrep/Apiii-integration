
import './App.css';
import Api from './Api'; 
import Search from './Search';
// import {useContext} from "react";
// import {AppContext} from "./Context";
// import {useGlobalContext}from "./Context";


function App() {
  
  return (
    <div>
      <h1>Welcome to channel</h1>
      <Api />
      <Search />
      
     
    </div>
  );
}

export default App;
