import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import web5 from "../image/Web/Web5.jpg";
import CheckEmoji from "../image/Check.jpg";
import Man from "../image/Man.jpg";
import Woman from "../image/Woman.jpg";
import Cap from "../image/Cap.jpg";
import LecPaper from "../image/LecPaper.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Wom4 from "../image/Professor/WP4.jpg";

const Wrapper = styled.div`
   width: 100vw;
   height: 300vh;
   font-family: "GmarketSansMedium";
`;

const Section1 = styled.div`
   width: 100%;
   height: 20%;
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
   background-image: url(${web5});
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

const Section2 = styled.div`
   width: 100%;
   height: 80%;
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

const ButtonWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 75%;
   margin: 5vh auto;
   height: 100%;
`;
const SelectBtn = styled.button`
   width: 150px;
   height: 40px;
   font-size: 1rem;
   font-weight: bold;
   letter-spacing: 3px;
   background-color: white;
   border: 1px solid black;
   font-family: "GmarketSansMedium";
   &:nth-child(1) {
      background-color: #0b4434;
      color: white;
   }
   &:hover {
      cursor: pointer;
   }
`;
const Info = styled.div`
   width: 85%;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const Header = styled.div`
   width: 75%;
   height: 30vh;
   text-align: left;
   margin: 5vh auto;
   & p {
      font-size: 1.5rem;
      line-height: 2.5rem;
   }
`;
const Inner1 = styled.div`
   width: 75%;
   height: 40vh;
   display: flex;
   flex-direction: column;
`;

const InTitle = styled.div`
   font-size: 1.5rem;
   display: flex;
   height: 5vh;
   align-items: center;
`;
const InWrap = styled.div`
   width: 100%;
   height: 10vh;
   display: flex;
   flex-direction: column;
   border: 2px solid black;
   justify-content: center;
   line-height: 3rem;
   padding-left: 1rem;
   margin-top: 10px;
   margin-bottom: 10px;
`;

const InText = styled.div`
   display: flex;
   font-size: 1.3rem;
   letter-spacing: 1px;
`;

const SubText = styled.div`
   display: flex;
   letter-spacing: 1px;
   font-size: 1rem;
`;

const Bar = styled.div`
   width: 75%;
   height: 50vh;
   display: flex;
   flex-direction: column;
   background-color: #0b4434;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   color: white;
   margin-top: 2rem;
`;

const Header2 = styled.div`
   width: 75%;
   height: 15vh;
   text-align: left;
   margin: 5vh auto;
   & p {
      font-size: 1.5rem;
      line-height: 2.5rem;
   }
`;
const Check = styled.div`
   display: flex;
   height: 70%;
   width: 3%;
   background-image: url(${CheckEmoji});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   margin-left: 1rem;
`;

const Inner2 = styled.div`
   width: 75%;
   height: 25vh;
   display: flex;
   margin: 0 auto;
   align-items: center;
   justify-content: center;
   margin-bottom: 5rem;
`;

const SubIn1 = styled.div`
   width: 100%;
   height: 150%;
   margin-right: 2rem;
   margin-top: 7.3rem;
   display: flex;
   flex-direction: column;
   & h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      display: flex;
   }
`;

const SubIn2 = styled.div`
   width: 100%;
   height: 150%;
   margin-right: 2rem;
   margin-top: 7.3rem;
   display: flex;
   flex-direction: column;
   & h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      display: flex;
   }
`;

const SubIn3 = styled.div`
   width: 100%;
   height: 150%;
   margin-right: 2rem;
   margin-top: 7.3rem;
   display: flex;
   flex-direction: column;
   & h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      display: flex;
   }
`;

const SubInner = styled.div`
   width: 100%;
   height: 80%;
   line-height: 2rem;
   border: 2px solid black;
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-size: 1.5rem;
   & p {
      margin: 10px;
      letter-spacing: 1.5px;
   }
`;

const Now = styled.div`
   display: flex;
   & h6 {
      color: #898989;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
   }
`;

const SubInner2 = styled.div`
   width: 95%;
   height: 80%;
   border: 2px solid black;
   display: flex;
   flex-direction: column;
   justify-content: center;
   & p {
      text-align: center;
      font-size: 1.5rem;
      margin: 10px;
      letter-spacing: 1.5px;
      line-height: 3rem;
   }
`;

