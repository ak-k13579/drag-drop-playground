import React, { useState } from 'react';
import './App.css';
import Playground from './components/dragdropplayground/Playground';
import Sidebar from './components/dragdropplayground/Sidebar';
import PropertiesPanel from './components/dragdropplayground/PropertiesPanel';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);

  const handleDropElement = (newElement) => {
    setElements([...elements, newElement]);
  };

  const handleUpdateElement = (updatedElement) => {
    setElements((prev) =>
      prev.map((el) => (el.id === updatedElement.id ? updatedElement : el))
    );
  };

  const selectedElement = elements.find((el) => el.id === selectedElementId);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Playground
        elements={elements}
        onDropElement={handleDropElement}
        onUpdateElement={handleUpdateElement}
        onSelectElement={setSelectedElementId}
      />

      <PropertiesPanel
        selectedElement={selectedElement}
        onChange={handleUpdateElement}
      />
    </div>
  );
}

export default App;
