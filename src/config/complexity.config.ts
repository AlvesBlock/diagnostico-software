import type { ComplexityLevel } from '@/types/result.types';

export interface ComplexityBand {
  level: ComplexityLevel;
  minScore: number;
  maxScore: number;
  hoursMin: number;
  hoursMax: number;
  timeMinDays: number;
  timeMaxDays: number;
}

export const complexityBands: ComplexityBand[] = [
  {
    level: 'simples',
    minScore: 0,
    maxScore: 10,
    hoursMin: 40,
    hoursMax: 90,
    timeMinDays: 15,
    timeMaxDays: 30,
  },
  {
    level: 'media',
    minScore: 10.01,
    maxScore: 20,
    hoursMin: 90,
    hoursMax: 180,
    timeMinDays: 30,
    timeMaxDays: 60,
  },
  {
    level: 'avancada',
    minScore: 20.01,
    maxScore: 35,
    hoursMin: 180,
    hoursMax: 320,
    timeMinDays: 60,
    timeMaxDays: 100,
  },
  {
    level: 'complexa',
    minScore: 35.01,
    maxScore: Number.POSITIVE_INFINITY,
    hoursMin: 320,
    hoursMax: 600,
    timeMinDays: 100,
    timeMaxDays: 160,
  },
];
