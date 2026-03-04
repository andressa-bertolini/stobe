import { setupWorker } from 'msw/browser';
import { stockHandlers } from './handlers/stock.handlers';
import { salesHandlers } from './handlers/sales.handlers';

export const worker = setupWorker(...stockHandlers, ...salesHandlers)