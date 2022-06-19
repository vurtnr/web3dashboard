import { Flex, Text, Button, Box, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Profile from '../components/Profile'

export default function Home() {
  const { isAuthenticated, authenticate, user,logout, isLoggingOut } = useMoralis()
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | Dashboard3</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          with="100vw"
          height="100vh"
          bgGradient="linear(to-br,teal.400, purple.300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Dashboard3
          </Text>
          <Button
            colorScheme="purple"
            size="lg"
            mt="6"
            onClick={() => authenticate({
              signingMessage: "Sign to login to Dashboard3"
            })}
          >
            Login with Metamask
          </Button>
        </Flex>
      </>
    )
  }
  return <>
    <Head>
      <title>Dashboard3</title>
    </Head>
    <Flex direction="column" width="100w" height="100vh" >
      <Header {...{user,logout, isLoggingOut}} />
      <Box flex="1" bg="purple.100" px="44" py="20">
        <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
          <TabList>
            <Tab fontWeight="bold">Profile</Tab>
            <Tab fontWeight="bold">Balance</Tab>
            <Tab fontWeight="bold">Transactions</Tab>
            <Tab fontWeight="bold">NFTs</Tab>
            <Tab fontWeight="bold">Send ETH</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Profile {...{user}}/>
            </TabPanel>
            <TabPanel>Balance</TabPanel>
            <TabPanel>Transactions</TabPanel>
            <TabPanel>NFTs</TabPanel>
            <TabPanel>Send ETH</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  </>
}
