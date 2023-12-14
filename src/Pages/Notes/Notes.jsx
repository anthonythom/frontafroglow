import React, { useState, useEffect } from 'react';
import './Notes.css'; 
import HeaderResponsible from '../../components/HeaderResponsible/HeaderResponsible';
import LeftSideResponsible from '../../components/LeftSideResponsible/LeftSideResponsible';

const Notes = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items_db')) || []
  );

  const colors = ['#6F4941', '#0ABBB5', '#F74354', '#AD4AFF', '#F2B705', '#6FA682'];

  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const loadItems = () => {
    verifyNulls();
    addEvents();
  };

  const addNote = () => {
    const newItem = {
      title: '',
      text: '',
      color: randomColor(),
    };

    setItems([...items, newItem]);
  };

  const addHTML = (item, index) => (
    <div className="item-notes" key={index} style={{ backgroundColor: item.color }}>
      <span className="remove-notes" onClick={() => removeItem(index)}>
        <strong>X</strong>
      </span>
      <div style={{ borderBottom: '1px solid white' }}>
        <input
          type="text"
          placeholder=""
          value={item.title}
          onChange={(e) => handleTitleChange(e, index)}
          style={{
            backgroundColor: item.color,
            border: 'none',
            fontSize: 'larger',
            width: '100%',
            color: 'white',
            fontFamily: 'Montserrat',
            textAlign: 'center',
          }}
        />
      </div>
      <textarea
        placeholder=""
        value={item.text}
        onChange={(e) => handleInputChange(e, index)}
        style={{
          color: 'white', // Adicione essa linha para definir a cor do texto como branco
        }}
      ></textarea>
    </div>
  );

  const addEvents = () => {
    // Add your events if needed
  };

  const handleInputChange = (event, index) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      text: event.target.value,
    };
    setItems(newItems);
    localStorage.setItem('items_db', JSON.stringify(newItems));
  };

  const handleTitleChange = (event, index) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      title: event.target.value,
      color: newItems[index]?.color || randomColor(),
    };
    setItems(newItems);
    localStorage.setItem('items_db', JSON.stringify(newItems));
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    localStorage.setItem('items_db', JSON.stringify(newItems));
    addEvents();
  };

  const verifyNulls = () => {
    const nonNullItems = items.filter((item) => item);
    setItems(nonNullItems);
    localStorage.setItem('items_db', JSON.stringify(nonNullItems));
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <>
      <div className="notes">
      <LeftSideResponsible />
      <HeaderResponsible />
        
       
        <div className="text-notes">
          <h1>Notas - Meus registros</h1>
          <p>Aqui, você pode fazer registros e anotações sobre os tutoriais assistidos e o que mais preferir! Organize-se de maneira prática e objetiva, veja suas anotações sempre que quiser!</p>
        </div>
        <div className="container-notes">
          <div className="container-notes2">
            <div className="addNote-content" onClick={addNote}>
              <div className="icon-plus">+</div>
              <span>Adicionar</span>
            </div>
            <div className="content">{items.map((item, index) => addHTML(item, index))}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
