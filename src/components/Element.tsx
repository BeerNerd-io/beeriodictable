import { BrewingElement } from '../types/BrewingElement';
import { motion } from 'framer-motion';

interface ElementProps {
  element: BrewingElement;
  onClick: () => void;
}

export const Element = ({ element, onClick }: ElementProps) => {
  const categoryColors = {
    base: 'bg-base',
    variable: 'bg-variable',
    measurement: 'bg-measurement',
    microbe: 'bg-microbe',
    process: 'bg-process',
    flavor: 'bg-flavor',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        w-24 h-24 p-2 rounded-lg shadow-lg cursor-pointer
        ${categoryColors[element.category]}
        text-white flex flex-col items-center justify-center
        transition-all duration-200
        hover:shadow-xl
      `}
      onClick={onClick}
      role="button"
      aria-label={`${element.name} element`}
      tabIndex={0}
    >
      <div className="text-2xl font-bold">{element.symbol}</div>
      <div className="text-sm text-center">{element.name}</div>
      <div className="text-xs mt-1">{element.atomicNumber}</div>
    </motion.div>
  );
}; 