import { useState } from 'react';
import { brewingElements } from './data/brewingElements';
import { Element } from './components/Element';
import { ElementDetails } from './components/ElementDetails';
import { BrewingElement } from './types/BrewingElement';

function App() {
  const [selectedElement, setSelectedElement] = useState<BrewingElement | null>(null);

  const handleElementClick = (element: BrewingElement) => {
    setSelectedElement(element);
  };

  const handleCloseDetails = () => {
    setSelectedElement(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            The Beeriodic Table
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            An interactive guide to brewing elements
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brewingElements.map((element) => (
            <Element
              key={element.symbol}
              element={element}
              onClick={() => handleElementClick(element)}
            />
          ))}
        </div>
      </main>

      <ElementDetails
        element={selectedElement}
        onClose={handleCloseDetails}
      />
    </div>
  );
}

export default App; 