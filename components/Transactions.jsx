import React, { useEffect, useState } from 'react'
import { useMoralis, useMoralisWeb3Api } from 'react-moralis'
import CustomContainer from './CustomContainer'
import { Text, Link, Divider } from '@chakra-ui/react'

const Transactions = ({ user }) => {
  const Web3Api = useMoralisWeb3Api()
  const BASE_URL = 'https://rinkeby.etherscan.io/tx/'

  const [transactions, setTransactions] = useState([])

  const fetchTransactions = async () => {
    const data = await Web3Api.account.getTransactions({
      chain: 'rinkeby',
      address: user.get('ethAddress'),
      limit: 5,
    })
    if (data) {
      setTransactions(data.result)
    }
  }

  console.log(transactions)

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <CustomContainer>
      <Text fontSize="xl" fontWeight="bold">
        my last 5 transactions
      </Text>
      {transactions &&
        transactions.map((transaction) => (
          <div key={transaction.hash}>
            <Link href={`${BASE_URL}${transaction.hash}`} isExternal>
              ➡️&nbsp;{transaction.hash}
            </Link>
            <Divider />
          </div>
        ))}
    </CustomContainer>
  )
}

export default Transactions
