import { Flex, Heading } from '@chakra-ui/react'
import ReactLoading, {LoadingType} from 'react-loading';

interface SpinnerProps {
  type: LoadingType;
  color: string;
}


const Spinner = ({ type, color }:SpinnerProps) => {

  return (
    <Flex w="full" direction="column" align="center" justify="space-between" mt={24} pos="relative"> 
	    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
      <Heading color="#fff" mt={10} >Loading...</Heading>
    </Flex>
  )
};

export default Spinner;