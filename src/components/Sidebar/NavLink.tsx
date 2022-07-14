import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  href: string
  icon: ElementType
  children: string
}

export default function NavLink({ href, icon, children, ...rest }: NavLinkProps) {
  return (
    <NextLink href={href}>
      <Link display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </Link>
    </NextLink>
  )
}
