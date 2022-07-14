import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex alignItems="center">
      <Box mr="4" textAlign="right">
        <Text>Ruan Scherer</Text>
        <Text color="gray.300" fontSize="small">
          ruan.vscherer@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Ruan Scherer"
        src="https://avatars1.githubusercontent.com/u/50061559?v=4"
      >
        
      </Avatar>
    </Flex>
  )
}