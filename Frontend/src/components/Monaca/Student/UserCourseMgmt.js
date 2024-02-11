import styled from "styled-components";
import { NavBar } from "../NavBar";
import { UserBar } from "../Student/UserBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MonacaInfo } from "../MonacaInfo";

// LecturePic import
import kiosk1 from "../image/Kiosk/Kiosk1.jpg";
import kiosk2 from "../image/Kiosk/Kiosk2.jpg";
import kiosk3 from "../image/Kiosk/Kiosk3.jpg";
import kiosk4 from "../image/Kiosk/Kiosk4.jpg";
import aTM from "../image/Kiosk/ATM1.jpg";

import web1 from "../image/Web/Web1.jpg";
import web2 from "../image/Web/Web2.jpg";
import web3 from "../image/Web/Web3.jpg";

import Tc from "../image/TrashCan.jpg";

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
   align-items: center;
   justify-content: center;
`;

const Folder = styled.div`
   border: 20px solid #f0b2b8;
   border-radius: 20px;
   width: 70%;
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   overflow: auto;
`;

const FInner = styled.div`
   width: 90%;
   height: 96%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Main = styled.div`
   width: 90%;
   height: 90%;
`;

const Header = styled.div`
   width: 100%;
   height: 15%;
   border-top: 2px solid black;
   border-bottom: 2px solid black;
   display: flex;
   align-items: center;
   justify-content: center;
   & :nth-child(1) {
      height: 100%;
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   & :nth-child(2) {
      height: 100%;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   & :nth-child(3) {
      height: 100%;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   & :nth-child(4) {
      height: 100%;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

const Lecture = styled.div`
   margin-top: 2.5rem;
   width: 100%;
   height: 40%;
   display: flex;
   align-items: center;
   justify-content: center;
   border-top: 2px dashed black;
   border-bottom: 2px dashed black;
   &:hover {
      cursor: pointer;
   }

   & :nth-child(2) {
      height: 100%;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   & :nth-child(3) {
      height: 100%;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   & :nth-child(4) {
      height: 100%;
      width: 25%;
      display: flex;

      align-items: center;
      justify-content: center;
   }
`;

const TrashWrap = styled.div`
   width: 10%;
   height: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const TrashPic = styled.div`
   background-image: url(${Tc});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 40%;
   height: 40%;
`;

const LecturePic1 = styled.div`
   background-image: url(${kiosk1});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 20%;
   height: 20%;
`;
const LecturePic2 = styled.div`
   background-image: url(${kiosk2});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 40%;
   height: 30%;
`;
const LecturePic3 = styled.div`
   background-image: url(${kiosk3});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 40%;
   height: 30%;
`;
const LecturePic4 = styled.div`
   background-image: url(${kiosk4});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 40%;
   height: 30%;
`;
const LecturePic5 = styled.div`
   background-image: url(${aTM});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 40%;
   height: 30%;
`;
const LecturePic6 = styled.div`
   background-image: url(${web1});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 40%;
   height: 30%;
`;
const LecturePic7 = styled.div`
   background-image: url(${web2});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 40%;
   height: 30%;
`;
const LecturePic8 = styled.div`
   background-image: url(${web3});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 40%;
   height: 30%;
`;

export function UserCourseMgmt() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const navigateToLectureInfo = () => {
      navigate("/lecture-info");
   };

   const navigate = useNavigate();

   function selectAll(event) {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
         checkbox.checked = event.target.checked;
      });
   }

   return (
      <>
         <NavBar />
         <Container>
            <Wrapper>
               <UserBar />
               <Folder>
                  <FInner>
                     <Main>
                        <Header>
                           <h4>찜 해제</h4>
                           <h4>강의사진</h4>
                           <h4>제목</h4>
                           <h4>강의설명</h4>
                        </Header>
                        <Lecture>
                           <TrashWrap>
                              <TrashPic />
                           </TrashWrap>
                           <LecturePic1 />
                           <h4>2024-01-30</h4>
                           <h4>안 읽음</h4>
                        </Lecture>
                        <Lecture>
                           <TrashWrap>
                              <TrashPic />
                           </TrashWrap>
                           <LecturePic2 />
                           <h4>2024-11-11</h4>
                           <h4>안 읽음</h4>
                        </Lecture>
                        <Lecture>
                           <TrashWrap>
                              <TrashPic />
                           </TrashWrap>
                           <LecturePic3 />
                           <h4>2023-12-31</h4>
                           <h4>안 읽음</h4>
                        </Lecture>
                        <Lecture>
                           <TrashWrap>
                              <TrashPic />
                           </TrashWrap>
                           <LecturePic4 />
                           <h4>2024-01-01</h4>
                           <h4>안 읽음</h4>
                        </Lecture>
                        <Lecture>
                           <TrashWrap>
                              <TrashPic />
                           </TrashWrap>
                           <LecturePic5 />
                           <h4>2024-01-13</h4>
                           <h4>읽음</h4>
                        </Lecture>
                        <Lecture>
                           <TrashWrap>
                              <TrashPic />
                           </TrashWrap>
                           <LecturePic6 />
                           <h4>2024-01-12</h4>
                           <h4>읽음</h4>
                        </Lecture>
                        <Lecture>
                           <TrashWrap>
                              <TrashPic />
                           </TrashWrap>
                           <LecturePic7 />
                           <h4>2024-01-11</h4>
                           <h4>읽음</h4>
                        </Lecture>
                        <Lecture>
                           <TrashWrap>
                              <TrashPic />
                           </TrashWrap>
                           <LecturePic8 />
                           <h4>2024-01-10</h4>
                           <h4>읽음</h4>
                        </Lecture>
                     </Main>
                  </FInner>
               </Folder>
            </Wrapper>
         </Container>
         <MonacaInfo />
      </>
   );
}
