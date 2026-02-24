import { setupWorker } from 'msw/browser'
import { userHandlers } from './handlers/user.handlers'

export const worker = setupWorker(...userHandlers)