import { BrewingElement } from '../types/BrewingElement';
import { motion } from 'framer-motion';

interface ElementProps {
  element: BrewingElement;
  onClick: () => void;
}

export const Element = ({ element, onClick }: ElementProps) => {
  const categoryColors = {
    base: 'text-base border-base/50',
    variable: 'text-variable border-variable/50',
    measurement: 'text-measurement border-measurement/50',
    microbe: 'text-microbe border-microbe/50',
    process: 'text-process border-process/50',
    flavor: 'text-flavor border-flavor/50',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        element-card
        w-full aspect-square p-3 rounded-xl
        ${categoryColors[element.category]}
        flex flex-col items-center justify-center
        cursor-pointer select-none
      `}
      onClick={onClick}
      role="button"
      aria-label={`${element.name} element`}
      tabIndex={0}
    >
      <div className="text-3xl font-bold mb-1">{element.symbol}</div>
      <div className="text-sm text-center font-medium opacity-90">{element.name}</div>
      <div className="text-xs mt-2 opacity-75">{element.atomicNumber}</div>
    </motion.div>
  );
}; 