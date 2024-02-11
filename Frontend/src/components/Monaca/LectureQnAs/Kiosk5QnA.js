import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import ATM from "../image/Kiosk/ATM1.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
   width: 100vw;
   height: 200vh;
   font-family: "GmarketSansMedium";
`;

const Section1 = styled.div`
   width: 100%;
   height: 30%;
   background-color: #0b4434;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const InnerWrap = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const SecInner1 = styled.div`
   height: 75%;
   width: 35%;
   margin: 3rem;
   background-image: url(${ATM});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
`;

const SecInner2 = styled.div`
   height: 100%;
   width: 40%;
   margin: 3rem;
   display: flex;
   flex-direction: column;
`;

const InfoWrap = styled.div`
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   line-height: 4rem;
   color: white;
`;
const LectureCategory = styled.div`
   font-size: 2.5rem;
`;
const LectureName = styled.div`
   font-size: 2.5rem;
`;

const CurrentList = styled.div`
   font-size: 2.5rem;
`;

const ProfessorName = styled.div`
   font-size: 2.5rem;
`;

const ButtonWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 10%;
`;

const Button = styled.button`
   align-items: center;
   width: 30%;
   margin: 1rem;
   height: 40px;
   font-size: 1.5rem;
   letter-spacing: 3px;
   font-family: "GmarketSansMedium";
   background-color: white;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   &:active {
      background-color: #6666;
   }
   &:nth-child(3) {
      width: 15%;
   }
`;

const Section2 = styled.div`
   width: 100%;
   height: 10%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Select = styled.div`
   width: 85%;
   height: 10vh;
   display: flex;
   align-items: center;
   margin-top: 5vh;
`;

const ButtonWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 75%;
   margin: 5vh auto;
   height: 100%;
   & button {
      background-color: white;
      border: 1px solid black;
      &:nth-child(2) {
         background-color: #0b4434;
         color: white;
      }
   }
`;
const SelectBtn = styled.button`
   width: 150px;
   height: 40px;
   font-size: 1rem;
   font-weight: bold;
   letter-spacing: 3px;
   font-family: "GmarketSansMedium";
   &:hover {
      cursor: pointer;
   }
`;

const Header = styled.div`
   width: 64%;
   margin-top: 5vh;
   display: flex;
   align-items: center;
`;

const Section3 = styled.div`
   width: 100%;
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 3rem;
`;

const List = styled.div`
   position: relative;
   width: 60%;
   height: 80%;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
`;
const ListTitle = styled.button`
   width: 90%;
   height: 10vh;
   display: flex;
   align-items: center;
   justify-content: end;
   border: none;
   background-color: transparent;
   & button {
      background-color: white;
      border: 1px solid black;
      width: 200px;
      height: 40%;
      font-size: 1.5rem;
      &:hover {
         cursor: pointer;
      }

      &:active {
         background-color: #6666;
      }
   }
`;

const ListMain = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 90%;
   height: 80%;
   border: 1px solid silver;
   /* border-left: 2px solid silver;
   border-right: 2px solid silver;
   border-top: 7px double black;
   border-bottom: 7px double black; */
   overflow: auto;
   & ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   & li {
      font-size: 1.5rem;
      list-style: none;
      width: 90%;
      height: 10vh;
      margin: 1rem;
      display: flex;
      align-items: center;
      padding: 10px;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      cursor: pointer;
   }
`;
const StyledLi = styled.div`
   width: 90%;
   display: flex;
   height: 200px;
   border-top: 1px solid silver;
   border-bottom: 1px solid silver;
   background-color: white;
   & p {
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
      padding: 10px;
   }
`;
const StyledButton = styled.button`
   width: 40px;
   height: 40px;
   font-size: 1rem;
   border: none;
   cursor: pointer;
`;
// 강의 상세 페이지
export function Kiosk5QnA() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedContent, setSelectedContent] = useState(null);
   const [indexState, setIndexState] = useState(-1);

   const contents = [
      {
         title: "강의에 대한 질문",
         text: "강의에 대한 질문이 있습니다",
      },
      {
         title: "title2",
         text: "text2",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
      {
         title: "title3",
         text: "text3",
      },
   ];

   const openModal = (index) => {
      //  setSelectedContent(content);
      console.log("index", index);
      setIsModalOpen(true);
      setIndexState(index);
   };

   const closeModal = (index) => {
      setIsModalOpen(false);
      setIndexState(-1);
      console.log("test");
   };

   const navigate = useNavigate();

   const navigateToLectureNotice = () => {
      navigate("/lecture-notice");
   };

   const navigateToDoKioskQ5 = () => {
      navigate("/do-kiosk-q5");
   };

   const navigateToKiosk5 = () => {
      navigate("/kiosk-5");
   };

   const navigateToKiosk5QnA = () => {
      navigate("kiosk5-qna");
   };

   return (
      <>
         <NavBar />
         <Wrapper>
            <Section1>
               <InnerWrap>
                  <SecInner1 />
                  <SecInner2>
                     <InfoWrap>
                        <LectureCategory>키오스크 사용법</LectureCategory>
                        <LectureName>&#60;ATM 사용방법&#62;</LectureName>
                        <br />
                        <CurrentList>현재 수강인구 수</CurrentList>
                        <ProfessorName>김지영 교수님</ProfessorName>
                     </InfoWrap>
                     <ButtonWrap>
                        <Button>수강신청 하기</Button>
                        <Button>장바구니 담기</Button>
                        <Button>찜하기</Button>
                     </ButtonWrap>
                  </SecInner2>
               </InnerWrap>
            </Section1>
            <Section2>
               <Select>
                  <ButtonWrapper>
                     <SelectBtn onClick={navigateToKiosk5}>강의 소개</SelectBtn>
                     <SelectBtn onClick={navigateToKiosk5QnA}>QnA</SelectBtn>
                     <SelectBtn onClick={navigateToLectureNotice}>
                        강의 공지사항
                     </SelectBtn>
                  </ButtonWrapper>
               </Select>
               <Header>
                  <h2>강의에 올라온 질문들을 확인할 수 있습니다.</h2>
               </Header>
            </Section2>
            <Section3>
               <List>
                  <ListTitle>
                     <button onClick={navigateToDoKioskQ5}>
                        질문하러 가기
                     </button>
                  </ListTitle>
                  <ListMain>
                     <ul>
                        {contents.map((c, i) => (
                           <>
                              <li key={i} onClick={() => openModal(i)}>
                                 {c.title}
                              </li>
                              {indexState == i && (
                                 <StyledLi key={i}>
                                    <p>{c.text}</p>
                                    <StyledButton onClick={closeModal}>
                                       X
                                    </StyledButton>
                                 </StyledLi>
                              )}
                           </>
                        ))}
                     </ul>{" "}
                  </ListMain>
               </List>
            </Section3>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
