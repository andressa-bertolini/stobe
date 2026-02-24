export async function getCurrentUser() {
  const response = await fetch('/api/me')

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }

  return response.json()
}