import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

const FlexBox = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Layout = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <FlexBox onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="cirlce" style={{ borderRadius: "50px" }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="cirlce" style={{ borderRadius: "0px" }} />
        ) : null}
      </Box>
    </FlexBox>
  );
};

export default Layout;
