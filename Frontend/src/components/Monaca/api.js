
// 회원가입, 회원관리 API (Authenticate, UserController)

// 로그인 하기
export async function login(user) {
   console.log(user);
   try {
      const response = await fetch(`http://localhost:8080/api/authenticate`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      });
      if (!response.ok) {
         throw new Error(`HTTP ERROR! Status : ${response.status}`);
      }
      return await response.json();
   } catch (error) {
      console.error("FETCH ERROR :", error);
   }
}

// 유저(일반 학생회원) 가입하기
export async function signup(user) {
   return fetch(`http://localhost:8080/api/signup/user`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 유저(교수) 가입하기
export function professorsignup(user) {
   return fetch(`http://localhost:8080/api/signup/professor`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 교수 정보 불러오기
export function getUserByProfessorIntro(user) {
   return fetch(`http://localhost:8080/api/apply/professor`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}

// 유저에게 교수권한 부여하기
export function addAuthenticateByUser(user) {
   return fetch(`http://localhost:8080/api/user/authority/{loginId}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}

//	권한이 'ROLE_ADMIN'이나 'ROLE_PROFESSOR'를 가지고 있지 않은 유저를 찾기
export function findUsersWithRoleUserOnly(){
   return fetch(`http://localhost:8080/api/users/non-admin-or-professor`),{
      method:"GET",
      headers: {
         "Content-Type":"application/json",
      },
   }.then((response) => response.json());
}

// LoginId를 이용해 특정 유저 정보 받아오기
export function getUserInfo(loginId) {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   return fetch(`http://localhost:8080/api/user/${loginId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${loginState.token}`,
      },
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 권한 조회하기
export function getCurrentUserWithAuthorities(user) {
   return fetch(`http://localhost:8080/api/user/authority`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 유저의 권한 조회하기
export function getAuthorities(user) {
   return fetch(`http://localhost:8080/api/user/authority/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 회원 탈퇴(본인이 직접) 기능
export function deleteByUserForSelf(user) {
   return fetch(`http://localhost:8080/api/user/delete/self`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 회원 박탈(관리자가 진행)
export function deleteByUser(user) {
   return fetch(`http://localhost:8080/api/user/delete/loginId/{loginId}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 유저별로 가입날짜 조회하기
export function getJoinDateByLoginId(user) {
   return fetch(`http://localhost:8080/api/user/joinDate/{loginId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 유저 가입날짜 조회하기
export function getJoinDateForAllUsers(user) {
   return fetch(`http://localhost:8080/api/user/joinDate/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 사용자 가입한 날 이후 현재 날짜 기준으로 며칠이 지났는지 조회하기
export function getDaysJoinedForSelf(user) {
   return fetch(`http://localhost:8080/api/user/joinDays`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 유저별로 가입한 날 이후 현재 날짜 기준으로 며칠이 지났는지 조회하기(유저의 가입일과 현재 날짜 사이의 일수를 계산)
export function getDaySinceJoined(user) {
   return fetch(`http://localhost:8080/api/daysSince/{loginId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 유저 가입한 날 이후 현재 날짜 기준으로 며칠이 지났는지 조회하기(유저의 가입일과 현재 날짜 사이의 일수를 계산)
export function getDaysSinceJoinedForAllUsers(user) {
   return fetch(`http://localhost:8080/api/daysSince/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 사용자의 user_rating 조회
export function getCurrentUserRatings(user) {
   return fetch(`http://localhost:8080/api/user/ratings`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 사용자의 user_rating 조회
export function getAllUsersRatings(user) {
   return fetch(`http://localhost:8080/api/user/ratings/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 특정 loginId를 가진 사용자의 user_rating 조회
export function getUserRatingsByLoginId(user) {
   return fetch(`http://localhost:8080/api/user/{loginId}ratings`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 찜 목록 보기
export function getWishLectures(user) {
   return fetch(`http://localhost:8080/api/wishLecture/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의 찜하기
export function saveWishLecture(user) {
   return fetch(`http://localhost:8080/api/saveWishLecture/{lectureId}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의 찜 해제하기
export function removeWishLecture(user) {
   return fetch(`http://localhost:8080/api/removeWishLecture/{lectureId}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 교수가 가르치는 강의 조회하기
export function getTeachingLecturesByCurrentProfessor(user) {
   return fetch(`http://localhost:8080/api/teaching`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 특정 교수 이름으로 강의 조회하기
export function getTeachingLecturesByProfessorName(user) {
   return fetch(
      `http://localhost:8080/api/teaching/professorName/{professorName}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 공지사항 API (AdminNoticeController, ProfessorNoticeController)

// 공지사항(AdminNotice) API

// AdminNotice 전체 조회
export function getAllAdminNotice(user) {
   return fetch(`http://localhost:8080/api/adminNotice/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// AdminNotice ID로 조회
export function getAdminNoticeById(user) {
   return fetch(`http://localhost:8080/api/adminNotice/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// AdimNotice 등록
export function createAdminNotice(user) {
   return fetch(`http://localhost:8080/api/adminNotice`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// AdminNotice 수정
export function updateAdminNotice(user) {
   return fetch(`http://localhost:8080/api/adminNotice/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// AdminNotice 삭제
export function deleteAdminNoticeById(user) {
   return fetch(`http://localhost:8080/api/adminNotice/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 공지사항(ProfessorNotice) API

// ProfessorNotice 전체 조회
export function getAllProfessorNotice(user) {
   return fetch(`http://localhost:8080/api/professorNotice/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// ProfessorNotice ID로 조회
export function getProfessorNoticeById(user) {
   return fetch(`http://localhost:8080/api/professorNotice/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// ProfessorNotice Lecture별로 조회
export function getAllProfessorNoticeByLecture(user) {
   return fetch(`http://localhost:8080/api/professorNotice/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// ProfessorNotice 등록
export function createProfessorNotice(user) {
   return fetch(`http://localhost:8080/api/professorNotice`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// ProfessorNotice 수정
export function updateProfessorNotice(user) {
   return fetch(`http://localhost:8080/api/professorNotice/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// ProfessorNotice 삭제
export function deleteProfessorNotice(user) {
   return fetch(`http://localhost:8080/api/professorNotice/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 출석 관리 (AttendanceController) API

// 특정 사용자의 출석 정보 저장
export function saveAttendance(user) {
   return fetch(`http://localhost:8080/api/attendance`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 사용자의 출석 목록을 가져오기
export function getAllAttendance(user) {
   return fetch(`http://localhost:8080/api/adrate/all`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 유저의 연도별 출석목록을 가져오기
export function getAttendanceByTimeStampOfYear(user) {
   return fetch(`http://localhost:8080/api/adrate/year/{year}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 유저의 월별 출석목록을 가져오기
export function getAttendanceByTimeStampOfMonth(user) {
   return fetch(`http://localhost:8080/api/adrate/year/{year}/month/{month}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 유저의 주간별 출석목록을 가져오기
export function getAttendanceByTimeStampOfWeek(user) {
   return fetch(`http://localhost:8080/api/adrate/year/{year}/month/{week}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 유저의 일별 출석목록을 가져오기
export function getAttendanceByTimeStampOfDay(user) {
   return fetch(
      `http://localhost:8080/api/adrate/year/{year}/month/{month}/day/{day}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 현재 로그인 한 유저의 출석 목록을 가져오기
export function getAttendanceByUser(user) {
   return fetch(`http://localhost:8080/api/myadrate`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 연도별 출석목록을 가져오기
export function getAttendanceByUserIdAndTimeStampOfYear(user) {
   return fetch(`http://localhost:8080/api/myadrate/year/{year}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 특정 유저의 월별 출석목록을 가져오기
export function getAttendanceByUserIdAndTimeStampOfMonth(user) {
   return fetch(`http://localhost:8080/api/myadrate/year/{year}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 특정 유저의 주간별 출석목록을 가져오기
export function getAttendanceByUserIdAndTimeStampOfWeek(user) {
   return fetch(
      `http://localhost:8080/api/myadrate/year/{year}/month/{month}/week/{week}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 특정 유저의 일별 출석목록을 가져오기
export function getAttendanceByUserIdAndTimeStampOfDay(user) {
   return fetch(
      `http://localhost:8080/api/myadrate/year/{year}/month/{month}/day/{day}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 특정 유저의 LoginId로 출석 목록을 가져오기
export function getAttendanceByLoginId(user) {
   return fetch(`http://localhost:8080/api/adrate/{loginId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 특정 유저의 LoginId로 년도별 출석 리스트 조회
export function getAttendanceByLoginIdIdAndTimeStampOfYear(user) {
   return fetch(`http://localhost:8080api/adrate/{loginId}/year/{year}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 특정 유저의 LoginId로 월별 출석 리스트 조회
export function getAttendanceByLoginIdIdAndTimeStampOfMonth(user) {
   return fetch(
      `http://localhost:8080api/adrate/{loginId}/year/{year}/month/{month}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 특정 유저의 LoginId로 주별 출석 리스트 조회
export function getAttendanceByLoginIdIdAndTimeStampOfWeek(user) {
   return fetch(
      `http://localhost:8080/api/adrate/{loginId}/year/{year}/month/{month}/week/{week}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 특정 유저의 LoginId로 일별 출석 리스트 조회
export function getAttendanceByLoginIdIdAndTimeStampOfDay(user) {
   return fetch(
      `http://localhost:8080/api/adrate/{loginId}/year/{year}/month/{month}/day/{day}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 등급(GradeController) API

// Grade를 생성
export function createGrade(user) {
   return fetch(`http://localhost:8080/api/grade`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// Grade를 수정
export function updateGrade(user) {
   return fetch(`http://localhost:8080/api/grade/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// Grade를 삭제
export function deleteGradeById(user) {
   return fetch(`http://localhost:8080/api/examination/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// Grade를 불러오기
export function getAllGrade(user) {
   return fetch(`http://localhost:8080/api/grade`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// Examination의 isCorrect결과를 바탕으로 총점 계산, 그 계산을 바탕으로 총점에 따른 등급 결정
export function calculateAndAssignGrade(user) {
   return fetch(`http://localhost:8080/api/grade/calculate/{lectureName}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}


// 강의(LectureController) API

// 모든 강의 불러오기
export function getAllLecture() {
   return fetch(`http://localhost:8080/api/lecture/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}

// Lecture 카테고리 별 불러오기
export function getAllLectureByCategoryName(user) {
   return fetch(
      `http://localhost:8080/api/lecture/lectureCategory/{categoryName}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// professor 별 불러오기
export function getAllLectureByProfessor(user) {
   return fetch(`http://localhost:8080/api/lecture/professor/{professorName}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 유료강의만 불러오기
export function getAllLectureByPaidLectures(user) {
   return fetch(`http://localhost:8080/api/lecture/paid`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 무료 강의만 불러오기
export function getAllLectureByFreeLectures(user) {
   return fetch(`http://localhost:8080/api/lecture/free`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// LecureID로 특정 강의 불러오기
export function getLectureById(id) {
   return fetch(`http://localhost:8080/api/lecture/id/${id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}

// Lecture 업로드
export function createLecture(user) {
   return fetch(`http://localhost:8080/api/lecture`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// LectrueID로 특정 강의 삭제
export function deleteLectureById(user) {
   return fetch(`http://localhost:8080/api/lecture/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}


// 장바구니(LectureCartController) API

// 현재 로그인한 User의 cart(장바구니)에 담아놓은 Item(Lecture) 전부 조회
export function getAllLectureCart(user) {
   return fetch(`http://localhost:8080/api/lectureCart/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 User의 cart(장바구니)에 담아놓은 Item(Lecture)을 ID로 조회
export function getLectureCartById(user) {
   return fetch(`http://localhost:8080/api/lectureCart/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 User의 cart에 Item(Lecture) 담기
export function createLectureCart(user) {
   return fetch(`http://localhost:8080/api/lectureCart`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 User가 장바구니에 담아놓은 Item(Lecture)를 결제( ClassRoom에는 복사되어 생성 )
export function purchaseLectureCart(user) {
   return fetch(`http://localhost:8080/api/lectureCart/purchase/{id}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 User의 cart에 담아놓은 Item(lecture) 전부 삭제
export function deleteAllLectureCart(user) {
   return fetch(`http://localhost:8080/api/lectureCart/delete/all`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 User의 cart에 담아놓은 Item(lecture) ID로 선택하여 삭제
export function deleteLectureCartById(user) {
   return fetch(`http://localhost:8080/api/lectureCart/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의실(ClassRoomController) API

// 현재 로그인한 유저의 ClassRoom을 전체 조회
export function getAllClassRoom(user) {
   return fetch(`http://localhost:8080/api/classRoom/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 ClassRoom을 ClassRoom ID로 조회
export function getClassRoomByClassRoomId(user) {
   return fetch(`http://localhost:8080/api/classRoom/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 ClassRoom 삭제
export function deleteClassRoomByClassRoomId(user) {
   return fetch(`http://localhost:8080/api/classRoom/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 ClassRoom의 진도율과 최근 시청기록을 업데이트
export function updateClassRoom(user) {
   return fetch(`http://localhost:8080/api/classRoom/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// LectureHistory에서 선택한 강의를 ClassRoom에 다시 추가
export function addLectureToClassRoom(user) {
   return fetch(`http://localhost:8080/api/classRoom/add/{lectureHistoryId}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 교수(현재 로그인한 사람)가 강의하는 과목의 카테고리별로 학생들의 진도율을 조회하는 기능
export function getStudentProgressByProfessor(user) {
   return fetch(`http://localhost:8080/api/progress/students`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 특정 강의를 수강 중인 사람들의 수를 조회
export function getParticipantCountByLectureName(lectureName){
   return fetch(`http://localhost:8080/api/lecture/counts/lectureName/${lectureName}`,{
      method:"GET",
      "headers":{
         "Content-Type":"application/json",
      },
   }).then((response) => response.json());
}

// 유/무료 강의 전체에서 카테고리별 + 강의명별 로 각 강의를 듣는 사용자의 수가 얼마나 되는지
export function getLectureSummary(){
return fetch(`http://localhost:8080/api/lectureSummary`,{
      method:"GET",
      "headers":{
         "Content-Type":"application/json",
      },
   }).then((response) => response.json());
}

//유료 강의 전체에서 카테고리별 + 강의명별 결제가 얼마나 되었는지
export function getLectureSummaryByPaid() {
   return fetch(`http://localhost:8080/api/lectureSummary/paid`,{
         method:"GET",
         "headers":{
            "Content-Type":"application/json",
         },
         }).then((response) => response.json());
}

// 무료 강의 전체에서 카테고리별 + 강의명별 각 강의를 듣는 사용자의 수가 얼마나 되는지
export function getLectureSummaryByFree(){
   return fetch(`http://localhost:8080/api/lectureSummary/free`,{
      method:"GET",
      "headers":{
         "Content-Type":"application/json",
      },
   }).then((response) => response.json());
}

// 강의자료(MaterialController) API

// 전체 강의 자료 불러오기(관리자용)
export function getAllMaterial(){
   return fetch(`http://localhost:8080/api/material/all`,{
      method:"GET",
      headers:{
         "Content-Type":"application/json",
      },
   }).then((response)=> response.json());
}

// MaterialID로 특정 강의자료 불러오기
export function getMaterialById(id) {
   return fetch(`http://localhost:8080/api/material/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
   }).then((response) => response.json());
}

// 강의 자료 임시 업로드
export function reservationMaterial(user) {
   return fetch(`http://localhost:8080/api/material`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의자료 업로드(작성자인 교수와 관리자만 가능, isReservation을 false로 바꿔 정식 업로드)
export function uploadMaterial(user) {
   return fetch(`http://localhost:8080/api/material/upload/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의 자료 수정(작성자인 교수와 관리자만 가능, 임시저장으로 업데이트)
export function updateMaterial(user) {
   return fetch(`http://localhost:8080/api/material/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의 자료 삭제(작성자인 교수와 관리자만 가능)
export function deleteMaterial(user) {
   return fetch(`http://localhost:8080/api/material/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}


// 메시지(MessageBinController) API

// message 보내기
export function sendMessage(user) {
   return fetch(`http://localhost:8080/api/message`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 메세지 수신(ReceivedMessageController) API
export function getReceivedMessages(user) {
   return fetch(`http://localhost:8080/api/receivedMessage/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getReceivedMessageById(user) {
   return fetch(`http://localhost:8080/api/receivedMessage/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteAllReceivedMessages(user) {
   return fetch(`http://localhost:8080/api/receivedMessage/delete/all`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function deleteReceivedMessageByReceivedMessageId(user) {
   return fetch(`http://localhost:8080/api/receivedMessage/delete/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}


// 수신 메시지 휴지통(ReceivedMessageBinController) API

// 현재 로그인한 유저의 ReceivedMessageBin 목록 조회
export function getReceivedMessageBins(user) {
   return fetch(`http://localhost:8080/api/receivedMessageBin/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 특정 ReceivedMessageBin ID로 ReceivedMessageBin 조회
export function getReceivedMessageBinByReceivedMessageBinId(user) {
   return fetch(
      `http://localhost:8080/api/receivedMessageBin/{receivedMessageBinId}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 현재 로그인한 유저의 ReceivedMessageBin 전체 복구
export function restoreAllReceivedMessageBins(user) {
   return fetch(`http://localhost:8080/api/receivedMessageBin/restore/all`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 ReceivedMessageBin ID로 특정 ReceivedMessageBin 복구
export function restoreReceivedMessageBinByReceivedMessageBinId(user) {
   return fetch(
      `http://localhost:8080/api/receivedMessageBin/restore/{receivedMessageBinId}`,
      {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 현재 로그인한 유저의 ReceivedMessageBin 전체 삭제
export function deleteAllReceivedMessageBins(user) {
   return fetch(`http://localhost:8080//api/receivedMessageBin/delete/all`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 ReceivedMessageBin ID로 특정 ReceivedMessageBin 삭제
export function deleteReceivedMessageBinByReceivedMessageBinId(user) {
   return fetch(
      `http://localhost:8080/api/receivedMessageBin/delete/{receivedMessageBinId}`,
      {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 일정기간(30일)이 지난 ReceivedMessage를 조회하여 삭제
export function deleteReceivedMessageBinOlderThan30Days(user) {
   return fetch(
      `http://localhost:8080/api/receivedMessageBin/delete/oldReceivedMessage`,
      {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 발신함(SentMessageController) API

// 현재 로그인한 유저가 보낸 쪽지 목록 조회
export function getSentMessages(user) {
   return fetch(`http://localhost:8080/api/sentMessage/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저가 보낸 특정 쪽지 ID로 쪽지 조회
export function getSentMessageById(user) {
   return fetch(`http://localhost:8080/api/sentMessage/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저가 보낸 모든 쪽지 삭제
export function deleteAllSentMessages(user) {
   return fetch(`http://localhost:8080/api/sentMessage/delete/all`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 로그인한 유저가 보낸 특정 쪽지 삭제
export function deleteSentMessageBySentMessageId(user) {
   return fetch(`http://localhost:8080/api/sentMessage/delete/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 발신함 휴지통(SentMessageBinController) API

// 현재 로그인한 유저의 SentMessageBin 목록 조회
export function getSentMessageBins(){
   return fetch(`http://localhost:8080/api/sentMessageBin/list`, {
      method:"GET",
      headers:{
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 특정 SentMessageBin ID로 SentMessageBin 조회
export function getSentMessageBinBySentMessageBinId(){
   return fetch(`http://localhost:8080/api/sentMessageBin/{sentMessageBinId}`, {
      method:"GET",
      headers:{
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}

// 현재 로그인한 유저의 SentMessageBin 전체 복구
export function restoreAllSentMessageBins(){
   return fetch(`http://localhost:8080/api/sentMessageBin/restore/all`,{
      method:"PUT",
      headers:{
         "Content-Type": "application/json"
      },
      body: JSON.stringify(),
   }).then((response) => response.json);
}

// 현재 로그인한 유저의 SentMessageBin 전체 삭제
export function deleteAllSentMessageBins(){
   return fetch(`http://localhost:8080/api/sentMessageBin/delete/all`,{
      method:"DELETE",
      headers:{

         "Content-Type" : "application/json"
      },
      body: JSON.stringify(),
   }).then((response)=>response.json);
}

// 현재 로그인한 유저의 SentMessageBin ID로 특정 SentMessageBin 삭제
export function deleteSentMessageBinBySentMessageBinId(){
   return fetch (`http://localhost:8080/api/sentMessageBin/delete/all`, {
      method:"DELETE",
      headers:{
         "Content-Type" : "application/json"
      },
      body:JSON.stringify(),
   }).then((response) => response.json());
}

// 일정기간(30일)이 지난 SentMessage를 조회하여 삭제
export function deleteSentMessageBinOlderThan30Days(){
   return fetch (`http://localhost:8080/api/sentMessageBin/delete/all`,{
      method:"DELETE",
      headers:{
         "Content-Type" : "application/json"
      },
      body:JSON.stringify(),
   }).then((response) => response.json());
}

// QandA(QandAController) API

// 모든 유저의 Q&A
export function getAllQandA(user) {
   return fetch(`http://localhost:8080/api/qanda/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 각 강의의 수강생 Q&A 목록 불러오기
export function getAllQandAByLecture(user) {
   return fetch(`http://localhost:8080/api/qanda/lectureName/{lectureName}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 현재 사용자의 Q&A 목록 불러오기
export function getAllQandAByUser(user) {
   return fetch(`http://localhost:8080/api/myqanda`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// QandA ID를 이용하여 특정 QandA 불러오기
export function getQandAById(user) {
   return fetch(`http://localhost:8080/api/qanda/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function createQandA(user) {
   return fetch(`http://localhost:8080/api/qanda`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// Q&A 등록
export function updateQandA(user) {
   return fetch(`http://localhost:8080/api/qanda/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// Q&A 수정
export function deleteQandA(user) {
   return fetch(`http://localhost:8080/api/qanda/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// QnA 답변(ReplyController) API

// 모든 Reply 불러오기
export function getAllReply(user) {
   return fetch(`http://localhost:8080/api/sentMessageBin/{sentMessageBinId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// QandA별 Reply( Q&A 답변 ) 불러오기
export function getAllReplyByQandA(user) {
   return fetch(`http://localhost:8080/api/reply/{qandaId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// Reply( Q&A 답변 ) 작성
export function createReply(user) {
   return fetch(`http://localhost:8080/api/reply/{qandaId}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// Reply( Q&A 답변 ) 삭제
export function deleteReply(user) {
   return fetch(`http://localhost:8080/api/reply/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}