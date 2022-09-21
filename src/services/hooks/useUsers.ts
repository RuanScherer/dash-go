import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

async function fetchUsers(): Promise<User[]> {
  const { data } = await api.get("/users")
  const users = data.users.map(user => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    })
  }))
  return users
}

function useUsers() {
  const SECOND = 1000
  return useQuery("users", fetchUsers, {
    staleTime: 5 * SECOND
  })
}

export { useUsers }
