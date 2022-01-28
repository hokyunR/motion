import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Home = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex direction="column" color="white" fontSize="24px">
        <NextLink href="/animation" passHref>
          <Link>animation</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Home;
