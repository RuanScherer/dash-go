import { Box, Stack, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginatonItem";

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [... new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []
  
  const endRegisterNumber = currentPage * registersPerPage
  const startRegisterNumber = (endRegisterNumber - registersPerPage) + 1

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>{startRegisterNumber}</strong>
        {" "}-{" "}
        <strong>{Math.min(endRegisterNumber, totalCountOfRegisters)}</strong>
        {" "}de{" "}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      
      <Stack direction="row" spacing="2">
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem pageNumber={1} onPageChange={onPageChange} />
            {currentPage > (2 + siblingsCount) && (
              <Text
                alignSelf="flex-end"
                color="gray.300"
                width="6"
                textAlign="center"
              >
                ...
              </Text>
            )}
          </>
        )}
        
        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem
            pageNumber={page}
            onPageChange={onPageChange}
            key={page}
          />
        ))}
        <PaginationItem
          pageNumber={currentPage}
          onPageChange={onPageChange}
          isCurrent
        />
        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem
            pageNumber={page}
            onPageChange={onPageChange}
            key={page}
          />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text
                alignSelf="flex-end"
                color="gray.300"
                width="6"
                textAlign="center"
              >
                ...
              </Text>
            )}
            <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
