import { FormControl, FormLabel, Input, Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import CustomContainer from './CustomContainer'

const Profile = ({ user }) => {

  const [input, setInput] = useState('')

  return (
    <CustomContainer>
      <Text>
        <b>🤓 &nbsp; Username:</b>
        {user.getUsername()}
      </Text>
      <Text>
        <b>💵 &nbsp; Wallet Address:</b>
        {user.get('ethAddress')}
      </Text> 
      <form>
        <FormControl>
          <FormLabel htmlFor='username'>Set a new username</FormLabel>
          <Input id='username' type='text' placeholder="ex. theItalianDev" value={input} onChange={(e) => setInput(e.target.value)}/>
        </FormControl>
        <Button type="submit" colorScheme="purple">✅&nbsp; Change Username</Button>
      </form>
    </CustomContainer>
  )
}

export default Profile
