import { Product } from '../models/product';

export const productsFixture: Product[] = [
  {
    id: '0',
    label: 'Calendar',
    description: 'Information about working hours',
    path: './calendar'
  },
  {
    id: '1',
    label: 'Task manager',
    description: 'Task management',
    path: './task-manager'
  }
];
