import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Kioks4 from "../image/Kiosk/Kiosk4.jpg";
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
   background-image: url(${Kioks4});
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
   &:nth-child(2) {
      width: 15%;
   }
`;

const Section2 = styled.div`
   width: 100%;
   height: 50%;
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

const Info = styled.div`
   width: 85%;
   height: 90%;
   display: flex;
   flex-direction: column;
   /* align-items: center; */
`;

const Header = styled.div`
   width: 75%;
   height: 10vh;
   text-align: left;
   margin: 5vh auto;
   & p {
      font-size: 1.5rem;
      line-height: 2.5rem;
   }
`;

const QnAWrap = styled.div`
   width: 60%;
   height: 90%;
   background-color: #1c493d;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: 20px;
   & h3 {
      font-size: 1.3re;
      margin-bottom: 1rem;
      color: white;
   }
`;

const Title = styled.div`
   width: 80%;
   height: 8%;
   /* background-color: pink; */
   & input {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: 1px solid black;
      padding: 10px;
      font-size: 1rem;
      font-family: "GmarketSansMedium";
      letter-spacing: 2px;
      outline: none;
      &:focus {
         border: 2px solid black;
      }
   }
`;

const Text = styled.div`
   width: 80%;
   height: 60%;
   margin-top: 4rem;
   & textarea {
      border: 1px solid black;
      border-radius: 10px;
      width: 100%;
      height: 90%;
      resize: none;
      padding: 10px;
      font-size: 1rem;
      line-height: 2rem;
      font-family: "GmarketSansMedium";
      letter-spacing: 2px;
      outline: none;
      &:focus {
         border: 2px solid black;
      }
   }
`;

const Qbtn = styled.div`
   width: 80%;
   height: 8%;
   display: flex;
   align-items: end;
   justify-content: end;
   gap: 10px;
   & button {
      width: 20%;
      height: 70%;
      background-color: white;
      border: 1px solid black;
      font-family: "GmarketSansMedium";
      &:hover {
         cursor: pointer;
      }
      &:active {
         background-color: #6666;
      }
   }
`;

// 강의 상세 페이지
export function DoKioskQ4() {
   const navigate = useNavigate();

   const navigateToKiosk4 = () => {
      navigate("/kiosk-4");
   };

   const navigateToKiosk4QnA = () => {
      navigate("/kiosk4-qna");
   };

   const navigateToKiosk4Notice = () => {
      navigate("/kiosk4-notice");
   };

   const navigateToDoKioskQ4 = () => {
      navigate("/do-kiosk-q4");
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
                        <LectureName>&#60;키오스크 마스터&#62;</LectureName>
                        <br />
                        <CurrentList>현재 수강인구 수</CurrentList>
                        <ProfessorName>이현주 교수님</ProfessorName>
                     </InfoWrap>
                     <ButtonWrap>
                        <Button>장바구니 담기</Button>
                        <Button>찜하기</Button>
                     </ButtonWrap>
                  </SecInner2>
               </InnerWrap>
            </Section1>
            <Section2>
               <Select>
                  <ButtonWrapper>
                     <SelectBtn onClick={navigateToKiosk4}>강의 소개</SelectBtn>
                     <SelectBtn onClick={navigateToKiosk4QnA}>QnA</SelectBtn>
                     <SelectBtn onClick={navigateToKiosk4Notice}>
                        강의 공지사항
                     </SelectBtn>
                  </ButtonWrapper>
               </Select>
               <Info>
                  <Header>
                     <h2>강의 내용에 대해 궁금한 점을 질문해 보세요!</h2>
                  </Header>
                  <QnAWrap>
                     <Title>
                        <h3>제목</h3>
                        <input
                           placeholder="질문의 핵심을 50자 내로 적어주세요."
                           maxLength="50"
                        />
                     </Title>
                     <Text>
                        <h3>내용</h3>
                        <textarea
                           placeholder="묻고싶은 내용을 1000자 이내로 적어주세요."
                           maxLength="1000"
                        />
                     </Text>
                     <Qbtn>
                        <button onClick={navigateToKiosk4QnA}>
                           목록으로 돌아가기
                        </button>
                        <button>등록하기</button>
                     </Qbtn>
                  </QnAWrap>
               </Info>
            </Section2>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
