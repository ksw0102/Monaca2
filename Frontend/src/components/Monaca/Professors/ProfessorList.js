// 강의진 한 눈에 모아보기
import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//ManProfessorPic import
import Man1 from "../image/Professor/MP1.jpg";
import Man2 from "../image/Professor/MP2.jpg";
import Man3 from "../image/Professor/MP3.jpg";
import Man4 from "../image/Professor/MP4.jpg";
import Man5 from "../image/Professor/MP5.jpg";
import Man6 from "../image/Professor/MP6.jpg";
import Man7 from "../image/Professor/MP7.jpg";
import Man8 from "../image/Professor/MP8.jpg";
import Man9 from "../image/Professor/MP9.jpg";
import Man10 from "../image/Professor/MP10.jpg";
import Man11 from "../image/Professor/MP11.jpg";
import Man12 from "../image/Professor/MP12.jpg";

//WomanProfessorPic import
import Wom1 from "../image/Professor/WP1.jpg";
import Wom2 from "../image/Professor/WP2.jpg";
import Wom3 from "../image/Professor/WP3.jpg";
import Wom4 from "../image/Professor/WP4.jpg";
import Wom5 from "../image/Professor/WP5.jpg";
import Wom6 from "../image/Professor/WP6.jpg";
import Wom7 from "../image/Professor/WP7.jpg";
import Wom8 from "../image/Professor/WP8.jpg";

//emoji import
import WebEmo from "../image/webEmoji.jpg";
import MobEmo from "../image/MobEmoji.jpg";
import WelEmo from "../image/WelEmoji.jpg";

import Candybk from "../image/CandyRoom.jpg";

import Candylog from "../image/CandyLogo.png";

const Wrapper = styled.div`
   width: 100vw;
   height: 230vh;
   margin-bottom: 15rem;
   font-family: "TmonMonsori";
`;

const SubWrap = styled.div`
   width: 80%;
   height: 90%;
   margin: 4rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Container = styled.div`
   height: 200vh;
   width: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
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
const Kiosk = styled.div`
   width: 90%;
   height: 600px;
   margin: 1rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const KioskHeader = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 98%;
   margin: 0 auto;
`;

const KioskTitle = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const Info = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
   align-items: center;
`;

const KioskWrap = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   margin: 0 auto;
`;

const KioskIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const KioskPic1 = styled.div`
   background-image: url(${Wom2});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: top;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;
const KioskIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const KioskPic2 = styled.div`
   background-image: url(${Man2});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: top;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const KioskIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const KioskPic3 = styled.div`
   background-image: url(${Wom1});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: top;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const LectureInfo = styled.div`
   height: 50%;
   background-color: lightgrey;
   width: 100%;
   margin-top: 1.5rem;
   border-radius: 1rem;
   align-items: center;
   justify-content: center;
   display: flex;
   flex-direction: column;
   text-align: center;
   line-height: 2.5rem;
   & p {
      font-size: 18px;
   }
`;
//웹사이트
const Web = styled.div`
   width: 90%;
   height: 600px;
   margin: 1rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const WebEmoji = styled.div`
   width: 2.5%;
   height: 100%;
   background-image: url(${WebEmo});
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
   margin-left: 0.5rem;
`;

const WebHeader = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 98%;
   margin: 0 auto;
`;

const WebTitle = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const WebWrap = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   margin: 0 auto;
`;

const WebIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WebPic1 = styled.div`
   background-image: url(${Wom4});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;
const WebIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WebPic2 = styled.div`
   background-image: url(${Man5});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

// 모바일
const Mobile = styled.div`
   width: 90%;
   height: 600px;
   margin: 1rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const MobileEmoji = styled.div`
   width: 2%;
   height: 100%;
   background-image: url(${MobEmo});
   background-position: top;
   background-repeat: no-repeat;
   background-size: contain;
   margin-left: 0.5rem;
`;

const MobileHeader = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 98%;
   margin: 0 auto;
`;

const MobileTitle = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const MobileWrap = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   margin: 0 auto;
`;

const MobileIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MobilePic1 = styled.div`
   background-image: url(${Wom5});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: top;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;
const MobileIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MobilePic2 = styled.div`
   background-image: url(${Man6});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

//복지
const Welfare = styled.div`
   width: 90%;
   height: 600px;
   margin: 1rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const WelfareEmoji = styled.div`
   width: 3%;
   height: 100%;
   background-image: url(${WelEmo});
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
   margin-left: 0.5rem;
`;

const WelfareHeader = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 98%;
   margin: 0 auto;
`;

const WelfareTitle = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const WelfareWrap = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   margin: 0 auto;
`;

const WelfareIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WelfarePic1 = styled.div`
   background-image: url(${Wom8});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const WelfareIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const WelfarePic3 = styled.div`
   background-image: url(${Man10});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   border-radius: 1rem;
   height: 100%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const Candy = styled.div`
   width: 30%;
   height: 90%;
   margin: 1rem;
   background-image: url(${Candylog});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   opacity: 0.5;
`;
// 강의 한 눈에 보기
export function ProfessorList() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const navigate = useNavigate();

   const navigateToProfessorInfo = () => {
      navigate("/professor-info");
   };

   const navigateToKioskPf1 = () => {
      navigate("/kioskpf1");
   };

   const navigatetToKioksPf2 = () => {
      navigate("/kioskpf2");
   };
   const navigatetToKioksPf3 = () => {
      navigate("/kioskpf3");
   };
   const navigateToMobPf1 = () => {
      navigate("/mobpf1");
   };
   const navigateToMobPf2 = () => {
      navigate("/mobpf2");
   };
   const navigateToWebPf1 = () => {
      navigate("/webpf1");
   };
   const navigateToWebPf2 = () => {
      navigate("/webpf2");
   };
   const navigateToWelPf1 = () => {
      navigate("/welpf1");
   };
   const navigateToWelPf2 = () => {
      navigate("/welpf2");
   };
   return (
      <>
         <NavBar />
         <Wrapper>
            <Header>
               <h1>모나카에 있는 교수진 한눈에 보기</h1>
            </Header>
            <SubWrap>
               <Container>
                  <Kiosk>
                     <KioskHeader>
                        <KioskTitle title="아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요."></KioskTitle>
                        <Info>
                           <p>키오스크 🏧</p>
                        </Info>
                     </KioskHeader>
                     <KioskWrap>
                        <KioskIn1>
                           <KioskPic1 onClick={navigateToKioskPf1} />
                           <LectureInfo>
                              <p>이현주</p>
                              <p>소프트웨어공학 박사</p>
                              <p>hj04@dw.com</p>
                           </LectureInfo>
                        </KioskIn1>
                        <KioskIn2>
                           <KioskPic2 onClick={navigatetToKioksPf2} />
                           <LectureInfo>
                              <p>이준호</p>
                              <p>전자공학 박사</p>
                              <p>jh10@dw.com</p>
                           </LectureInfo>
                        </KioskIn2>
                        <KioskIn3>
                           <KioskPic3 onClick={navigatetToKioksPf3} />
                           <LectureInfo>
                              <p>김지영</p>
                              <p>컴퓨터공학 석사</p>
                              <p>jy08@dw.com</p>
                           </LectureInfo>
                        </KioskIn3>
                     </KioskWrap>
                  </Kiosk>
                  <Web>
                     <WebHeader>
                        <WebTitle title="아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요."></WebTitle>
                        <Info>
                           <p>웹사이트</p>
                           <WebEmoji />
                        </Info>
                     </WebHeader>
                     <WebWrap>
                        <WebIn1>
                           <WebPic1 onClick={navigateToWebPf1} />
                           <LectureInfo>
                              <p>최윤서</p>
                              <p>디자인 박사</p>
                              <p>ys07@dw.com</p>
                           </LectureInfo>
                        </WebIn1>
                        <WebIn2>
                           <WebPic2 onClick={navigateToWebPf2} />
                           <LectureInfo>
                              <p>정현우</p>
                              <p>데이터베이스 석사</p>
                              <p>hw09@dw.com</p>
                           </LectureInfo>
                        </WebIn2>
                        <Candy />
                     </WebWrap>
                  </Web>
                  <Mobile>
                     <MobileHeader>
                        <MobileTitle title="아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요."></MobileTitle>
                        <Info>
                           <p>모바일</p>
                           <MobileEmoji />
                        </Info>
                     </MobileHeader>
                     <MobileWrap>
                        <MobileIn1>
                           <MobilePic1 onClick={navigateToMobPf1} />
                           <LectureInfo>
                              <p>정수빈</p>
                              <p>모바일 앱 개발 석사</p>
                              <p>sb03@dw.com</p>
                           </LectureInfo>
                        </MobileIn1>
                        <MobileIn2>
                           <MobilePic2 onClick={navigateToMobPf2} />
                           <LectureInfo>
                              <p>강태영</p>
                              <p>인터랙션 디자인 박사</p>
                              <p>ty08@dw.com</p>
                           </LectureInfo>
                        </MobileIn2>{" "}
                        <Candy />
                     </MobileWrap>
                  </Mobile>
                  <Welfare>
                     <WelfareHeader>
                        <WelfareTitle title="아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요."></WelfareTitle>
                        <Info>
                           <p>국가복지 및 민원</p>
                           <WelfareEmoji />
                        </Info>
                     </WelfareHeader>
                     <WelfareWrap>
                        <WelfareIn1>
                           <WelfarePic1 onClick={navigateToWelPf1} />
                           <LectureInfo>
                              <p>손미경</p>
                              <p>공공정책 박사</p>
                              <p>mg12@dw.com</p>
                           </LectureInfo>
                        </WelfareIn1>
                        <WelfareIn3>
                           <WelfarePic3 onClick={navigateToWelPf2} />
                           <LectureInfo>
                              <p>한태석</p>
                              <p>사회복지 석사</p>
                              <p>ts06@dw.com</p>
                           </LectureInfo>
                        </WelfareIn3>{" "}
                        <Candy />
                     </WelfareWrap>
                  </Welfare>
               </Container>
            </SubWrap>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
