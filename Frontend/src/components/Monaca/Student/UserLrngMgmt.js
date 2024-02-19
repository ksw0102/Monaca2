import styled from "styled-components";
import { NavBar } from "../NavBar";
import { UserBar } from "../Student/UserBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MonacaInfo } from "../MonacaInfo";

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
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
   justify-content: center;
`;

const Folder1 = styled.div`
   width: 90%;
   height: 65%;
   display: grid;
   grid-gap: 1rem;
   grid-template-rows: 1fr 1fr;
`;

const Folder2 = styled.div`
   width: 90%;
   height: 65%;
   display: grid;
   grid-gap: 1rem;
   grid-template-rows: 1fr 1fr;
`;

const Inner1 = styled.div`
   border: 1px solid black;
   border-radius: 20px;
   width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`;

const Inner2 = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-rows: 1fr 1fr;
   align-items: center;
`;

const Wrap1 = styled.div`
   width: 100%;
   background-color: white;
   height: 50%;
   border: 1px solid black;
   border-radius: 20px;
   display: flex;
   justify-content: center;
`;

const Inner3 = styled.div`
   border: 1px solid black;
   border-radius: 20px;
   width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`;

const Inner4 = styled.div`
   border: 1px solid black;
   border-radius: 20px;
   width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`;

const Button = styled.button`
   margin: 0.5rem;
   border: none;
   background-color: #ffffff;
   & button {
      border: 1px solid black;
      width: 140px;
      margin-right: 1rem;
      padding: 5px;
      font-family: "GmarketSansMedium";
      font-size: 1rem;
      background-color: #ffffff;
      &:hover {
         cursor: pointer;
      }

      &:active {
         background-color: #6666;
      }
   }
`;

const Text1 = styled.div`
   margin-top: 3px;
   width: 90%;
   height: 12%;
   display: flex;
   align-items: center;
   justify-content: center;
   & h2 {
      text-align: left;
      width: 80%;
   }
   & h4 {
      text-align: right;
      width: 20%;
      color: #666666;
      &:hover {
         cursor: pointer;
      }
   }
`;

const Text2 = styled.div`
   width: 100%;
   height: 40%;
`;
const Text3 = styled.div`
   width: 100%;
   height: 40%;
`;

const Text4 = styled.div`
   display: flex;
   width: 90%;
   height: 100%;
   align-items: center;
   justify-content: center;
   & h2 {
      width: 80%;
      text-align: start;
   }
   & h4 {
      width: 20%;
      text-align: end;
      color: #666666;
      &:hover {
         cursor: pointer;
      }
   }
`;

const Text5 = styled.div`
   width: 100%;
   height: 20%;
   text-align: center;
   font-size: 1.3rem;
`;

const SubInner1 = styled.div`
   width: 90%;
   height: 70%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 1rem;
`;

const SubInner2 = styled.div`
   width: 90%;
   height: 70%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 1rem;
`;
export function UserLrngMgmt() {
   const navigate = useNavigate();

   const navigateToMaterial = () => {
      navigate("/material");
   };

   const navigateToClassRoom = () => {
      navigate("/stud-class-room");
   };

   const navigateToCompletedLecture = () => {
      navigate("/cp-lectures");
   };

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <NavBar />
         <Container>
            <Wrapper>
               <UserBar />
               <Section1>
                  <Folder1>
                     <Inner1>
                        <Text1>
                           <h2>최근 시청한 강의</h2>
                           <h4 onClick={navigateToClassRoom}>강의실 &#62;</h4>
                        </Text1>
                        <SubInner1>
                           <Text2>강의 제목 : 키오스크 1-1</Text2>
                           <Text3>진도율 : 수강 중 </Text3>
                           <Button>
                              <button onClick={navigateToClassRoom}>
                                 강의 바로보기
                              </button>
                              <button onClick={navigateToMaterial}>
                                 자료 바로보기
                              </button>
                           </Button>
                        </SubInner1>
                     </Inner1>
                     <Inner2>
                        <Wrap1>
                           <Text4>
                              <h2>응시 가능한 시험정보 보기</h2>
                              <h4>전체보기 &#62;</h4>
                           </Text4>
                        </Wrap1>
                        <Wrap1>
                           <Text4>
                              <h2>내가 한 질문 모아보기</h2>
                              <h4>전체보기 &#62;</h4>
                           </Text4>
                        </Wrap1>
                     </Inner2>
                  </Folder1>
                  <Folder2>
                     <Inner3>
                        <Text1>
                           <h2>최근에 수료한 강의</h2>
                           <h4 onClick={navigateToCompletedLecture}>
                              전체보기 &#62;
                           </h4>
                        </Text1>
                        <SubInner1>
                           <Text2>아직 수료한 강의가 없습니다.</Text2>
                           <Text3></Text3>
                           <Button>
                              <button>강의 재수강</button>
                              <button>시험성적 확인</button>
                           </Button>
                        </SubInner1>
                     </Inner3>
                     <Inner4>
                        <Text1>
                           <h2>출석현황</h2>
                           <h4>전체보기 &#62;</h4>
                        </Text1>
                        <SubInner2>
                           <Text5>10일 째 출석 중 입니다.</Text5>
                        </SubInner2>
                     </Inner4>
                  </Folder2>
               </Section1>
            </Wrapper>
         </Container>
         <MonacaInfo />
      </>
   );
}
