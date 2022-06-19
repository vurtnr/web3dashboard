import { Divider, Text } from '@chakra-ui/react'
import Moralis from 'moralis'
import React, { useEffect, useState } from 'react'
import { useERC20Balances, useMoralisWeb3Api } from 'react-moralis'
import CustomContainer from './CustomContainer'

const Balance = ({ user }) => {
  const Web3Api = useMoralisWeb3Api()
  const { fetchERC20Balances, data } = useERC20Balances()

  const [ethBalance, setEthBalance] = useState(0)

  const fetchNativeBalance = async () => {
    const result = await Web3Api.account
      .getNativeBalance({
        chain: 'rinkeby',
        address: user.get('ethAddress'),
      })
      .catch((e) => console.log(e))
    if (result.balance) {
      setEthBalance(Moralis.Units.FromWei(result.balance))
    }
  }

  useEffect(() => {
    fetchNativeBalance()
    fetchERC20Balances({
      params: {
        chain: 'rinkeby',
        address: user.get('ethAddress'),
      },
    })
  }, [])

  console.log(data)

  return (
    <CustomContainer>
      <Text mb="6" fontSize="xl" fontWeight="bold">
        My ERC20 Tokens
      </Text>
      {ethBalance > 0 && (
        <Text>
          💰&nbsp;{ethBalance} <b>ETH</b>
        </Text>
      )}
      <Divider />
      {data &&
        data.map((token) => (
          <div key={token.symbol}>
            <Text>
              💰&nbsp;{Moralis.Units.FromWei(token.balance)}{' '}
              <b>{token.symbol}</b>
            </Text>
            <Divider />
          </div>
        ))}
    </CustomContainer>
  )
}

export default Balance
