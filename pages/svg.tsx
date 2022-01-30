import { motion } from "framer-motion";
import styled from "@emotion/styled";

const FlexBox = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e66465, #9198e5);
`;

const Logo = styled.svg`
  width: 300px;
  height: 300px;
`;

const SVG = () => {
  return (
    <FlexBox>
      <Logo fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5 }}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </Logo>
    </FlexBox>
  );
};

export default SVG;
