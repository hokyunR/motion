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
        <NextLink href="/variants" passHref>
          <Link>variants</Link>
        </NextLink>
        <NextLink href="/gestures" passHref>
          <Link>gestures</Link>
        </NextLink>
        <NextLink href="/motion-values" passHref>
          <Link>motionValues</Link>
        </NextLink>
        <NextLink href="/svg" passHref>
          <Link>SVG</Link>
        </NextLink>
        <NextLink href="/animatePresence" passHref>
          <Link>AnimatePresence</Link>
        </NextLink>
        <NextLink href="/slider" passHref>
          <Link>slider</Link>
        </NextLink>
        <NextLink href="/layout" passHref>
          <Link>layout</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Home;
