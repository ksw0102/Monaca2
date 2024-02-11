import styled from "styled-components";
import { NavBar } from "../NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MonacaInfo } from "../MonacaInfo";
import { AdminBar } from "./AdminBar";

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "GmarketSansMedium";
`;

const Wrapper = styled.div`
   width: 64%;
   height: 100%;
   display: flex;
`;

const Section1 = styled.div`
   margin-left: 2rem;
   width: 90%;
   height: 100%;
   align-items: center;
   justify-content: center;
   display: flex;
   background-color: pink;
`;

const FolderWrapper = styled.div`
   width: 100%;
   height: 60%;
   background-color: red;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const Folder1 = styled.div`
   margin: 1rem;
   width: 440px;
   height: 300px;
   background-color: palegoldenrod;
`;

const Folder2 = styled.div`
   margin: 1rem;
   width: 40%;
   height: 100%;
   background-color: purple;
`;

const Footer = styled.div``;
export function AdminLMgnt() {
   const navigate = useNavigate();

   const navigateToMaterial = () => {
      navigate("/material");
   };

   const navigateToRegisteredLecture = () => {
      navigate("/reged-lectures");
   };

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <NavBar />
         <Container>
            <Wrapper>
               <AdminBar />
               <Section1>
                  <FolderWrapper>
                     <Folder1></Folder1>
                     <Folder2></Folder2>
                  </FolderWrapper>

                  <Footer></Footer>
               </Section1>
            </Wrapper>
         </Container>
         <MonacaInfo />
      </>
   );
}
