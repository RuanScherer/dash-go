import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PanelProps {
  title: string
  children: ReactNode
}

export default function Panel({ title, children }: PanelProps) {
  return (
    <Box
      p={["6", "8"]}
      pb="4"
      bgColor="gray.800"
      borderRadius={8}
    >
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      {children}
    </Box>
  )
}
