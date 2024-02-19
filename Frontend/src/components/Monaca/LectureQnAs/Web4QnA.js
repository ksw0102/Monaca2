import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Web4 from "../image/Web/Web4.jpg";
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
   background-image: url(${Web4});
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
export function Web4QnA() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedContent, setSelectedContent] = useState(null);
   const [indexState, setIndexState] = useState(-1);
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   console.log("loginState from sessionStorage:", loginState);
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
          const response = await fetch(`http://localhost:8080/api/lecture/id/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loginState.token}`,
            },
          });
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
            const updatedLectureData = { ...responseData.data, participantCount: null };
            // 강의 정보를 상태에 저장합니다. 이때, updatedLectureData를 배열로 감싸서 저장합니다.
            setLectureData([updatedLectureData]);
                    // 수강인원수 조회 함수를 호출합니다. 이때, 아직 상태 업데이트가 반영되지 않은 상황을 고려하여 업데이트할 데이터를 직접 전달합니다.
            await getParticipantCountByLectureName(loginState, responseData.data.lectureName, updatedLectureData);
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
    async function getParticipantCountByLectureName(loginState, lectureName, updatedClassRoomData) {
      try {
         // API를 호출하여 강의의 수강인원수를 가져옵니다.
        const response = await fetch(`http://localhost:8080/api/lecture/counts/lectureName/${lectureName}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loginState.token}`,
          },
        });
    
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
          setClassRoomData([{ ...updatedClassRoomData, participantCount: responseData.data }]);
        } else {
          console.error(`Error: ${responseData.message}`);
        }
      } catch (error) {
        console.error("오류 발생", error);
      }
    }  // 강의 찜하기
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
    useEffect(() => {
      getLectureById(9);
      saveWishLecture();
      window.scrollTo(0, 0);
    }, []);
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

   const navigateToDoWebQ4 = () => {
      navigate("/do-web-q4");
   };

   const navigateToWeb4 = () => {
      navigate("/web-4");
   };

   const navigateToWeb4QnA = () => {
      navigate("/web4-qna");
   };

   const navigateToWeb4Notice = () => {
      navigate("/web4-notice");
   }

   return (
      <>
         <NavBar />
         <Wrapper>
            <Section1>
               <InnerWrap>
               <SecInner1 style={{ backgroundImage: `url(${lectureData.length > 0 ? lectureData[0].image: ''})` }} />
                  <SecInner2>
                  <InfoWrap>
                        <LectureCategory>
                        {lectureData.length > 0 ? lectureData[0].lectureCategory : "Loading..."}
                        </LectureCategory>
                        <LectureName>
                           &#60;{lectureData.length > 0
                        ? lectureData[0].lectureName
                     :"Loading..."}
                     &#62;
                        </LectureName>
                        <br />
                        <CurrentList>현재 수강인구 수 : {classRoomData.length > 0 ? classRoomData[0].participantCount : "Loading..."}</CurrentList>
                        <ProfessorName>

                           {lectureData.length > 0
                           ? `담당 교수 : ${lectureData[0].professor}`
                        : "Loading..."}
                           </ProfessorName>
                     </InfoWrap>
                     <ButtonWrap>
                        <Button>장바구니 담기</Button>
                        <Button onClick={async () => {
                           if (lectureData.length > 0) {
                              await saveWishLecture(lectureData[0].id);
                              navigate("/user-coursemgmt"); // 수정된 부분
                           }
                        }}>찜하기</Button>
                     </ButtonWrap>
                  </SecInner2>
               </InnerWrap>
            </Section1>
            <Section2>
               <Select>
                  <ButtonWrapper>
                     <SelectBtn onClick={navigateToWeb4}>강의 소개</SelectBtn>
                     <SelectBtn onClick={navigateToWeb4QnA}>QnA</SelectBtn>
                     <SelectBtn onClick={navigateToWeb4Notice}>
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
                     <button onClick={navigateToDoWebQ4}>질문하러 가기</button>
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
