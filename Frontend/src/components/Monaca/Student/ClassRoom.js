import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Kiosk1 from "../image/Kiosk/Kiosk1.jpg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-family: "GmarketSansMedium";
`;

const Wrap = styled.div`
   width: 60%;
   height: 80%;
   border: 20px solid #fcc757;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 4%;
`;

const Buttons = styled.div`
   width: 58%;
   height: 5%;
   display: flex;
   gap: 1%;
   & button {
      width: 20%;
      height: 100%;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      font-family: "GmarketSansMedium";
      font-size: large;
      font-weight: bolder;
      &:hover {
         cursor: pointer;
      }
      &:active {
         background-color: #6666;
      }
      &:nth-child(1) {
         background-color: white;
         border: 1px solid black;
      }
      &:nth-child(2) {
         background-color: #6666;
         border: 1px solid black;
      }
   }
`;

const Title = styled.div`
   width: 100%;
   height: 8%;
   display: flex;
   align-items: center;
   border-bottom: 5px double black;
`;

const Watch = styled.div`
   width: 90%;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow: auto;
`;
const LectureWrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow: auto;
`;

const Lectures = styled.div`
   width: 100%;
   height: 35%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-bottom: 1px solid #666666;
`;

const Lecture = styled.div`
   width: 80%;
   height: 80%;
   display: grid;
   grid-template-columns: 25% 50% 25%;
`;

const Image = styled.div`
   width: 100%;
   height: 100%;
   background-image: url(${Kiosk1});
   background-size: cover;
   background-repeat: no-repeat;
   &:hover {
      cursor: pointer;
   }
`;

const Info = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 1.3rem;
`;

const Button = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   & button {
      width: 50%;
      height: 20%;
      background-color: white;
      border: 1px solid black;
      font-size: 1rem;
      font-family: "GmarketSansMedium";
      &:hover {
         cursor: pointer;
      }
      &:active {
         background-color: #6666;
      }
   }
`;

export function ClassRoom() {
   const navigate = useNavigate();

   const navigateToClassRoom = () => {
      navigate("/stud-class-room");
   };

   const navigateToCompletedLecture = () => {
      navigate("/cp-lectures");
   };

   const navigateToWatchTheLecture = () => {
      navigate("/watch-the-lecture");
   };

   return (
      <>
         <NavBar />
         <Container>
            <Buttons>
               <button onClick={navigateToClassRoom}>강의실</button>
               <button onClick={navigateToCompletedLecture}>수료실</button>
            </Buttons>
            <Wrap>
               <Watch>
                  <Title>
                     <h3>수강 중인 강의</h3>
                  </Title>
                  <LectureWrapper>
                     <Lectures>
                        <Lecture>
                           <Image onClick={navigateToWatchTheLecture} />
                           <Info>
                              <h5>강의 명 : 키오스크 초급 1-1ㅤㅤㅤㅤㅤㅤㅤ</h5>{" "}
                              {/*공백 문자열 넣은 거라 건들 ㄴㄴ*/}
                              <h5>강의 소개 : 키오스크 전반적 이해와 구성ㅤ</h5>
                              {/*공백 문자열 넣은 거라 건들 ㄴㄴ*/}
                              <h5>
                                 수료 기준 : 강의를 끝까지 시청 후<br />
                                 ㅤㅤㅤㅤㅤ시청 완료 버튼을 꼭 눌러주세요.
                              </h5>
                              {/*공백 문자열 넣은 거라 건들 ㄴㄴ*/}
                           </Info>
                           <Button>
                              <button onClick={navigateToCompletedLecture}>
                                 시청 완료
                              </button>
                           </Button>
                        </Lecture>
                     </Lectures>
                  </LectureWrapper>
               </Watch>
            </Wrap>
         </Container>
         <MonacaInfo />
      </>
   );
}
