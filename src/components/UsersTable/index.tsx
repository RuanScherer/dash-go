import { Checkbox, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import UserTableRow from "./UserTableRow";

export default function UsersTable() {
  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th
            px="6"
            color="gray.300"
            width="8"
          >
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          <Th>Data de cadastro</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>

      <Tbody>
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
      </Tbody>
    </Table>
  )
}
