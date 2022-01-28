import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useRef } from "react";

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const variants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "50%" },
  drag: { backgroundColor: "rgb(46, 203, 120)" },
};

const Gestures = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef}
          dragElastic={0.5}
          dragSnapToOrigin
          variants={variants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
      </BiggerBox>
    </Flex>
  );
};

export default Gestures;
