import React, {useState} from 'react';
import './App.css'; 

function App() {

//State hook = 'usetState'
const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);
//Helper Functions


function addItem(){

  if(!newItem) {
    alert("N'oubliez pas de rentrer un item !");
    return;
  }

  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem
  }

  setItems(oldList => [...oldList, item]);
  setNewItem("");
  console.log(items);
}

function deleteItem(id){
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

function deleteItems(){
  const newArray = [];
  setItems(newArray);
}

  return (

    <div className="App">

      {/* 1. Header */}
      <section className='header'>
        <div className='divHeader'>
          <h1>Todo List App</h1>
        </div>
      </section>

      {/* 2. Input (input and button) */}
      <section className='main'>

        <div className='divMain'>
          <input 
            className='add-input'
            type="text"
            placeholder='Ajouter un item ...'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />

          <button className='add-button' onClick={() => addItem()}>✔️</button>

          <br></br>

          <div className='divDeleteAll'>
            <button className='deleteAll-button' onClick={() => deleteItems()}>Tout supprimer</button>
          </div>

        </div>
        
        <div>
          {/* 3. List of items (unordered list with list items) */}
          <ul>
            {items.map(item => {
              return(
                <li key={item.id}><button className='delete-button' onClick={() => deleteItem(item.id)}>🗙</button>{item.value}</li>
              )
            })}
          </ul>
        </div>
  
      </section>
    </div>
  );
}

export default App;
