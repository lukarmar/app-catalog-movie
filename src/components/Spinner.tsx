import { Flex } from '@chakra-ui/react'
import ReactLoading, {LoadingType} from 'react-loading';

interface SpinnerProps {
  type: LoadingType;
  color: string;
}


const Spinner = ({ type, color }:SpinnerProps) => {

  return (
    <Flex w="full"> 
	    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </Flex>
  )
};

export default Spinner;