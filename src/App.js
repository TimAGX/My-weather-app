import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';


function App() {
  const [inputValue, setInputValue] = useState("")
  const onChange=(value) => {
    setInputValue(value)
  }
  return (
    <div className="App">
    <Header onInputChange={onChange}/>
    <Weather input={inputValue}/>

    </div>
  );
}

export default App;
