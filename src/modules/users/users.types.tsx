export type UserRole = 'ADMIN' | 'MANAGER'

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
  branchId: number | null
}