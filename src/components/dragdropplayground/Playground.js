import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/resizable';
import { useEffect, useRef } from 'react';

function Playground({ elements, onDropElement, onUpdateElement, onSelectElement }) {
  const playgroundRef = useRef();

  useEffect(() => {
    // Drag start handler for sidebar icons
    $('.draggable').on('dragstart', function (e) {
      e.originalEvent.dataTransfer.setData('type', $(this).data('type'));
    });

    const $playground = $(playgroundRef.current);

    // Allow elements to be dropped
    $playground.on('dragover', (e) => e.preventDefault());

    // Handle drop
    $playground.on('drop', (e) => {
      e.preventDefault();

      const type = e.originalEvent.dataTransfer.getData('type');
      const boundingRect = playgroundRef.current.getBoundingClientRect();
      const offsetX = e.clientX - boundingRect.left;
      const offsetY = e.clientY - boundingRect.top;

      const newElement = {
        id: Date.now().toString(),
        type,
        x: offsetX,
        y: offsetY,
        properties: {
          width: 150,
          height: 150,
          fontFamily: 'Arial',
          fontSize: 16,
          bold: false,
          italic: false,
          underline: false,
          text: 'Editable Text',
          src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=200&q=80',
          svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
        },
      };

      onDropElement(newElement);
    });

    return () => {
      $('.draggable').off('dragstart');
      $playground.off('dragover drop');
    };
  }, [onDropElement]);

  useEffect(() => {
    // Make each element in the playground draggable and resizable
    $('.playground-element').each(function () {
      const $el = $(this);
      const id = $el.data('id');

      $el.draggable({
        containment: '#playground',
        stop: function (event, ui) {
          const updatedX = ui.position.left;
          const updatedY = ui.position.top;

          const el = elements.find((e) => e.id === id);
          if (el) {
            onUpdateElement({ ...el, x: updatedX, y: updatedY });
          }
        },
      });

      $el.resizable({
        handles: 'n, e, s, w, ne, se, sw, nw',
        stop: function (event, ui) {
          const updatedWidth = ui.size.width;
          const updatedHeight = ui.size.height;

          const el = elements.find((e) => e.id === id);
          if (el) {
            onUpdateElement({
              ...el,
              properties: {
                ...el.properties,
                width: updatedWidth,
                height: updatedHeight,
              },
            });
          }
        },
      });
    });
  }, [elements, onUpdateElement]);

  // Update text content
  const handleTextChange = (id, newText) => {
    const el = elements.find((e) => e.id === id);
    if (el) {
      onUpdateElement({
        ...el,
        properties: {
          ...el.properties,
          text: newText,
        },
      });
    }
  };

  return (
    <div
      ref={playgroundRef}
      id="playground"
      className="flex-1 relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 mx-4 my-2 rounded-lg overflow-hidden shadow-lg"
      style={{ minHeight: '80vh', position: 'relative' }}
    >
      {elements.map((el) => (
        <div
          key={el.id}
          data-id={el.id}
          onClick={() => onSelectElement(el.id)}
          className="absolute cursor-move border-2 p-2 overflow-hidden playground-element rounded-lg bg-white"
          style={{
            top: el.y,
            left: el.x,
            width: `${el.properties.width}px`,
            height: `${el.properties.height}px`,
          }}
        >
          {el.type === 'text' && (
            <textarea
              value={el.properties.text}
              onChange={(e) => handleTextChange(el.id, e.target.value)}
              className="w-full h-full resize-none border-none focus:outline-none bg-transparent text-center"
              style={{
                fontFamily: el.properties.fontFamily,
                fontSize: `${el.properties.fontSize}px`,
                fontWeight: el.properties.bold ? 'bold' : 'normal',
                fontStyle: el.properties.italic ? 'italic' : 'normal',
                textDecoration: el.properties.underline ? 'underline' : 'none',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                color: '#333',
              }}
            />
          )}

          {el.type === 'image' && (
            <img
              src={el.properties.src}
              alt="Dropped"
              className="w-full h-full object-cover rounded-lg"
            />
          )}

          {el.type === 'shape' && (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="blue"
              className="transition-all duration-300"
            >
              <path d={el.properties.svgPath} />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default Playground;
