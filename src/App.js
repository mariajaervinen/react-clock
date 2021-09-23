
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() =>{
    console.log('componentdidmount');
    const id = setInterval(()=>{
      setTime(new Date());
    },1000);
    return() =>{
      console.log('componentwillunmount');
      clearInterval(id);
    };

  },[])

  return (
    <div style= {{margin:'30px'}}>
      {time.toLocaleTimeString()}
    </div>
  );
}

export default App;