const ProInfo = styled.div`
   width: 75%;
   height: 60%;
   display: flex;
   margin: 20px auto;
   align-items: center;
   justify-content: center;
`;

const ProProfile = styled.div`
   width: 100%;
   height: 80%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const Professor = styled.div`
   width: 50%;
   height: 30%;
   display: flex;
   align-items: center;
   & h2 {
      margin: 1rem;
      &:hover {
         cursor: pointer;
      }
   }

   & h3 {
      margin: 0.5rem;
      color: #898989;
   }
`;

const ProPic1 = styled.div`
   /* border: 2px dashed black; */
   width: 18%;
   height: 100%;
   border-radius: 50%;
   background-image: url(${Wom4});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   &:hover {
      cursor: pointer;
   }
`;

const ProIntro = styled.div`
   margin-top: 1rem;
   height: 70%;
   width: 100%;
   background-color: white;
   & h4 {
      line-height: 3rem;
      color: #5b5b5b;
   }
`;

const ManEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 10%;
   background-image: url(${Man});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: right;
   margin-left: 0.5rem;
`;

const WomanEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 10%;
   background-image: url(${Woman});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: left;
`;

const LecPaperEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 10%;
   background-image: url(${LecPaper});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: left;
   margin-left: 1rem;
`;

const CapEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 15%;
   background-image: url(${Cap});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
