import styled from "styled-components";
import { NavBar } from "../NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MonacaInfo } from "../MonacaInfo";
import { AdminBar } from "./AdminBar";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

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
   align-items: center;
   justify-content: center;
   display: flex;
`;

const FolderWrapper = styled.div`
   width: 100%;
   height: 60%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const Folder1 = styled.div`
   margin: 1rem;
   width: 440px;
   height: 300px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const Folder2 = styled.div`
   margin: 1rem;
   width: 440px;
   height: 300px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const Footer = styled.div``;
export function AdminChart() {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   const navigate = useNavigate();
   const [data, setData] = useState([]);
   const [lectureData, setLectureData] = useState([]);
   const [freeLectures, setFreeLectures] = useState([]);
   const [paidLectures, setPaidLectures] = useState([]);

   async function findUsersWithRoleUserOnly() {
      if (!loginState) {
         return Promise.resolve();
      }
      try {
         const response = await fetch(
            `http://localhost:8080/api/users/non-admin-or-professor`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${loginState.token}`,
               },
            }
         );

         const responseData = await response.json();

         if (response.ok) {
            setData(responseData.data);
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("An error occurred", error);
         return Promise.reject(error);
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
            const allLectures = responseData.data;
            const freeLectures = allLectures.filter(
               (lecture) => lecture.price === 0
            );
            const paidLectures = allLectures.filter(
               (lecture) => lecture.price > 0
            );

            setLectureData(allLectures);
            setFreeLectures(freeLectures);
            setPaidLectures(paidLectures);
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("오류 발생", error);
      }
   }

   const totalUsers = data.length;
   const chartData = {
      labels: ["총 유저 수"],
      datasets: [
         {
            label: "유저 수",
            data: [totalUsers],
            backgroundColor: ["rgba(75,192,192,0.2)"],
            borderColor: ["rgba(75,192,192,1)"],
            borderWidth: 1,
         },
      ],
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            await Promise.all([findUsersWithRoleUserOnly(), getLecture()]);
            window.scrollTo(0, 0);
         } catch (error) {
            console.error("An error occurred", error);
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <NavBar />
         <Container>
            <Wrapper>
               <AdminBar />
               <Section1>
                  <FolderWrapper>
                     <Folder1>
                        <h2>유료/무료 강의 통계 자료</h2>
                        <Doughnut
                           data={{
                              labels: ["Free Lectures", "Paid Lectures"],
                              datasets: [
                                 {
                                    data: [
                                       freeLectures.length,
                                       paidLectures.length,
                                    ],
                                    backgroundColor: [
                                       "rgba(75,192,192,0.2)",
                                       "rgba(255,99,132,0.2)",
                                    ],
                                    borderColor: [
                                       "rgba(75,192,192,1)",
                                       "rgba(255,99,132,1)",
                                    ],
                                    borderWidth: 1,
                                 },
                              ],
                           }}
                        />
                     </Folder1>
                     <Folder2>
                        <h2>모든 회원 수 통계 자료</h2>
                        <Bar data={chartData} />
                     </Folder2>
                  </FolderWrapper>
                  <Footer></Footer>
               </Section1>
            </Wrapper>
         </Container>
         <MonacaInfo />
      </>
   );
}
