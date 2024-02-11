import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
   width: 100vw;
`;

const StyledHeader = styled.div`
   width: 100%;
   height: 100px;
   text-align: center;
   background-color: #a8b63e;
`;

const Search = styled.div`
   width: 100vw;
   position: absolute;
`;

const Input = styled.input`
   outline: none;
   border: 1px solid #83a638;
   width: 55%;
   height: 35px;
   padding: 10px;
   position: relative;
   bottom: 27px;
   &:focus {
      box-shadow: 5px 5px 5px #83a638;
   }
`;

const Logo = styled.h1`
   color: white;
   font-weight: 900;
   font-size: 40px;
   text-shadow: 4px 2px 2px gray;
   position: relative;
   right: 40%;
   top: 19px;
   cursor: pointer;
`;

const SchBtn = styled.button`
   width: 70px;
   height: 35px;
   position: relative;
   left: 40px;
   bottom: 28px;
   cursor: pointer;
   background-color: white;
   &:active {
      background-color: #cccc00;
   }
`;

export function Header() {
   const navigate = useNavigate();

   const naviagteToMain = () => {
      navigate("/home");
   };
   return (
      <>
         <Container>
            <StyledHeader>
               <Logo onClick={naviagteToMain}>저기요</Logo>
               <Search>
                  <Input type="text" placeholder="원하는 음식을 입력하세요." />
                  <SchBtn>검색</SchBtn>
               </Search>
            </StyledHeader>
         </Container>
         <Outlet />
      </>
   );
}
