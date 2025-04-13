import React from 'react';

function PropertiesPanel({ selectedElement, onChange }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onChange({
      ...selectedElement,
      properties: {
        ...selectedElement.properties,
        [name]: type === 'checkbox' ? checked : value,
      },
    });
  };

  const handleSave = () => {
    alert('Properties saved!'); // Replace with real save logic if needed
  };

  const handleHelp = () => {
    alert('This panel allows you to edit the properties of the selected element.');
  };

  if (!selectedElement) {
    return (
      <div className="w-64 bg-white border-l p-4">
        <h2 className="font-semibold mb-2">Properties</h2>
        <p>Select an element to edit its properties.</p>
      </div>
    );
  }

  const { type, properties } = selectedElement;

  const fontFamilies = [
    'Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Georgia',
    'Courier New', 'Trebuchet MS', 'Lucida Console', 'Tahoma', 'Impact',
  ];

  return (
    <div className="w-64 bg-white border-l p-4 space-y-2 overflow-auto flex flex-col justify-between h-full">
      <div>
        <h2 className="font-semibold mb-2">Properties - {type}</h2>

        {/* Shared Properties */}
        <div>
          <label className="block text-sm">Width</label>
          <input
            type="number"
            name="width"
            value={properties.width}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Height</label>
          <input
            type="number"
            name="height"
            value={properties.height}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>

        {/* Type-specific */}
        {type === 'text' && (
          <>
            <div>
              <label className="block text-sm">Font Family</label>
              <select
                name="fontFamily"
                value={properties.fontFamily}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
              >
                {fontFamilies.map((font) => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm">Font Size</label>
              <input
                type="number"
                name="fontSize"
                value={properties.fontSize}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="flex gap-2 items-center flex-wrap">
              <label className="text-sm">Bold</label>
              <input
                type="checkbox"
                name="bold"
                checked={properties.bold}
                onChange={handleChange}
              />
              <label className="text-sm">Italic</label>
              <input
                type="checkbox"
                name="italic"
                checked={properties.italic}
                onChange={handleChange}
              />
              <label className="text-sm">Underline</label>
              <input
                type="checkbox"
                name="underline"
                checked={properties.underline}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {type === 'image' && (
          <div>
            <label className="block text-sm">Image Source</label>
            <input
              name="src"
              value={properties.src}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded"
            />
          </div>
        )}

        {type === 'shape' && (
          <div>
            <label className="block text-sm">SVG Path</label>
            <textarea
              name="svgPath"
              value={properties.svgPath}
              onChange={handleChange}
              rows={4}
              className="w-full border px-2 py-1 rounded"
            />
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between space-x-2">
        <button
          onClick={handleSave}
          className="flex-1 bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
        <button
          onClick={handleHelp}
          className="flex-1 bg-gray-200 text-gray-800 py-1 rounded hover:bg-gray-300 transition"
        >
          How To Use
        </button>
      </div>
    </div>
  );
}

export default PropertiesPanel;
