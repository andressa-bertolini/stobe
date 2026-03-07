import { setupWorker } from 'msw/browser';
import { inventoryHandlers } from './handlers/inventory.handlers';
import { salesHandlers } from './handlers/sales.handlers';

export const worker = setupWorker(...inventoryHandlers, ...salesHandlers)