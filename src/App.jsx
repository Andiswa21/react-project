import { useState } from 'react';
import './App.css';
import ItemList from './ItemList';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]); // assuming you want to store items in local state

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
    setNewItem('');
  };

  return (
    <div>
      <h1>Shopping list</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="add an item on your list"
          />
          <label htmlFor="floatingInput">Item</label>
        </div>
        <button type="submit">
          <i className="bi bi-plus-circle"></i>
        </button>
      </form>
      <ItemList items={items} />
    </div>
  );
}

export default App;