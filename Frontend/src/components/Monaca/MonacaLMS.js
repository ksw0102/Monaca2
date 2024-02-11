// 총괄 컴포넌트
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Main } from "./Mains/Main";
import { Notice } from "./Admins/Notice";
import { StudentRegister } from "./Student/StudentRegister";
import { Message } from "./Messages/Message";
import { CsCenter } from "./Admins/CsCenter";
import styled from "styled-components";
import { ProfessorRegister } from "./Professors/ProfessorRegister";
import { LectureList } from "./Lectures/LectureList";
import { LectureInfo } from "./Lectures/LectureInfo";
import { ProfessorList } from "./Professors/ProfessorList";
import Intro from "./Intro";
import { createContext, useEffect, useState } from "react";
import { ProfessorEmployee } from "./Professors/ProfessorEmployee";
import { LearningMgmt } from "./Professors/LearningMgmt";
import { StudentMgmt } from "./Professors/StudentMgmt";
import { Material } from "./Lectures/Material";
import { GradeGuide } from "./GradeGuide";
import { LectureQnA } from "./Lectures/LectureQnA";
import { LectureNotice } from "./Lectures/LectureNotice";

import { ExamPaper } from "./Student/ExamPaper";
import { QueryClient } from "react-query";
import { ProfessorRoom } from "./Professors/ProfessorRoom";
import { UserRoom } from "./Student/UserRoom";
import { UserLrngMgmt } from "./Student/UserLrngMgmt";
import { UserCourseMgmt } from "./Student/UserCourseMgmt";
import { LectureCart } from "./Lectures/LectureCart";
import { OutBox } from "./Messages/OutBox";
import { InBox } from "./Messages/InBox";
import { ItemShop } from "./Student/ItemShop";
import { PfsProfile } from "./Professors/PfsProfile";
import { OutBoxDetaile } from "./Messages/OutBoxDetaile";
import { InBoxDetaile } from "./Messages/InBoxDetaile";
import { DoQnA } from "./Student/DoQnA";
import { Kiosk1 } from "./LectureInfo/Kiosk1";
import { Kiosk2 } from "./LectureInfo/Kiosk2";
import { Kiosk3 } from "./LectureInfo/Kiosk3";
import { Kiosk4 } from "./LectureInfo/Kiosk4";
import { Kiosk5 } from "./LectureInfo/Kiosk5";
import { Logout } from "./Mains/Logout";
import { Kiosk1QnA } from "./LectureQnAs/Kiosk1QnA";
import { Kiosk2QnA } from "./LectureQnAs/Kiosk2QnA";
import { Kiosk3QnA } from "./LectureQnAs/Kiosk3QnA";
import { Kiosk4QnA } from "./LectureQnAs/Kiosk4QnA";
import { Kiosk5QnA } from "./LectureQnAs/Kiosk5QnA";
import { Web1QnA } from "./LectureQnAs/Web1QnA";
import { Web2QnA } from "./LectureQnAs/Web2QnA";
import { Web3QnA } from "./LectureQnAs/Web3QnA";
import { Web4QnA } from "./LectureQnAs/Web4QnA";
import { Web5QnA } from "./LectureQnAs/Web5QnA";
import { Mobile1QnA } from "./LectureQnAs/Mobile1QnA";
import { Mobile2QnA } from "./LectureQnAs/Mobile2QnA";
import { Mobile3QnA } from "./LectureQnAs/Mobile3QnA";
import { Mobile4QnA } from "./LectureQnAs/Mobile4QnA";
import { Mobile5QnA } from "./LectureQnAs/Mobile5QnA";
import { Mob1 } from "./LectureInfo/Mob1";
import { Mob2 } from "./LectureInfo/Mob2";
import { Mob3 } from "./LectureInfo/Mob3";
import { Mob4 } from "./LectureInfo/Mob4";
import { Mob5 } from "./LectureInfo/Mob5";
import { Web1 } from "./LectureInfo/Web1";
import { Web2 } from "./LectureInfo/Web2";
import { Web3 } from "./LectureInfo/Web3";
import { Web4 } from "./LectureInfo/Web4";
import { Web5 } from "./LectureInfo/Web5";
import { Wel1 } from "./LectureInfo/Wel1";
import { Wel2 } from "./LectureInfo/Wel2";
import { Wel3 } from "./LectureInfo/Wel3";
import { Wel4 } from "./LectureInfo/Wel4";
import { Wel5 } from "./LectureInfo/Wel5";
import { Welfare1QnA } from "./LectureQnAs/Welfare1QnA";
import { Welfare2QnA } from "./LectureQnAs/Welfare2QnA";
import { Welfare3QnA } from "./LectureQnAs/Welfare3QnA";
import { Welfare4QnA } from "./LectureQnAs/Welfare4QnA";
import { Welfare5QnA } from "./LectureQnAs/Welfare5QnA";
import { KioskPf1 } from "./ProfessorInfo/KioskPf1";
import { KioskPf2 } from "./ProfessorInfo/KioskPf2";
import { KioskPf3 } from "./ProfessorInfo/KioskPf3";
import { WebPf1 } from "./ProfessorInfo/WebPf1";
import { WebPf2 } from "./ProfessorInfo/WebPf2";
import { WelPf1 } from "./ProfessorInfo/WelPf1";
import { WelPf2 } from "./ProfessorInfo/WelPf2";
import { MobPf1 } from "./ProfessorInfo/MobPf1";
import { MobPf2 } from "./ProfessorInfo/MobPf2";
import { Cart } from "./Cart";
import { DoKioskQ1 } from "./DoQnAs/DoKioskQ1";
import { DoKioskQ2 } from "./DoQnAs/DoKioskQ2";
import { DoKioskQ3 } from "./DoQnAs/DoKioskQ3";
import { DoKioskQ4 } from "./DoQnAs/DoKioskQ4";
import { DoKioskQ5 } from "./DoQnAs/DoKioskQ5";
import { DoWebQ1 } from "./DoQnAs/DoWebQ1";
import { DoWebQ2 } from "./DoQnAs/DoWebQ2";
import { DoWebQ3 } from "./DoQnAs/DoWebQ3";
import { DoWebQ4 } from "./DoQnAs/DoWebQ4";
import { DoWebQ5 } from "./DoQnAs/DoWebQ5";
import { DoMobQ1 } from "./DoQnAs/DoMobQ1";
import { DoMobQ2 } from "./DoQnAs/DoMobQ2";
import { DoMobQ3 } from "./DoQnAs/DoMobQ3";
import { DoMobQ4 } from "./DoQnAs/DoMobQ4";
import { DoMobQ5 } from "./DoQnAs/DoMobQ5";
import { DoWelQ1 } from "./DoQnAs/DoWelQ1";
import { DoWelQ2 } from "./DoQnAs/DoWelQ2";
import { DoWelQ3 } from "./DoQnAs/DoWelQ3";
import { DoWelQ4 } from "./DoQnAs/DoWelQ4";
import { DoWelQ5 } from "./DoQnAs/DoWelQ5";
import { ClassRoom } from "./Student/ClassRoom";
import { CompletedLecture } from "./Student/CompletedLecture";
import { RegisteredLecture } from "./Professors/RegisteredLecture";
import { UploadLecture } from "./Professors/UploadLecture";
import { RegistrationConfirm } from "./Professors/RegistrationConfirm";
import { InfoUi } from "./Professors/InfoUi";
import { AdminBar } from "./Admins/AdminBar";
import { AdminRoom } from "./Admins/AdminRoom";
import { AdminLMgnt } from "./Admins/AdminLMgnt";
import { WriteaNotice } from "./Admins/WriteaNotice";
import { AdminNotice } from "./Admins/AdminNotice";

