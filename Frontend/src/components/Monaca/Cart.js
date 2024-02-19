import styled from "styled-components";
import { MonacaInfo } from "./MonacaInfo";
import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
   width: 100vw;
   height: 100vh;
   font-family: "TmonMonsori";
`;

const Header = styled.div`
   width: 100%;
   height: 12vh;
   background-color: #0b4434;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "TmonMonsori";
   & h1 {
      color: white;
      font-size: 2rem;
      letter-spacing: 5px;
   }
`;

const Section1 = styled.div`
   width: 100%;
   height: 90%;
   background-color: palegoldenrod;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
const Items = styled.div`
   width: 60%;
   height: 95%;
   background-color: pink;
`;
export function Cart() {
   const [loginState, setLoginState] = useState(null);
   useEffect(() => {
      const storedLoginState = JSON.parse(sessionStorage.getItem("loginState"));
      if (storedLoginState && storedLoginState.name) {
         setLoginState(storedLoginState);
      }
   }, []);
   return (
      <>
         <NavBar />
         <Wrapper>
            <Header>
               <h1>
                  <h1>
                     {loginState
                        ? `${loginState.name}'님의 장바구니`
                        : "Shopping Cart"}
                  </h1>
               </h1>
            </Header>
            <Section1>
               <Items></Items>
            </Section1>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
