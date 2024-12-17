import React from 'react';
import { useDrag } from 'react-dnd';

const TableList = ({ tables }) => {
  return (
    <div className="table-list">
      {tables.map((table) => (
        <DraggableTable key={table.id} table={table} />
      ))}
    </div>
  );
};

const DraggableTable = ({ table }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TABLE',
    item: { id: table.id, name: table.name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="draggable-table" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {table.name}
    </div>
  );
};

export default TableList;
