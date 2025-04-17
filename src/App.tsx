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
    <div className="min-h-screen bg-gray-100">
      {!isOnline && (
        <div className="bg-yellow-500 text-white text-center py-2 px-4">
          You are currently offline. Some features may be limited.
        </div>
      )}
      
      {showInstallBanner && (
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
          <span>Install the Beeriodic Table app for the best experience!</span>
          <button
            onClick={handleInstallClick}
            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Install
          </button>
        </div>
      )}

      <header className="bg-white shadow-sm sticky top-0 z-10">
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