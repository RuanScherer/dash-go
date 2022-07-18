import { Box, Button, Checkbox, Icon, Td, Text, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

export default function UserTableRow() {
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
          <Text fontWeight="bold">Ruan Scherer</Text>
          <Text fontSize="small" color="gray.300">ruan.vscherer@gmail.com</Text>
        </Box>
      </Td>
      {isWideVersion && 
        <Td>
          <Box>
            04 de Abril, 2021
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
