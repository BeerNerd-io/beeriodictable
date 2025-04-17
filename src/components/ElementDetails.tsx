import { BrewingElement } from '../types/BrewingElement';
import { motion, AnimatePresence } from 'framer-motion';

interface ElementDetailsProps {
  element: BrewingElement | null;
  onClose: () => void;
}

export const ElementDetails = ({ element, onClose }: ElementDetailsProps) => {
  if (!element) return null;

  const categoryColors = {
    base: 'bg-base',
    variable: 'bg-variable',
    measurement: 'bg-measurement',
    microbe: 'bg-microbe',
    process: 'bg-process',
    flavor: 'bg-flavor',
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`
            bg-white rounded-lg p-6 max-w-md w-full
            ${categoryColors[element.category]} bg-opacity-10
            border-2 ${categoryColors[element.category]} border-opacity-30
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{element.name}</h2>
              <p className="text-lg font-mono">{element.symbol}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close details"
            >
              ✕
            </button>
          </div>

          <p className="mb-4">{element.description}</p>

          {element.details && (
            <div className="space-y-3">
              {element.details.impact && (
                <div>
                  <h3 className="font-semibold">Impact:</h3>
                  <p>{element.details.impact}</p>
                </div>
              )}
              {element.details.typicalRange && (
                <div>
                  <h3 className="font-semibold">Typical Range:</h3>
                  <p>{element.details.typicalRange}</p>
                </div>
              )}
              {element.details.commonUses && (
                <div>
                  <h3 className="font-semibold">Common Uses:</h3>
                  <ul className="list-disc list-inside">
                    {element.details.commonUses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              )}
              {element.details.funFact && (
                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                  <h3 className="font-semibold">Fun Fact:</h3>
                  <p>{element.details.funFact}</p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 