import styled from "styled-components";

const Container = styled.div`
   text-align: center;
   padding: 10px;
`;

const BtnBox = styled.div``;

const Btn = styled.button`
   background-color: white;
   margin: 0 100px;
   padding: 5px 15px;
`;

export function NavBar() {
   return (
      <>
         <Container>
            <BtnBox>
               <Btn>번개배달</Btn>
               <Btn>배달하기</Btn>
               <Btn>포장하기</Btn>
               <Btn>선물하기</Btn>
            </BtnBox>
         </Container>
      </>
   );
}

// navbar에는 아울렛 필요(아울렛이 있어야 자식이 들어감)
