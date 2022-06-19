import { Box } from '@chakra-ui/react'
import React from 'react'

const CustomContainer = ({ children }) => {
  return (
    <Box
      bg="white"
      width="full"
      height="full"
      px="20"
      py="20"
      rounded="lg"
      shadow="lg"
      textAlign="left"
    >
      {children}
    </Box>
  )
}

export default CustomContainer
