import { Avatar, Box, Flex, Icon, Input, Stack, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text 
          as="span"
          color="pink.500"
          ml="1"
        >
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bgColor="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex alignItems="center" ml="auto">
        <Stack
          direction="row"
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </Stack>

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
      </Flex>
    </Flex>
  )
}