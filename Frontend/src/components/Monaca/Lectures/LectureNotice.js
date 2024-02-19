import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: beige;
   font-size: 10rem;
`;

export function LectureNotice() {
   return (
      <>
         <Container>강의 공지사항</Container>
      </>
   );
}
