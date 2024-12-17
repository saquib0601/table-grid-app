import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Table from './Table';
import { tables as initialTables } from '../data/data';

const GridArea = () => {
  const [droppedTables, setDroppedTables] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: 'TABLE',
    drop: (item) => {
      if (!droppedTables.find((table) => table.id === item.id)) {
        const table = initialTables.find((t) => t.id === item.id);
        setDroppedTables([...droppedTables, table]);
      } else {
        alert('Table already exists!');
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleRemoveTable = (id) => {
    setDroppedTables(droppedTables.filter((table) => table.id !== id));
  };

  return (
    <div ref={drop} className="grid-area" style={{ backgroundColor: isOver ? 'lightgrey' : 'white' }}>
      {droppedTables.map((table) => (
        <Table key={table.id} table={table} onRemove={handleRemoveTable} />
      ))}
    </div>
  );
};

export default GridArea;
