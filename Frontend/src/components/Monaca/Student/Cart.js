import styled from "styled-components";
import { MonacaInfo } from "../MonacaInfo";
import { NavBar } from "../NavBar";
import { useEffect, useState } from "react";

import kiosk1 from "../image/Kiosk/Kiosk1.jpg";
import kiosk2 from "../image/Kiosk/Kiosk2.jpg";
import kiosk3 from "../image/Kiosk/Kiosk3.jpg";
import kiosk4 from "../image/Kiosk/Kiosk4.jpg";
import aTM from "../image/Kiosk/ATM1.jpg";

import web1 from "../image/Web/Web1.jpg";
import web2 from "../image/Web/Web2.jpg";
import web3 from "../image/Web/Web3.jpg";

import Tc from "../image/TrashCan.jpg";
import { useNavigate } from "react-router-dom";
import { getLectureById } from "../api";

const Wrapper = styled.div`
   width: 100vw;
   height: 100vh;
   font-family: "GmarketSansMedium";
`;

const Header = styled.div`
   width: 100%;
   height: 12vh;
   background-color: #0b4434;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "TmonMonsori";
   & h1 {
      color: white;
      font-size: 2rem;
      letter-spacing: 5px;
   }
`;

const Section1 = styled.div`
   width: 100%;
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Folder = styled.div`
   margin-top: 5rem;
   border-top: 2px solid black;
   border-bottom: 2px solid black;
   width: 60%;
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

const Header2 = styled.div`
   width: 100%;
   height: 15%;
   border-top: 1px solid silver;
   border-bottom: 1px solid silver;
   display: flex;
   align-items: center;
   justify-content: center;
   & :nth-child(1) {
      height: 100%;
      width: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   & :nth-child(2) {
      height: 100%;
      width: 42%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
   }
   & :nth-child(3) {
      height: 100%;
      width: 21%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   & :nth-child(4) {
      height: 100%;
      width: 19%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   & :nth-child(5) {
      height: 100%;
      width: 10%;
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
   border-top: 1px dashed silver;
   border-bottom: 1px dashed silver;
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
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 10%;
   height: 20%;
`;

const Total = styled.div`
   width: 60%;
   height: 5%;
   /* background-color: bisque; */
   display: flex;
   align-items: center;
   justify-content: end;
   font-size: 1.2rem;
`;

const Button = styled.div`
   width: 10%;
   height: 25%;
   display: flex;
   flex-direction: column;
   align-items: end;
   justify-content: center;
   & button {
      width: 100%;
      height: 90%;
      background-color: white;
      border: 1px solid black;
      font-size: large;
      font-family: "GmarketSansMedium";
      &:active {
         background-color: #6666;
      }
      &:hover {
         cursor: pointer;
      }
   }
`;

export function Cart() {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   console.log("Login State:", loginState);
   const [lectureCartData, setLectureCartData] = useState([]); // 초기에 null로 설정

   useEffect(() => {
      getAllLectureCart();
   }, []);

   async function getAllLectureCart() {
      try {
         const response = await fetch(
            `http://localhost:8080/api/lectureCart/all`,
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

         if (response.ok && responseData.data !== null) {
            const lectureCartData = await Promise.all(
               responseData.data.map(async (lectureCart) => {
                  const lectureData = await getLectureById(
                     lectureCart.id,
                     loginState.token
                  );
                  console.log(lectureData); // 강의 데이터 로그 출력
                  return lectureData.data;
               })
            );
            setLectureCartData(lectureCartData);
         } else if (responseData.data === null) {
            console.log(responseData.message);
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }
   async function purchaseLectureCart(id) {
      try {
         const response = await fetch(
            `http://localhost:8080/api/lectureCart/purchase/${id}`,
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
            getAllLectureCart();
         } else {
            console.error(`Error : ${responseData.message}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }

   async function deleteLectureById(id) {
      try {
         const response = await fetch(
            `http://localhost:8080/api/lectureCart/delete/${id}`,
            {
               method: "DELETE",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${loginState.token}`,
               },
            }
         );
         if (response.ok) {
            getAllLectureCart();
         } else {
            console.error(`Error : ${response.statusText}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }

   const handlePurchase = async (id) => {
      await purchaseLectureCart(id);
   };

   const handleDelete = async (id) => {
      await deleteLectureById(id);
   };

   return (
      <>
         <NavBar />
         <Wrapper>
            <Header>
               <h1>
                  {loginState
                     ? `${loginState.loginId}님의 장바구니`
                     : "로그인 후 이용해주세요."}
               </h1>
            </Header>
            <Section1>
               <Folder>
                  <FInner>
                     <Main>
                        <Header2>
                           <h4>버리기</h4>
                           <h4>강의사진</h4>
                           <h4>제목</h4>
                           <h4>가격</h4>
                           <h4 />
                        </Header2>
                        {lectureCartData?.map((lectureData, index) => (
                           <Lecture key={index}>
                              <TrashWrap
                                 onClick={() => handleDelete(lectureData.id)}
                              >
                                 <TrashPic />
                              </TrashWrap>
                              <LecturePic1
                                 style={{
                                    backgroundImage: `url(${lectureData.image})`,
                                    width: "300px", // specify the width you want
                                    height: "200px", // specify the height you want
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "contain",
                                    marginLeft: "5rem",
                                    marginRight: "5rem",
                                 }}
                              />
                              <h4>{lectureData.lectureName}</h4>
                              <h4>{lectureData.price}원</h4>
                              <Button>
                                 <button
                                    onClick={() =>
                                       handlePurchase(lectureData.id)
                                    }
                                 >
                                    구매하기
                                 </button>
                              </Button>
                           </Lecture>
                        ))}
                     </Main>
                  </FInner>
               </Folder>
               <Total>
                  <p>
                     총 금액 :{" "}
                     {lectureCartData?.reduce(
                        (total, lectureData) => total + lectureData.price,
                        0
                     )}
                     원 입니다.
                  </p>
               </Total>
            </Section1>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
