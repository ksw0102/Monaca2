import styled from "styled-components";

const Container = styled.div`
   width: 100vw;
   height: 76.6vh;
   display: flex;
   justify-content: center;
   align-items: center;

   /* & span {
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 3rem;
   } */
`;

const Span = styled.span`
   font-size: 3rem;
`;

export function Error() {
   return (
      <>
         {" "}
         <Container>
            <Span>
               <p>잘못된 접근입니다. 다른 경로로 시도해주세요.</p>
            </Span>
         </Container>
      </>
   );
}
