import { Checkbox, Table, Tbody, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import UserTableRow from "./UserTableRow";

interface UsersTableProps {
  users: User[]
}

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

export default function UsersTable({ users }: UsersTableProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  
  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th
            px={["4", "4", "6"]}
            color="gray.300"
            width="8"
          >
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          {isWideVersion && <Th>Data de cadastro</Th>}
          {isWideVersion && <Th>Ações</Th>}
        </Tr>
      </Thead>

      <Tbody>
        {users.map(user => <UserTableRow user={user} key={user.id} /> )}
      </Tbody>
    </Table>
  )
}
