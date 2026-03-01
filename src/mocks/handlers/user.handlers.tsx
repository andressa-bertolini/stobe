import { http, HttpResponse } from 'msw'

export const userHandlers = [
  http.get('/api/users', async () => {
    await new Promise((res) => setTimeout(res, 800)) // simula latência

    return HttpResponse.json({
      id: 1,
      name: 'Andressa',
      email: 'andressa@coffeestock.com',
      role: 'ADMIN',
      branchId: null
    })
  })
]