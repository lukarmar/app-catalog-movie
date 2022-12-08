import { Flex, Text, Button } from "@chakra-ui/react";


import { useCatalogData } from '../../hooks/getDataMovies';

const Header = () => {

  const { updateData } = useCatalogData();


  return (
    <Flex
      as="header"
      w="full"
      h={16}
      bgColor="grayMetacore.main"
      justify="center"
      boxShadow="sm"
      pos="fixed"
      zIndex="modal"
      backdropFilter='auto' 
      backdropBlur='12px'
    >
      <Flex
        w="full"
        h="full"
        align="center"
        px={{ base: 5, lg: 16 }}
        maxW="1440px"
        pos="relative"
      >
        <Flex
          w={"full"}
          h="full"
          align="center"
          py={2}
          pos="relative"
        >
          <Text
            as="span"
            color="#fff"
            fontWeight="bold"
            fontSize="2xl"
          >
            &nbsp;Movie Catalog
          </Text>
        </Flex>
        <Button 
          bgColor={"#00FF00"} 
          fontWeight="bold" 
          color={"gray.800"} 
          px={8} 
          onClick={() => updateData()}
        >Update movies</Button>
      </Flex>
    </Flex>
  );
};

export default Header;