import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SubWrap = styled.div`
   display: flex;
   height: 100%;
   width: 20%;
   font-family: "GmarketSansMedium";
`;

const Section1 = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-rows: repeat(3, 1fr);
`;

const List = styled.div`
   width: 100%;
   height: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   & h4 {
      margin-bottom: 0.5rem;
   }
   & h3 {
      color: #ff5865;
      &:hover {
         cursor: pointer;
      }
   }
   & ul {
      margin-left: 1rem;
      list-style: none;
      display: flex;
      flex-direction: column;
   }
   & li {
      & h5 {
         margin-bottom: 10px;
         color: #666666;
      }
   }
`;

const Click = styled.h4`
   &:hover {
      cursor: pointer;
   }
`;

export function AdminBar() {
   const navigate = useNavigate();
   const navigateToLectureList = () => {
      navigate("/lecture-list");
   };
   const navigateToAdminRoom = () => {
      navigate("/admin-room");
   };
   const navigateToStudentMgmt = () => {
      navigate("/stud-mgmt");
   };

   const navigateToAdminLmgnt = () => {
      navigate("/admin-lmgnt");
   };
   const navigateToQnA = () => {
      navigate("/lecture-qna");
   };
   const navigateToNoticeNotice = () => {
      navigate("/notice");
   };
   return (
      <>
         <SubWrap>
            <Section1>
               <List>
                  <h3 onClick={navigateToAdminRoom}>나의방</h3>
                  <br />
                  <ul>
                     <li>
                        <Click>내 캐릭터</Click>
                        <h5>내가 보유한 캐릭터 꾸미기</h5>
                     </li>

                     <li>
                        <Click>상점</Click>
                        <h5>내가 보유한 캐릭터를</h5>
                        <h5>꾸밀 수 있는 아이템 사기</h5>
                     </li>

                     <li>
                        <Click>내 프로필</Click>
                        <h5>등록된 내 프로필 보기</h5>
                     </li>
                  </ul>
               </List>
               <List>
                  <h3 onClick={navigateToAdminLmgnt}>학습관리</h3> <br />
                  <ul>
                     <li>
                        <Click onClick={navigateToLectureList}>강의실</Click>
                        <h5>전 강의 보기</h5>
                     </li>
                     <li>
                        <Click onClick={navigateToNoticeNotice}>
                           공지사항 등록
                        </Click>
                     </li>
                     <li>
                        <Click onClick={navigateToQnA}>질문 모아보기</Click>
                        <h5>회원이 등록한 질문 모아보기</h5>
                     </li>
                  </ul>
               </List>
               <List>
                  <h3 onClick={navigateToStudentMgmt}>회원 관리실</h3> <br />
                  <ul>
                     <li>
                        <Click onClick={navigateToStudentMgmt}>
                           전체 회원수 관리
                        </Click>
                        <h5>모든 회원 인원 통계</h5>
                     </li>
                     <li>
                        <Click onClick={navigateToStudentMgmt}>
                           일,주,월,별 접속자
                        </Click>
                     </li>
                     <li>
                        <Click onClick={navigateToStudentMgmt}>교수 채용</Click>
                     </li>
                     <li>
                        <Click onClick={navigateToStudentMgmt}>판매실적</Click>
                        <h5>그간 판매한 실적 관리</h5>
                     </li>
                  </ul>
               </List>
            </Section1>
         </SubWrap>
      </>
   );
}
