import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header from "./header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      bgColor="blackAlpha.800"
      transition="0.5s ease-out"
      pos="relative"
    >
      <Header />
      <Flex as="main" w="full" h={"full"} direction="column" maxW="1440px" minH={"100vh"} pos="relative">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;