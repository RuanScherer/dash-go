import { useQuery } from "react-query"
import { api } from "../api"

interface FetchUsersFunctionReturn {
  users: User[]
  totalCountOfRegisters: number
}

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

async function fetchUsers(page: number, perPage: number): Promise<FetchUsersFunctionReturn> {
  const { data, headers } = await api.get("/users", {
    params: {
      page,
      per_page: perPage
    }
  })
  const users = data.users.map(user => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    })
  }))
  const totalCountOfRegisters = Number(headers["x-total-count"])
  return { users, totalCountOfRegisters }
}

interface UseUserProps {
  page: number
  perPage: number
}

function useUsers(props: UseUserProps) {
  const SECOND = 1000
  const MINUTE = 60 * SECOND
  return useQuery(
    ["users", props?.page],
    () => fetchUsers(props?.page, props?.perPage),
    { staleTime: 10 * MINUTE }
  )
}

export { useUsers }
