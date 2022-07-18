import { Button, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      p={["4", "6"]}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bgColor="gray.800"
        p={["6", "8"]}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
          />
          <Input
            name="password"
            type="password"
            label="Senha"
          />
        </Stack>

        <Link href="/dashboard">
          <Button
            type="submit"
            mt={6}
            colorScheme="pink"
            size="lg"
          >
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
