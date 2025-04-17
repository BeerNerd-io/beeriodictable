# StackBlitz Setup Instructions

1. Go to [StackBlitz](https://stackblitz.com/)
2. Click "New Project" and select "React + TypeScript"
3. In the left sidebar, you'll see the file structure. Replace the contents of these files:

## package.json
```json
{
  "name": "beeriodic-table-pwa",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "react-icons": "^4.11.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5",
    "vite-plugin-pwa": "^0.16.4"
  }
}
```

## vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['beer.svg'],
      manifest: {
        name: 'The Beeriodic Table',
        short_name: 'Beeriodic',
        description: 'An interactive guide to brewing elements',
        theme_color: '#3B82F6',
        icons: [
          {
            src: 'beer.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'beer.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          }
        ]
      }
    })
  ],
})
```

## tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#3B82F6',
        'variable': '#FBBF24',
        'measurement': '#10B981',
        'microbe': '#EF4444',
        'process': '#8B5CF6',
        'flavor': '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

4. Create a new file called `postcss.config.js` in the root directory:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

5. Create a new directory called `src` and add these files:

## src/types/BrewingElement.ts
```typescript
export type ElementCategory = 
  | 'base'
  | 'variable'
  | 'measurement'
  | 'microbe'
  | 'process'
  | 'flavor';

export interface BrewingElement {
  symbol: string;
  name: string;
  category: ElementCategory;
  description: string;
  atomicNumber: number;
  details?: {
    impact?: string;
    typicalRange?: string;
    commonUses?: string[];
    funFact?: string;
  };
}
```

## src/data/brewingElements.ts
```typescript
import { BrewingElement } from '../types/BrewingElement';

export const brewingElements: BrewingElement[] = [
  {
    symbol: 'H2O',
    name: 'Water',
    category: 'base',
    description: 'The most important ingredient — affects mouthfeel, pH, and clarity.',
    atomicNumber: 1,
    details: {
      impact: 'Affects mineral content and pH balance',
      typicalRange: 'pH 5.2-5.6 for brewing',
      commonUses: ['Mashing', 'Sparging', 'Dilution'],
      funFact: 'Water makes up about 90-95% of beer'
    }
  },
  {
    symbol: 'MlT',
    name: 'Malt',
    category: 'base',
    description: 'Provides sugar for fermentation, flavor, and color.',
    atomicNumber: 2,
    details: {
      impact: 'Primary source of fermentable sugars',
      typicalRange: 'Varies by style',
      commonUses: ['Base malt', 'Specialty malt', 'Roasted malt'],
      funFact: 'Malted barley has been used in brewing for thousands of years'
    }
  },
  {
    symbol: 'Hps',
    name: 'Hops',
    category: 'base',
    description: 'Adds bitterness, aroma, and acts as a preservative.',
    atomicNumber: 3,
    details: {
      impact: 'Balances sweetness with bitterness',
      typicalRange: '5-100+ IBU',
      commonUses: ['Bittering', 'Aroma', 'Dry hopping'],
      funFact: 'Hops were first used in brewing around 1000 AD'
    }
  },
  {
    symbol: 'Yst',
    name: 'Yeast',
    category: 'base',
    description: 'Ferments sugars into alcohol and CO₂.',
    atomicNumber: 4,
    details: {
      impact: 'Converts sugars to alcohol and CO2',
      typicalRange: 'Millions of cells per milliliter',
      commonUses: ['Ale fermentation', 'Lager fermentation', 'Wild fermentation'],
      funFact: 'There are over 1,500 species of yeast'
    }
  },
  {
    symbol: 'TiM',
    name: 'Time',
    category: 'variable',
    description: 'Impacts flavor development, aging, and conditioning.',
    atomicNumber: 5,
    details: {
      impact: 'Affects flavor maturation',
      typicalRange: 'Days to years',
      commonUses: ['Fermentation', 'Aging', 'Conditioning'],
      funFact: 'Some beers can age for decades'
    }
  },
  {
    symbol: 'TmP',
    name: 'Temperature',
    category: 'variable',
    description: 'Crucial during mash, fermentation, and storage.',
    atomicNumber: 6,
    details: {
      impact: 'Affects enzyme activity and yeast performance',
      typicalRange: 'Varies by process',
      commonUses: ['Mashing', 'Fermentation', 'Storage'],
      funFact: 'Temperature control is key to consistent brewing'
    }
  },
  {
    symbol: 'pH',
    name: 'pH Level',
    category: 'variable',
    description: 'Affects enzyme activity and flavor balance.',
    atomicNumber: 7,
    details: {
      impact: 'Influences enzyme efficiency',
      typicalRange: '5.2-5.6 for mashing',
      commonUses: ['Mash chemistry', 'Water treatment'],
      funFact: 'pH affects hop utilization and beer clarity'
    }
  },
  {
    symbol: 'ABV',
    name: 'Alcohol by Volume',
    category: 'measurement',
    description: 'Defines beer strength. More malt = higher ABV.',
    atomicNumber: 8,
    details: {
      impact: 'Determines beer strength',
      typicalRange: '3-15%',
      commonUses: ['Strength measurement', 'Style classification'],
      funFact: 'The strongest beer ever made was 67.5% ABV'
    }
  },
  {
    symbol: 'IBU',
    name: 'International Bitterness Units',
    category: 'measurement',
    description: 'Measures hop bitterness in the final beer.',
    atomicNumber: 9,
    details: {
      impact: 'Quantifies hop bitterness',
      typicalRange: '5-100+',
      commonUses: ['Recipe formulation', 'Style guidelines'],
      funFact: 'Human taste buds can detect bitterness at very low levels'
    }
  },
  {
    symbol: 'SRM',
    name: 'Standard Reference Method',
    category: 'measurement',
    description: 'Measures color from pale straw to jet black.',
    atomicNumber: 10,
    details: {
      impact: 'Indicates beer color',
      typicalRange: '2-40+',
      commonUses: ['Color specification', 'Style guidelines'],
      funFact: 'SRM is measured using a spectrophotometer'
    }
  }
];
```

## src/components/Element.tsx
```typescript
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
```

## src/components/ElementDetails.tsx
```typescript
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
```

## src/App.tsx
```typescript
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
```

## src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply antialiased;
  }
  
  body {
    @apply bg-gray-50 text-gray-900;
  }
}

@layer components {
  .element-card {
    @apply transition-all duration-200 hover:shadow-lg;
  }
}
```

## src/main.tsx
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

6. Create a new file called `beer.svg` in the `public` directory:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2v20M12 2c-2 0-4 1-4 3v12c0 2 2 3 4 3M12 2c2 0 4 1 4 3v12c0 2-2 3-4 3M4 7h16M4 7v12c0 2 2 3 4 3h8c2 0 4-1 4-3V7"/>
</svg>
```

7. After adding all these files, click the "Install Dependencies" button in StackBlitz (it should appear automatically).

8. Once the dependencies are installed, the app should start automatically. If it doesn't, click the "Start" button.

The app should now be running in the preview window on the right side of StackBlitz. You can interact with the elements by clicking on them to see their details.

Would you like me to help you with any specific part of this setup process? 