const Container = styled.div`
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const client = new QueryClient();
export const MonacaContext = createContext();
export function MonacaLMS() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [showIntro, setShowIntro] = useState(true);
   const [loginState, setLoginState] = useState(
      JSON.parse(sessionStorage.getItem("loginState"))
   );

   useEffect(() => {
      const storedLoginState = JSON.parse(sessionStorage.getItem("loginState"));
      if (storedLoginState && storedLoginState.id) {
         setIsLoggedIn(true);
      }
   }, []);
   return (
      <>
         <MonacaContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <BrowserRouter>
               <Container>
                  <div>
                     <Routes>
                        {showIntro && (
                           <Route
                              index
                              element={<Intro setShowIntro={setShowIntro} />}
                           />
                        )}
                        <Route index element={<Main />} />
                        <Route path="/main" element={<Main />} />
                        <Route
                           path="/student-register"
                           element={<StudentRegister />}
                        />
                        <Route
                           path="professor-register"
                           element={<ProfessorRegister />}
                        />
                        <Route path="pf-room" element={<ProfessorRoom />} />
                        <Route path="message" element={<Message />} />
                        <Route path="cs-center" element={<CsCenter />} />
                        <Route path="lecture-list" element={<LectureList />} />
                        <Route path="lecture-info" element={<LectureInfo />} />

                        <Route path="logout" element={<Logout />} />
                        <Route
                           path="professor-list"
                           element={<ProfessorList />}
                        />

                        <Route
                           path="employee"
                           element={<ProfessorEmployee />}
                        />
                        <Route path="my-cart" element={<Cart />} />
                        <Route path="notice" element={<Notice />} />
                        <Route path="message" element={<Message />} />
                        <Route path="pf-lngmgmt" element={<LearningMgmt />} />
                        <Route path="stud-mgmt" element={<StudentMgmt />} />
                        <Route path="material" element={<Material />} />
                        <Route path="grade-guide" element={<GradeGuide />} />
                        <Route path="lecture-qna" element={<LectureQnA />} />
                        <Route
                           path="lecture-notice"
                           element={<LectureNotice />}
                        />
                        <Route path="exam-paper" element={<ExamPaper />} />
                        <Route path="user-room" element={<UserRoom />} />
                        <Route path="user-lngmgmt" element={<UserLrngMgmt />} />
                        <Route
                           path="user-coursemgmt"
                           element={<UserCourseMgmt />}
                        />
                        <Route path="lecture-cart" element={<LectureCart />} />
                        <Route path="out-box" element={<OutBox />} />
                        <Route path="in-box" element={<InBox />} />
                        <Route path="item-shop" element={<ItemShop />} />
                        <Route path="pf-profile" element={<PfsProfile />} />
                        <Route
                           path="out-box-detaile"
                           element={<OutBoxDetaile />}
                        />
                        <Route
                           path="in-box-detaile"
                           element={<InBoxDetaile />}
                        />
                        <Route path="do-qna" element={<DoQnA />} />
                        <Route path="kiosk-1" element={<Kiosk1 />} />
                        <Route path="kiosk-2" element={<Kiosk2 />} />
                        <Route path="kiosk-3" element={<Kiosk3 />} />
                        <Route path="kiosk-4" element={<Kiosk4 />} />
                        <Route path="kiosk-5" element={<Kiosk5 />} />
                        <Route path="kiosk1-qna" element={<Kiosk1QnA />} />
                        <Route path="kiosk2-qna" element={<Kiosk2QnA />} />
                        <Route path="kiosk3-qna" element={<Kiosk3QnA />} />
                        <Route path="kiosk4-qna" element={<Kiosk4QnA />} />
                        <Route path="kiosk5-qna" element={<Kiosk5QnA />} />
                        <Route path="mob-1" element={<Mob1 />} />
                        <Route path="mob-2" element={<Mob2 />} />
                        <Route path="mob-3" element={<Mob3 />} />
                        <Route path="mob-4" element={<Mob4 />} />
                        <Route path="mob-5" element={<Mob5 />} />
                        <Route path="mobile1-qna" element={<Mobile1QnA />} />
                        <Route path="mobile2-qna" element={<Mobile2QnA />} />
                        <Route path="mobile3-qna" element={<Mobile3QnA />} />
                        <Route path="mobile4-qna" element={<Mobile4QnA />} />
                        <Route path="mobile5-qna" element={<Mobile5QnA />} />
                        <Route path="web-1" element={<Web1 />} />
                        <Route path="web-2" element={<Web2 />} />
                        <Route path="web-3" element={<Web3 />} />
                        <Route path="web-4" element={<Web4 />} />
                        <Route path="web-5" element={<Web5 />} />
                        <Route path="web1-qna" element={<Web1QnA />} />
                        <Route path="web2-qna" element={<Web2QnA />} />
                        <Route path="web3-qna" element={<Web3QnA />} />
                        <Route path="web4-qna" element={<Web4QnA />} />
                        <Route path="web5-qna" element={<Web5QnA />} />
                        <Route path="wel-1" element={<Wel1 />} />
                        <Route path="wel-2" element={<Wel2 />} />
                        <Route path="wel-3" element={<Wel3 />} />
                        <Route path="wel-4" element={<Wel4 />} />
                        <Route path="wel-5" element={<Wel5 />} />
                        <Route path="wel1-qna" element={<Welfare1QnA />} />
                        <Route path="wel2-qna" element={<Welfare2QnA />} />
                        <Route path="wel3-qna" element={<Welfare3QnA />} />
                        <Route path="wel4-qna" element={<Welfare4QnA />} />
                        <Route path="wel5-qna" element={<Welfare5QnA />} />
                        <Route path="kioskpf1" element={<KioskPf1 />} />
                        <Route path="kioskpf2" element={<KioskPf2 />} />
                        <Route path="kioskpf3" element={<KioskPf3 />} />
                        <Route path="mobpf1" element={<MobPf1 />} />
                        <Route path="mobpf2" element={<MobPf2 />} />
                        <Route path="webpf1" element={<WebPf1 />} />
                        <Route path="webpf2" element={<WebPf2 />} />
                        <Route path="welpf1" element={<WelPf1 />} />
                        <Route path="welpf2" element={<WelPf2 />} />
                        <Route path="do-kiosk-q1" element={<DoKioskQ1 />} />
                        <Route path="do-kiosk-q2" element={<DoKioskQ2 />} />
                        <Route path="do-kiosk-q3" element={<DoKioskQ3 />} />
                        <Route path="do-kiosk-q4" element={<DoKioskQ4 />} />
                        <Route path="do-kiosk-q5" element={<DoKioskQ5 />} />
                        <Route path="do-web-q1" element={<DoWebQ1 />} />
                        <Route path="do-web-q2" element={<DoWebQ2 />} />
                        <Route path="do-web-q3" element={<DoWebQ3 />} />
                        <Route path="do-web-q4" element={<DoWebQ4 />} />
                        <Route path="do-web-q5" element={<DoWebQ5 />} />
                        <Route path="do-mob-q1" element={<DoMobQ1 />} />
                        <Route path="do-mob-q2" element={<DoMobQ2 />} />
                        <Route path="do-mob-q3" element={<DoMobQ3 />} />
                        <Route path="do-mob-q4" element={<DoMobQ4 />} />
                        <Route path="do-mob-q5" element={<DoMobQ5 />} />
                        <Route path="do-wel-q1" element={<DoWelQ1 />} />
                        <Route path="do-wel-q2" element={<DoWelQ2 />} />
                        <Route path="do-wel-q3" element={<DoWelQ3 />} />
                        <Route path="do-wel-q4" element={<DoWelQ4 />} />
                        <Route path="do-wel-q5" element={<DoWelQ5 />} />
                        <Route path="stud-class-room" element={<ClassRoom />} />
                        <Route
                           path="cp-lectures"
                           element={<CompletedLecture />}
                        />
                        <Route
                           path="reged-lectures"
                           element={<RegisteredLecture />}
                        />
                        <Route
                           path="upload-lecture"
                           element={<UploadLecture />}
                        />
                        <Route
                           path="confirm"
                           element={<RegistrationConfirm />}
                        />
                        <Route path="info-ui" element={<InfoUi />} />
                        <Route path="admin-bar" element={<AdminBar />} />
                        <Route path="admin-room" element={<AdminRoom />} />
                        <Route path="admin-lmgnt" element={<AdminLMgnt />} />
                        <Route path="write-a-notice" element={<WriteaNotice/>} />
                        <Route path="admin-notice" element={<AdminNotice/>} />
                     </Routes>
                  </div>
               </Container>
            </BrowserRouter>
         </MonacaContext.Provider>
      </>
   );
}
