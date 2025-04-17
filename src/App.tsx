import { useState, useEffect } from 'react';
import { brewingElements } from './data/brewingElements';
import { Element } from './components/Element';
import { ElementDetails } from './components/ElementDetails';
import { BrewingElement } from './types/BrewingElement';

function App() {
  const [selectedElement, setSelectedElement] = useState<BrewingElement | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  const handleElementClick = (element: BrewingElement) => {
    setSelectedElement(element);
  };

  const handleCloseDetails = () => {
    setSelectedElement(null);
  };

  return (
    <div className="min-h-screen">
      {!isOnline && (
        <div className="bg-yellow-500 bg-opacity-90 text-black text-center py-2 px-4 fixed top-0 left-0 right-0 z-50">
          You are currently offline. Some features may be limited.
        </div>
      )}
      
      {showInstallBanner && (
        <div className="glass-effect fixed bottom-0 left-0 right-0 p-4 flex justify-between items-center z-50">
          <span>Install the Beeriodic Table app for the best experience!</span>
          <button
            onClick={handleInstallClick}
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            Install
          </button>
        </div>
      )}

      <header className="glass-effect sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Beeriodic Table
          </h1>
          <p className="mt-2 text-gray-400">
            An interactive guide to brewing elements
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {brewingElements.map((element) => (
            <Element
              key={element.symbol}
              element={element}
              onClick={() => handleElementClick(element)}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {Object.entries({
            base: 'Base Ingredients',
            variable: 'Variables',
            measurement: 'Measurements',
            microbe: 'Microbes',
            process: 'Processes',
            flavor: 'Flavors'
          }).map(([category, label]) => (
            <div
              key={category}
              className={`text-${category} text-sm flex items-center gap-2 px-3 py-2 rounded-lg glass-effect`}
            >
              <div className={`w-3 h-3 rounded-full bg-${category}`} />
              {label}
            </div>
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