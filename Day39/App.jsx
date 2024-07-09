import { useState } from 'react'

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
 return (
    <div>
      <Header />
      <Nav handleAddItems={handleAddItems} /> 
      <ListArea items={items} /> 
      <Footer items={items} />	
    </div>
  );
}
function Header() {
  return <h2>ToDo List</h2>;
}

function Nav({ handleAddItems }) {
  const [name, setName] = useState("");
  const handleAddButtonClick = () => {
    const newItem = { name, id: Date.now() };
    handleAddItems(newItem);
    setName("");
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddButtonClick}>Add</button>
    </>
  );
}

function ListArea({ items }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
function Footer({ items }) {
  return (
    <>
      {items.length !== 0 ? (
        <p>You have {items.length} items in your cart</p>
      ) : (
        <p>You can start adding items to your list</p>
      )}
    </>
  );
}