import React from 'react';
import TableList from './components/TableList';
import GridArea from './components/GridArea';
import { tables } from './data/data';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div className="left-panel">
          <TableList tables={tables} />
        </div>
        <div className="right-panel">
          <GridArea />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
