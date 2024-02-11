import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
   width: 100vw;
   height: 200vh;
   font-family: "GmarketSansMedium";
   display: flex;
   flex-direction: column;
   align-items: center;
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
   height: 100%;
   width: 25%;
   margin: 3rem;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

`;

const SecInner2 = styled.div`
   height: 100%;
   width: 40%;
   margin: 3rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const InfoWrap = styled.div`
   height: 100%;
   line-height: 4rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   color: white;
`;
const LectureCategory = styled.div`
   font-size: 2.5rem;
`;

const CurrentList = styled.div`
   font-size: 2.5rem;
`;

const ProfessorName = styled.div`
   font-size: 2.5rem;
`;


const SecWrap = styled.div`
   width: 80%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const Section2 = styled.div`
   width: 70%;
   height: 55%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 2rem;
`;

const Intro1 = styled.div`
   width: 80%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 1.5rem;
   & h3 {
      font-size: 2rem;
      margin: 1rem;
   }
`;

const Box1 = styled.div`
   width: 80%;
   height: 100%;
   display: flex;
   justify-content: center;
   line-height: 4rem;
`;

const BInner = styled.div`
   width: 15%;
   height: 100%;
   display: grid;
   grid-template-rows: 60px 60px 60px 60px 100px;
   align-items: center;
   justify-content: end;
   & h5 {
      width: 100%;
      height: 100%;
      text-align: end;
      border-bottom: 1px solid silver;
      &:nth-child(5) {
         border: none;
      }
   }
`;

const BInner2 = styled.div`
   display: grid;
   grid-template-rows: 60px 60px 60px 60px 359px;
   width: 85%;
   height: 100%;
`;

const Section3 = styled.div`
   width: 70%;
   height: 45%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 3rem;
`;

const Lecture = styled.div`
   width: 78%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 1.5rem;
   & h3 { 
      font-size: 2rem;
      margin: 1.5rem;
   }
`;

const Box2 = styled.div`
   width: 80%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const Inner = styled.div`
   display: grid;
   grid-template-rows: 179px 179px 179px;

`;

const Name = styled.div`
   width: 100%;
   height: 100%;
   border-bottom: 1px solid silver;
   & h4 {
      margin-left: 1rem;
   }
`;

const Birth = styled.div`
   width: 100%;
   height: 100%;
   border-bottom: 1px solid silver;
  & h4 {
      margin-left: 1rem;
   }
`;

const Email = styled.div`
   width: 100%;
   height: 100%;
   border-bottom: 1px solid silver;  
   & h4 {
      margin-left: 1rem;
   }
`;

const Resume = styled.div`
   width: 100%;
   height: 100%;
   border-bottom: 1px solid silver;
   font-size: 1.3rem;
   & h5 {
      margin-left: 1rem;
   }
`;

const Me = styled.div`
   width: 100%;
   height: 100%;
   border-bottom: 1px solid silver;
   & h5 {
margin: 1rem;
font-size: 1rem;
line-height: 2rem;
   }
`;

const Lecture1 = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   border-bottom : 1px solid silver;
`;

const Pic = styled.div`
   width : 40%;
   height: 90%;
   text-align: center;
   border: 1px solid black;
& img {
   width: 100%;
   height: 100%;
   background-repeat: no-repeat;
   background-position: center;
   background-size: contain;
}
`;

const Info = styled.div`
   width: 80%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export function WebPf2() {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   console.log("loginState from sessionStorage:", loginState);
   const [data, setData] = useState([]);
   const [lectureData, setLectureData] = useState([]);

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

   async function getLecture() {
      try {
         const response = await fetch(`http://localhost:8080/api/lecture/all`, {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${loginState.token}`,
            },
         });
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
   useEffect(() => {
      getProfessor();
      getLecture(); 
   }, []);
   return (
      <>
         <NavBar />
         <Wrapper>
            <Section1>
               <InnerWrap>
                  <SecInner1 style={{ backgroundImage: `url(${data.length > 4  ? data[4].image: ''})` }} />                  <SecInner2>
                     <InfoWrap>
                        <LectureCategory>  {data.length > 0 && data[4].name
                              ? data[4].name
                              : "Loading..."}</LectureCategory>
                        <br />
                        <CurrentList>   {lectureData.length > 0 ? lectureData[5].lectureCategory : "Loading..."}</CurrentList>
                        <ProfessorName>인터렉션 디자인 박사 학위</ProfessorName>
                     </InfoWrap>
                  </SecInner2>
               </InnerWrap>
            </Section1>
            <SecWrap>
            <Section2>
               <Intro1>
                  <h3>교수님 정보</h3>
                  <Box1>
                     <BInner>
                        <h5>성함 : </h5>
                        <h5>생년월일 : </h5>
                        <h5>이메일 : </h5>
                        <h5>경력 : </h5>
                        <h5>자기소개 : </h5>
                     </BInner>
                     <BInner2>
                        <Name> <h4>{data.length > 0 && data[0].name
                           ? data[4].name
                           : "Loading..."}</h4></Name>
                        <Birth> <h4> {data.length > 0 ? data[4].birthDate : "Loading..."}
                        (29세)</h4></Birth>
                        <Email>  <h4>{data.length > 0 ? data[4].email : "Loading..."}</h4></Email>
                        <Resume><h5>{data.length > 0
                           ? data[4].professorResume
                           : "Loading..."}</h5></Resume>
                        <Me><h5>{data.length > 0
                           ? data[4].professorIntro
                           : "Loading..."}</h5></Me>
                     </BInner2>
                  </Box1>
               </Intro1>
            </Section2>
            <Section3>
               <Lecture>
                  <h3>교수님 강의 목록</h3>{" "}
                  <Box2>
                     <Inner>
                        <Lecture1>
                           <Pic><img
                                    src={
                                       lectureData.length > 0
                                          ? lectureData[6].image
                                          : "Loading..."
                                    }
                                    alt="Profile"
                                 /></Pic>
                           <Info>
                              <h3>{lectureData.length > 0
                                    ? lectureData[6].lectureName
                                    : "Loading..."}</h3>
                           </Info>
                        </Lecture1>
                        <Lecture1>
                           <Pic><img
                                    src={
                                       lectureData.length > 0
                                          ? lectureData[7].image
                                          : "Loading..."
                                    }
                                    alt="Profile"
                                 /></Pic>
                           <Info>
                              <h3>{lectureData.length > 0
                                    ? lectureData[7].lectureName
                                    : "Loading..."}</h3>
                           </Info>
                        </Lecture1>
                        
                     </Inner>
                  </Box2>
               </Lecture>
            </Section3>
            </SecWrap>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
