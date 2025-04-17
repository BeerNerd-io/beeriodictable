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