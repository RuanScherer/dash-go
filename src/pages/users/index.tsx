import { Box, Button, Flex, Heading, Icon, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import UsersTable from "../../components/UsersTable";
import { useUsers } from "../../services/hooks/useUsers";

const registersPerPage = 20

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers({
    page: currentPage,
    perPage: registersPerPage
  })

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bgColor="gray.800"
          p="8"
        >
          <Flex
            mb="8" 
            justifyContent="space-between" 
            alignItems="center"
          >
            <Heading size="lg" fontWeight="normal">
              Usuários
              {(isFetching && !isLoading) && (
                <Spinner 
                  size="sm"
                  color="gray.500"
                  ml="4"
                />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados do usuário.</Text>
            </Flex>
          ) : (
            <>
              <UsersTable users={data.users} />
              <Pagination
                totalCountOfRegisters={data.totalCountOfRegisters}
                currentPage={currentPage}
                registersPerPage={registersPerPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
