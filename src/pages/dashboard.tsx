import { Flex, SimpleGrid } from "@chakra-ui/react";
import AreaChart from "../components/Charts/AreaChart";
import Panel from "../components/Dashboard/Panel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Panel title="Inscritos da semana">
          <AreaChart />
          </Panel>

          <Panel title="Taxa de abertura">
            <AreaChart />
          </Panel>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
