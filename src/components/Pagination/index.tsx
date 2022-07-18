import { Box, Stack } from "@chakra-ui/react";
import PaginationItem from "./PaginatonItem";

export default function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>3</strong> de <strong>100</strong>
      </Box>
      
      <Stack direction="row" spacing="2">
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
      </Stack>
    </Stack>
  )
}
