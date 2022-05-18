// import { useState } from 'react';
import './App.css';
// import { BasicForm } from './components/hooks/Forms/BasicForm';
import { UseEffects1 } from "./components/hooks/UseEffect/UseEffects1";
// import { ShortCirc } from './components/hooks/ShortCirc';
// import { TodoList } from './components/hooks/TodoList';
// import { UseStateArray } from './components/hooks/UseStateArray';
// import { UseStateObject } from './components/hooks/UseStateObject';
// import { Hook } from './components/hooks/Hook';
// import { RulesHook } from "./components/hooks/RulesHook";

function App() {
  // const[count,setCount]=useState(0);
  // const[myName,setMyName]=useState("vikrant")
  // const increment =()=>{
  //  const num=count+1;
  //   setCount(num)
  // }
  // const decrement =()=>{
  //   const num=count-1;
  //    setCount(num)
  //  }
  //  const changeName=()=>{
  //   setMyName("vikrant shishodia");
  //   let val=myName;
  //   (val === "vikrant" ) ?  setMyName("vikrant shishodia") :  setMyName("vikrant");
    
  //  }
  return (
    <div className="App">
      {/* <Hook count={count} increment={increment} decrement={decrement} myName={myName} changeName={changeName}/>  */}
      {/* <RulesHook /> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject /> */}
      {/* <TodoList/> */}
      {/* <ShortCirc /> */}
      {/* <BasicForm/> */}
      <UseEffects1 />
    </div>
  );
}

export default App;
