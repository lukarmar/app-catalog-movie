import { Flex, Heading } from '@chakra-ui/react'

 

const ListEmpty = () => {
  return (
    <Flex w="full"> 
      <Heading as="h2" size="4xl" color="gray.300" textAlign="center" w="full" mt={40} textShadow='1px 2px #fff'>
        List Empty
      </Heading>
  </Flex>
  )
}

export default ListEmpty