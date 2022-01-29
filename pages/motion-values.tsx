import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "@emotion/styled";

const FlexBox = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e66465, #9198e5);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Gestures = () => {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const background = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, #e8ff94, #fc5e49)",
      "linear-gradient(135deg, #63ec7a, #614bdf)",
    ]
  );

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <FlexBox style={{ background }}>
      <Box drag="x" dragSnapToOrigin style={{ x, rotateZ, scale }} />
    </FlexBox>
  );
};

export default Gestures;
