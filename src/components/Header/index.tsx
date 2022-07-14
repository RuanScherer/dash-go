import { Flex } from '@chakra-ui/react'
import Logo from "./Logo"
import NotificationsNav from "./NotificationsNav"
import Profile from "./Profile"
import Search from "./Search"

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
      <Logo />

      <Search />

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}