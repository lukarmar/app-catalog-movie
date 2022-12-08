import { Flex, Text, Image } from "@chakra-ui/react";

import { PropsCardActionsData } from "../types/cardMovieProps";



interface FieldsInformationProps {
  title: string;
  description: string;
}

const FieldsInformation = ({title, description}: FieldsInformationProps) => {
  return (
    <Flex direction={"column"} mt={2}>
      <Text
         fontSize={{ base: "xl", md: "xl" }}
         fontWeight="medium"
          textAlign={{ base: "center", lg: "left" }}
         color="#fff"
      >
        {title}
      </Text>
      <Text
          fontSize={{ base: "md", md: "md" }}
          fontWeight="normal"
          textAlign={{ base: "center", lg: "left" }}
          color="gray.200"
        >
          {description}
        </Text>
    </Flex>

  )
}



const CardMovie = ({
  title,
  banner,
  description,
  director,
  producer,
  
}: PropsCardActionsData) => {
 
  return (
    <Flex
      w="full"
      // justify="space-evenly"
      align="center"
      direction={{ base: "column", lg: "row" }}
      px={{ base: 2, lg: 4 }}
      pl={{ base: 2, lg: 4 }}
      py={4}
      h="full"
      boxShadow="2xl"
      borderRadius="md"
    >
      <Flex
        flex={{ base: 1, lg: "none" }}
        justify="center"
        w={{base: "full", lg: "40%"}}
        mr={{ base: 0, lg: 6 }}
        mb={{ base: 5, lg: 0 }}
        borderRadius="full"
        pos="relative"
      >
          <Image
            src={banner}
            alt={title}
            width="full"
            height="full"
            objectFit="contain"
            loading="eager"
            minW={"200px"}
          />
      </Flex>
      <Flex direction="column" w={{base: "full", lg: "60%"}}>
        <Text
          fontSize={{ base: "2xl", md: "2xl" }}
          fontWeight="bold"
          textAlign={{ base: "center", lg: "left" }}
          color="#fff"
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "md" }}
          fontWeight="light"
          textAlign={{ base: "center", lg: "left" }}
          color="#fff"
        >
          {description}
        </Text>


        <FieldsInformation title="Director" description={director} />
        <FieldsInformation title="Producer" description={producer} />
      </Flex>
    </Flex>
  );
};

export { CardMovie };