import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

const FlexBox = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Final = () => {
  const [id, setId] = useState<string | null>(null);
  return (
    <FlexBox>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box key={n} onClick={() => setId(`${n}`)} layoutId={`${n}`} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
          >
            <Box layoutId={id} style={{ width: "400px", height: "200px" }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </FlexBox>
  );
};

export default Final;
