import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { ReactElement } from "react"

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export default function ActiveLink({ 
  children, 
  shouldMatchExactHref = false, 
  ...rest
}: ActiveLinkProps) {
  const { asPath: currentPath } = useRouter()

  let isActive = false
  
  if (shouldMatchExactHref && (currentPath === rest.href || currentPath === rest.as)) {
    isActive = true
  }

  if (!shouldMatchExactHref && 
    (currentPath.startsWith(String(rest.href))
     || currentPath.startsWith(String(rest.as)))) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {React.cloneElement(children, {
        color: isActive ? "pink.400": "gray.500",
      })}
    </Link>
  )
}
