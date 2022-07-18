import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import Logo from "./Logo"
import NotificationsNav from "./NotificationsNav"
import Profile from "./Profile"
import Search from "./Search"

export default function Header() {
  const { onOpen: openSidebarDrawer } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true
  })

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
      {!isWideVersion && 
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={openSidebarDrawer}
          aria-label="Open navigation"
          mr="2"
        />
      }

      <Logo />

      {isWideVersion && <Search />}

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}