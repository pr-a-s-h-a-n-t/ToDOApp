 
import { useState } from 'react';
import './App.css';


function App() {

  const[input, setInput] = useState('');
  const[listData, setListData] = useState([]);

  function add(){
    // setListData([...listData, input]); 
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, input];
      console.log(updatedList);
      setInput('');
      return updatedList;
    })
  }

  function removeActivity(i){
    const updaredListData = listData.filter((ele, id) => {
      return i !== id;
    })
    setListData(updaredListData);
  }

  function deleteAll() {
    setListData([]);

  }


  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input type="text" value={ input } onChange={(e) => {
          setInput(e.target.value);
      }} />
      <button onClick={add}>Add</button>
      <h3>Here is your list 😄 </h3>
      { listData !== [] && listData.map((data, i) => {
        return(
          <>
            <p key={i}>
                <span> {  data} </span>
                <button onClick={() => {
                  removeActivity(i)
                   

                }}>Delete</button>
            </p>
          </>
        )})
        
      }
      { listData.length >= 2 ?
       <button onClick= { deleteAll }>Delete All</button>
        : [] }
      
    </div>
  );
}

export default App;
