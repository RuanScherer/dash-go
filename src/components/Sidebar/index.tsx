import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function Sidebar() {
  return (
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <Stack spacing="12" alignItems="flex-start">
        <NavSection title="GERAL">
          <NavLink href="/dashboard" icon={RiDashboardLine}>
            Dashboard
          </NavLink>
          <NavLink href="/users" icon={RiContactsLine}>
            Usuários
          </NavLink>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink href="#" icon={RiInputMethodLine}>
            Formulários
          </NavLink>
          <NavLink href="#" icon={RiGitMergeLine}>
            Automação
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}
