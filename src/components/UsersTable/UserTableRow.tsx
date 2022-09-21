import { Box, Button, Checkbox, Icon, Td, Text, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface UserTableRowProps {
  user: User
}

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

export default function UserTableRow({ user }: UserTableRowProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  
  return (
    <Tr>
      <Td px={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{user.name}</Text>
          <Text fontSize="small" color="gray.300">{user.email}</Text>
        </Box>
      </Td>
      {isWideVersion && 
        <Td>
          <Box>
            {user.createdAt}
          </Box>
        </Td>
      }
      {isWideVersion && 
        <Td>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="purple"
            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
          >
            Editar
          </Button>
        </Td>
      }
    </Tr>
  )
}
