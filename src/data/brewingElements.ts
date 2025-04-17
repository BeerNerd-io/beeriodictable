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