import styled from "styled-components";
import { NavBar } from "../NavBar";
import { UserBar } from "../Student/UserBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
   width: 80%;
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   overflow: auto;
`;

const FInner = styled.div`
   width: 100%;
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
   height: 40px;
`;

const TrashButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50%;
`;

const LecturePic1 = styled.div`
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 20%;
   height: 20%;
`;

export function UserCourseMgmt() {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   console.log("loginState from sessionStorage:", loginState);
   const [wishLectureData, setWishLectureData] = useState([]);
   const [lectureData, setLectureData] = useState([]);
   const navigate = useNavigate();

   async function getWishLectures() {
      const loginState = JSON.parse(sessionStorage.getItem("loginState"));
      console.log("loginState from sessionStorage:", loginState);

      if (!loginState) {
         return;
      }
      try {
         const response = await fetch(
            `http://localhost:8080/api/wishLecture/list`,
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
            setWishLectureData(responseData.data);
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }

   async function getLectureById(id) {
      try {
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
         const responseData = await response.json();
         console.log(responseData);
         if (response.ok) {
            setLectureData(responseData.data);
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }

   async function removeWishLecture(lectureId) {
      try {
         const response = await fetch(
            `http://localhost:8080/api/removeWishLecture/${lectureId}`,
            {
               method: "DELETE",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${loginState.token}`,
               },
            }
         );
         const responseData = await response.json(); // 응답 본문 파싱
         if (response.ok) {
            getWishLectures(); // 찜 해제 후 찜 목록 다시 불러오기
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }

   useEffect(() => {
      getWishLectures();

      // getLectureById(id);
      window.scrollTo(0, 0);
   }, []);

   const navigateToLectureInfo = () => {
      navigate("/lecture-info");
   };

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
                           <h4>가격</h4>
                        </Header>
                        {wishLectureData.map((lecture, index) => (
                           <Lecture key={index}>
                              <TrashWrap>
                                 <TrashButton
                                    onClick={() =>
                                       removeWishLecture(lecture.id)
                                    }
                                 >
                                    <TrashPic /> {/* 찜해제 아이콘 */}
                                 </TrashButton>
                              </TrashWrap>
                              <LecturePic1
                                 style={{
                                    backgroundImage: `url(${lecture.image})`,
                                 }}
                              />{" "}
                              {/* 강의 사진 */}
                              <h4>{lecture.lectureName}</h4> {/* 강의 제목 */}
                              <h4>{lecture.price}</h4> {/* 강의 가격 */}
                           </Lecture>
                        ))}
                     </Main>
                  </FInner>
               </Folder>
            </Wrapper>
         </Container>
         <MonacaInfo />
      </>
   );
}
