import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin // 원래 위치로 돌아가게 됨
          dragElastic={0.5} // 탄성, 당기는 값, 기본값은 0.5, 0부터 1까지의 값
          // dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
          // dragConstraints : 제약이 있는 Box를 만들 수 있음 (드래깅이 허용될 수 있는 영역)
          dragConstraints={biggerBoxRef}
          // biggerBox의 가장자리까지
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          // color 변경 시 rgb 값으로 넣어야 애니메이션 적용, string은 적용X
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
