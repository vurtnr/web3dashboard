import { Center, Flex, Text, Button } from '@chakra-ui/react'

export default function Header({ user, logout, isLoggingOut }) {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        bg="purple.400"
        color="white"
        px="10"
        py="6"
      >
        <Center>
          <Text fontSize="xl" fontWeight="bold">Dashboard3 </Text>
        </Center>
        <Center>
          <Text>{user.getUsername()}</Text>
          <Button ml="4" colorScheme="purple" onClick={logout}>Logout</Button>
        </Center>
      </Flex>
    </header>
  )
}
