import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {useState} from 'react';

function App() {
    const[items,setItems] = useState([]);

    function addNewItem(itemTitle){
        setItems([...items, {title:itemTitle}]);
    }

    function removeItem(item){
        const updateItems = items.filter(currItem => item.title !== currItem.title);
        setItems(updateItems);
    }

    return (
    <div className="App">
      <section className="todoapp">
        <Header title='My todo list' addItem={addNewItem}/>
        <Main items={items} remove={removeItem}/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
