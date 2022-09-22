import { Box, Button, Checkbox, Icon, Link, Td, Text, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

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
  
  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const response = await api.get(`users/${userId}`)
        return response.data
      },
      { staleTime: 1000 * 60 * 10 } // 10 minutes
    )
  }
  
  return (
    <Tr>
      <Td px={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
            <Text fontWeight="bold">{user.name}</Text>
          </Link>
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
