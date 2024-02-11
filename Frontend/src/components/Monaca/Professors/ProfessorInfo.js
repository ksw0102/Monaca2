import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Wom2 from "../image/Professor/WP2.jpg";

const Container = styled.div`
   width: 100vw;
   height: 200vh;
   background-color: lightgray;
`;

const Wrapper = styled.div`
   height: 100%;
   width: 100%;
   background-color: lightsalmon;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const MainBoard = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: red;
`;

const MainIn1 = styled.div`
   height: 75%;
   width: 35%;
   margin: 3rem;
   background-image: url(${Wom2});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
`;

const MainIn2 = styled.div`
   height: 100%;
   width: 40%;
   margin: 3rem;
   display: flex;
   flex-direction: column;
`;
const Section1 = styled.div`
   height: 30%;
   width: 70%;
   background-color: lightblue;
`;

const Section2 = styled.div`
   width: 70%;
   height: 50%;

   background-color: tomato;
`;
export function ProfessorInfo() {
   return (
      <>
         <Container>
            <NavBar />
            <Wrapper>
               <MainBoard>
                  <MainIn1></MainIn1>
                  <MainIn2></MainIn2>
               </MainBoard>
               <Section1></Section1>
               <Section2></Section2>
            </Wrapper>
            <MonacaInfo />
         </Container>
      </>
   );
}
