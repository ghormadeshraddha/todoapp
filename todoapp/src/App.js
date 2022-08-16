import React, { useState } from "react";
import 'antd/dist/antd.css'; 
import {Input,Button,Switch} from 'antd';
import Todolist from "./Todolist";


function App() {

  const[item,setItem]=useState("");
  const [data,setData]=useState([]);
  const [mystyle,setMystyle]=useState({
    color:'black',
    backgroundColor:'dimgray'

})

// enable dark mode//
const enableDarkMode = () =>{
  if(mystyle.color == 'white'){
    setMystyle({
      color:'black',
      backgroundColor: 'dimgray',
    })
  }
  else{
    setMystyle({
      color:'white',
      backgroundColor:'black'
    })
  }
}
 

const addTask = (event) =>{
    setItem(event.target.value);
    // console.log(event.target.value)
  }

  //Add Item To list//

  const addList = () =>{
      setData ((olddata) => {
         return[...olddata,item];
        })
      setItem("");
  }

   //delte Item from list//

  const deleteList = (id) => {
    // console.log("delete");

    setData((olddata) => {
      return olddata.filter((arrElem,index) =>{
         return index !== id;
    })}
    )}

    //remove all //

    const removeAll = () =>{
      setData([]);
    }


  return (
    <>
    <div className="main_div" style={mystyle}>

    <Switch onClick={enableDarkMode} className="dark_mode_btn"/>
   
    <h1> TODO APP </h1>

      <Input type="text" placeholder="✍️Add New Task..." size="large" value={item} onChange={addTask}/>

      <Button className="addbtn" onClick={addList} size="large">ADD</Button>

      <ul className="list-container">
            {
              data.map((itemval,index)=>{
                 return <Todolist 
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteList}
                  />
              })
            }
      </ul>

      <Button className="removebtn" shape="round" onClick={removeAll}>Remove All</Button>

      </div>
    </>
  );
}

export default App;
