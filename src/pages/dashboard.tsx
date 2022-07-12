import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-03-18T09:39:00.000Z',
      '2022-03-20T07:48:00.000Z',
      '2022-03-22T13:12:00.000Z',
      '2022-03-29T18:01:00.000Z',
      '2022-03-31T15:19:00.000Z',
      '2022-04-06T22:46:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  {
    name: "series1",
    data: [12, 42, 120, 19, 89, 44]
  }
]

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
          <Box
            p="8"
            pb="4"
            bgColor="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
            />
          </Box>

          <Box
            p="8"
            pb="4"
            bgColor="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>

            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}