`;
// 강의 상세 페이지
export function Web5() {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   console.log("loginState from sessionStorage:", loginState);
   const user = loginState.loginId;
   const [data, setData] = useState([]);
   const [classRoomData, setClassRoomData] = useState([]);
   const [lectureData, setLectureData] = useState([]);
   async function getLectureById(id) {
      try {
         // 로그인 상태를 세션 스토리지에서 가져옵니다.
         const loginState = JSON.parse(sessionStorage.getItem("loginState"));
         console.log("loginState from sessionStorage:", loginState);
         // 로그인 상태와 토큰이 있는지 확인합니다.
         if (loginState && loginState.token) {
            // API를 호출하여 강의 정보를 가져옵니다.
            const response = await fetch(
               `http://localhost:8080/api/lecture/id/${id}`,
               {
                  method: "GET",
                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${loginState.token}`,
                  },
               }
            );
            // API 응답의 상태 코드를 확인하여 에러 상황을 처리합니다.

            if (!response.ok) {
               console.error(`Error: ${response.status}`);
               return;
            }

            // API 응답의 본문을 JSON 형태로 변환합니다.
            const responseData = await response.json();
            console.log(responseData);
            // API 응답의 data가 있는지 확인합니다.
            if (responseData.data) {
               // 받아온 강의 정보에 수강인원수를 나타내는 participantCount 프로퍼티를 추가합니다.
               const updatedLectureData = {
                  ...responseData.data,
                  participantCount: null,
               };
               // 강의 정보를 상태에 저장합니다. 이때, updatedLectureData를 배열로 감싸서 저장합니다.
               setLectureData([updatedLectureData]);
               // 수강인원수 조회 함수를 호출합니다. 이때, 아직 상태 업데이트가 반영되지 않은 상황을 고려하여 업데이트할 데이터를 직접 전달합니다.
               await getParticipantCountByLectureName(
                  loginState,
                  responseData.data.lectureName,
                  updatedLectureData
               );
            } else {
               console.error(`Error: ${responseData.message}`);
            }
         } else {
            console.error("loginState 또는 token이 존재하지 않습니다.");
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }

   async function getProfessor() {
      if (!loginState) {
         return;
      }
      try {
         const response = await fetch(
            `http://localhost:8080/api/apply/professor`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${loginState.token}`,
               },
            }
         );

         const responseData = await response.json();

         console.log(responseData);

         if (response.ok) {
            setData(responseData.data);
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("An error occurred", error);
      }
   }
   async function getParticipantCountByLectureName(
      loginState,
      lectureName,
      updatedClassRoomData
   ) {
      try {
         // API를 호출하여 강의의 수강인원수를 가져옵니다.
         const response = await fetch(
            `http://localhost:8080/api/lecture/counts/lectureName/${lectureName}`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${loginState.token}`,
               },
            }
         );

         // API 응답의 상태 코드를 확인하여 에러 상황을 처리합니다.
         if (!response.ok) {
            console.error(`Error: ${response.status}`);
            return;
         }

         // API 응답의 본문을 JSON 형태로 변환합니다.
         const responseData = await response.json();
         console.log(responseData);
         // API 응답의 data가 있는지 확인합니다.
         if (responseData.data !== undefined && responseData.data !== null) {
            // 수강인원수를 상태에 업데이트합니다. 이때, 갱신된 강의 정보에 수강인원수를 추가하고, 이를 배열로 감싸서 저장합니다.
            setClassRoomData([
               { ...updatedClassRoomData, participantCount: responseData.data },
            ]);
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }
   // 강의 찜하기
   async function saveWishLecture(lectureId) {
      try {
         const loginState = JSON.parse(sessionStorage.getItem("loginState"));
         if (!loginState || !loginState.token) {
            console.error("로그인 상태가 유효하지 않습니다.");
            return;
         }

         const response = await fetch(
            `http://localhost:8080/api/saveWishLecture/${lectureId}`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${loginState.token}`,
               },
            }
         );

         const responseData = await response.json();

         if (response.ok) {
            console.log("강의를 찜했습니다.", responseData);
            // 여기서 필요하다면 적절한 처리를 수행할 수 있습니다.
         } else {
            console.error(`에러: ${responseData.message}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }
   async function createLectureCart(lectureId) {
      try {
         const loginState = JSON.parse(sessionStorage.getItem("loginState"));
         if (!loginState || !loginState.token) {
            console.error("Login status is invalid.");
            return;
         }

         const lectureCart = {
            user: loginState.user,
            lectureId: lectureId,
         };
         console.log("lectureCart:", lectureCart);

         const response = await fetch(`http://localhost:8080/api/lectureCart`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${loginState.token}`,
            },
            body: JSON.stringify(lectureCart),
         });

         if (!response.ok) {
            const errorData = await response.json();
            if (errorData.message === "Already Purchased") {
               alert("This course has already been purchased.");
            } else if (errorData.message === "Already In Cart") {
               alert("This course is already in your shopping cart.");
            } else {
               alert(errorData.message);
            }
            return;
         }

         const responseData = await response.json();
         console.log("Server response:", responseData);
         navigate("/my-cart");
      } catch (error) {
         console.error("An error occurred", error);
      }
   }
   useEffect(() => {
      getProfessor();
      getLectureById(10);
      saveWishLecture();
      window.scrollTo(0, 0);
   }, []);

   const navigate = useNavigate();

   const navigateToWeb5Notice = () => {
      navigate("/web5-notice");
   };

   const navigateToWeb5 = () => {
      navigate("/web-5");
   };

   const navigateToWeb5QnA = () => {
      navigate("/web5-qna");
   };

   const navigateToWebPf1 = () => {
      navigate("/webpf1");
   };
   const navigateToCart = () => {
      navigate("/my-cart");
   };
   return (
      <>
         <NavBar />
         <Wrapper>
            <Section1>
               <InnerWrap>
                  <SecInner1
                     style={{
                        backgroundImage: `url(${
                           lectureData.length > 0 ? lectureData[0].image : ""
                        })`,
                     }}
                  />
                  <SecInner2>
                     <InfoWrap>
                        <LectureCategory>
                           {lectureData.length > 0
                              ? lectureData[0].lectureCategory
                              : "Loading..."}
                        </LectureCategory>
                        <LectureName>
                           &#60;
                           {lectureData.length > 0
                              ? lectureData[0].lectureName
                              : "Loading..."}
                           &#62;
                        </LectureName>
                        <br />
                        <CurrentList>
                           현재 수강인구 수 :{" "}
                           {classRoomData.length > 0
                              ? classRoomData[0].participantCount
                              : "Loading..."}
                        </CurrentList>
                        <ProfessorName>
                           {lectureData.length > 0
                              ? `담당 교수 : ${lectureData[0].professor}`
                              : "Loading..."}
                        </ProfessorName>
                     </InfoWrap>
                     <ButtonWrap>
                        <Button
                           onClick={async () => {
                              if (lectureData.length > 0) {
                                 await createLectureCart(lectureData[0].id);
                                 navigate("/my-cart");
                              }
                           }}
                        >
                           장바구니 담기
                        </Button>
                        <Button
                           onClick={async () => {
                              if (lectureData.length > 0) {
                                 await saveWishLecture(lectureData[0].id);
                                 navigate("/user-coursemgmt");
                              }
                           }}
                        >
                           찜하기
                        </Button>
                     </ButtonWrap>
                  </SecInner2>
               </InnerWrap>
            </Section1>
            <Section2>
               <Select>
                  <ButtonWrapper>
                     <SelectBtn onClick={navigateToWeb5}>강의 소개</SelectBtn>
                     <SelectBtn onClick={navigateToWeb5QnA}>QnA</SelectBtn>
                     <SelectBtn onClick={navigateToWeb5Notice}>
                        강의 공지사항
                     </SelectBtn>
                  </ButtonWrapper>
               </Select>
               <Info>
                  <Header>
                     <h2>해당 강의 수강하면</h2>
                     <h2>나도 고수가 될 수있다!</h2>
                     <br />
                     <p>
                        이제 탐험은 끝!
                        <br />
                        이젠 능력을 키울차례
                     </p>
                     <br />
                     <p>
                        탐험을 마쳤다면 능숙해질 차례
                        <br />
                        실용적인 사용 팁부터 보안 및 개인 정보 보호에 대한
                        이해까지 폭넓게 다루고 있는 강의 입니다.
                     </p>
                  </Header>
                  <Inner1>
                     <InTitle>
                        학습내용 엿보기 <Check />
                     </InTitle>
                     <InWrap>
                        <InText> ✔ 단축키 활용해보기</InText>
                        <InText> ✔ 종류별 웹사이트 이해하고 활용하기</InText>
                     </InWrap>
                     <InTitle>
                        수강 전 확인하기 <Check />
                     </InTitle>
                     <InWrap>
                        <SubText>
                           ✔ 심화학습이기 때문에 웹사이트 관련 강의를 전부
                           수강하시고 들으시는 걸 추천드립니다.
                        </SubText>
                        <SubText>
                           ✔ 수강 전 디지털 기기에 대한 이해도가 부족해 어려움이
                           있다면 웹사이트 생활의 즐거움을 추천드립니다.
                        </SubText>
                     </InWrap>
                  </Inner1>
                  <Bar>
                     <p>심화단계 웹사이트 강의</p>
                     <p>해당 강의 수강하고 활용의 끝을 달리자 &#128293;</p>
                  </Bar>
                  <Header2>
                     <h2>강의 목표</h2>
                     <br />
                     <p>원하는 작업과 모든 문제상황 직면시</p>
                     <p>헤매지 않고 바로바로 답을 찾을 수 있게</p>
                  </Header2>
                  <Inner2>
                     <SubIn1>
                        <h2>
                           웹사이트 강의 구성 <LecPaperEmoji />
                        </h2>
                        <SubInner>
                           <p>✔ 웹생활의 즐거움</p>
                           <p>✔ 인터넷 생활 해킹</p>
                           <p>✔ 웹사이트 전문가 되기</p>
                           <p>✔ 디지털 네비게이터</p>
                           <Now>
                              <p>✔ 웹기초부터 고급까지</p>
                              <h6>현재 강의</h6>
                           </Now>
                        </SubInner>
                     </SubIn1>
                     <SubIn2>
                        <h2>
                           수강 대상 <ManEmoji /> <WomanEmoji />
                        </h2>
                        <SubInner>
                           <p>✔ 심화학습을 원하시는 분</p>
                           <p>✔ 헤매고 싶지 않으신 분</p>
                        </SubInner>
                     </SubIn2>
                     <SubIn3>
                        <h2>
                           듣기 전 필요한 지식 <CapEmoji />
                        </h2>
                        <SubInner2>
                           <p>
                              심화반인 만큼
                              <br /> 웹사이트 강의 전부를 <br /> 수강하고
                              들으시길 바랍니다.
                           </p>
                        </SubInner2>
                     </SubIn3>
                  </Inner2>
                  <ProInfo>
                     <ProProfile>
                        <Professor>
                           <ProPic1 onClick={navigateToWebPf1} />
                           <h2 onClick={navigateToWebPf1}>
                              {" "}
                              {lectureData.length > 0
                                 ? lectureData[0].professor
                                 : "Loading..."}
                           </h2>
                           <h3>교수님</h3>
                        </Professor>
                        <ProIntro>
                           <h4>
                              {data.length > 3
                                 ? data[3].professorIntro
                                 : "Loading..."}
                           </h4>
                        </ProIntro>
                     </ProProfile>
                  </ProInfo>
               </Info>
            </Section2>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
