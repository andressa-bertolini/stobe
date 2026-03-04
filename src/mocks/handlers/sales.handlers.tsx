import { http, HttpResponse } from 'msw';
import { menu } from '../data/menu';

export const salesHandlers = [
  http.get('/stobe/api/menu', ({ request }) => {
    const url = new URL(request.url)

    const page = Number(url.searchParams.get('page') ?? 0)
    const pageSize = Number(url.searchParams.get('pageSize') ?? 5)
    const search = url.searchParams.get('search')?.toLowerCase() ?? ''

    const filtered = menu.filter(item =>
      item.name.toLowerCase().includes(search)
    )

    const totalElements = filtered.length
    const totalPages = Math.ceil(totalElements / pageSize)

    const start = (page - 1) * pageSize
    const end = start + pageSize

    const paginated = filtered.slice(start, end)

    return HttpResponse.json({
      content: paginated,
      page,
      pageSize,
      totalElements,
      totalPages,
    })
  }),
]