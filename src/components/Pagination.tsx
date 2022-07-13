import { Box, Button, Stack } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>3</strong> de <strong>100</strong>
      </Box>
      
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  )
}
