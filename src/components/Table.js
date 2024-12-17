import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';

const Table = ({ table, onRemove }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ResizableBox width={200} height={200} minConstraints={[100, 100]} maxConstraints={[300, 300]}>
      <div className="table">
        <h3 onClick={handleToggleExpand} style={{ cursor: 'pointer' }}>
          {table.name}
        </h3>
        {expanded && (
          <div className="columns">
            <ul>
              {table.columns.map((column) => (
                <li key={column.column_id}>
                  {column.name} ({column.column_data_type})
                </li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={() => onRemove(table.id)}>Remove</button>
      </div>
    </ResizableBox>
  );
};

export default Table;
