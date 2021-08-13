import './App.css';
import React , {useState} from "react";
import ToDoLists from './ToDoLists';
function App() {
  const [inputList, setInputList]=useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
     setItems((oldItems) =>{
        return[...oldItems,inputList];
     });
     setInputList("");
  }; 
  const deleteItems = (id) =>{
    console.log('deleted');
    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
        return index !== id;
      });
    });
    
};
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1> ToDo List</h1>
          <input type="text" value={inputList} placeholder="Enter Items" onChange={itemEvent} />
          <button className="newBtn" onClick={listOfItem}>+</button>
          <br/>
          <ol>
            {/*<li> {inputList} </li>*/}
            {Items.map ( (itemval , index) => {
              return <ToDoLists 
                        key={index} 
                        id={index} 
                        text={itemval}
                        onSelect={deleteItems} />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
