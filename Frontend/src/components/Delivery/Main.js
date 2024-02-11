import styled from "styled-components";
import { Products } from "./Products";
import { useContext, useEffect, useState } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { useQuery } from "react-query";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { login } from "./api";

const StyledNavLink = styled(NavLink)`
   width: 8vw;
   padding: 2px;
   text-align: center;
   font-size: 1.3rem;
   border: 2px solid black;
   background-color: white;
   text-decoration-line: none;
   color: black;
   border: 2px solid #c5e17a;
   &:focus {
      outline: 2px solid #65793c;
   }
`;

// 로그인 상태
const StyledBackground = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;
   &::before {
      content: "";

      width: 100%;
      height: 100%;
      background-image: url(https://cdn.pixabay.com/photo/2017/10/22/21/02/food-2879265_1280.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.7; /* Adjust the transparency for the background */
      z-index: -1; /* Ensure it's positioned behind other content */
   }
`;

const StyledForm = styled.form`
   text-align: center;
   align-items: center;
   justify-content: center;
   width: 50%;
   height: 30vh;
   padding-top: 1rem;
`;

const LgButton = styled.button`
   width: 150px;
   font-size: 1.5rem;
   background-color: white;
   letter-spacing: 3px;
   margin-top: 1rem;
   text-align: center;
   border: 2px solid #c5e17a;
   &:active {
      outline: 2px solid #65793c;
   }
`;

const Container2 = styled.div``;

const Non = styled.div`
   width: 50vw;
   border-radius: 20px;
   box-shadow: 3px 3px 3px gray;
   margin: 20px auto;
   background-color: white;
   border: 6px solid #a8b63e;
`;

const Info = styled.div`
   display: flex;
`;

const Welcome = styled.div`
   display: flex;
   gap: 1rem;
   margin: 0 auto;
   width: 50%;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 30vh;
   & h1 {
      color: #a8b63e;
      text-shadow: 4px 2px 2px #c5e17a;
   }
`;

const Move = styled.div`
   width: 50%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #a8b63e;
`;

const PdWrapper = styled.div`
   height: 85vh;
`;

// 로그아웃 상태
const Container = styled.div``;

const Section1 = styled.div`
   width: 50vw;
   border-radius: 20px;
   box-shadow: 3px 3px 3px gray;
   margin: 20px auto;
   background-color: white;
   border: 6px solid #a8b63e;
`;

const Section2 = styled.div`
   height: 100vh;
`;

const Login = styled.div`
   display: flex;
`;

const SignIn = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin: 0 auto;
   padding-bottom: 1rem;
   width: 50%;
   align-items: center;
   text-align: center;
`;

const Id = styled.input`
   width: 17vw;
   padding: 10px;
   text-align: center;
   font-size: 1rem;
   border: 2px solid #c5e17a;
   &:focus {
      outline: 2px solid #65793c;
   }
`;

const PassWord = styled.input`
   width: 17vw;
   padding: 10px;
   text-align: center;
   font-size: 1rem;
   border: 2px solid #c5e17a;
   &:focus {
      outline: 2px solid #65793c;
   }
`;

const Button = styled.button`
   width: 8vw;
   padding: 2px;
   text-align: center;
   font-size: 1.3rem;
   color: black;
   background-color: white;
   border: 2px solid #c5e17a;
   &:active {
      outline: 2px solid #65793c;
   }
`;

const Logo = styled.div`
   margin: 0 auto;
   width: 20vw;
   text-align: center;
   font-size: 2rem;
   & h2 {
      color: #a8b63e;
      text-shadow: 4px 2px 2px #c5e17a;
      padding-bottom: 8px;
   }
`;

const Sub = styled.div`
   display: flex;
   gap: 1rem;
   margin: 0 auto;
   justify-content: center;
`;

const Section3 = styled.div`
   width: 50%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #a8b63e;
`;

const Btn = styled.button`
   width: 35%;
   height: 15%;
   margin: 10px 0;
   font-size: 20px;
   background-color: white;
   border: 4px solid #c5e17a;
   &:hover {
      cursor: pointer;
   }
   &:active {
      background-color: #a1bf73;
   }
`;

export function Main() {
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [userLogin, setUserLogin] = useState(null);
   const [loggingIn, setLoggingIn] = useState(false);
   const { loginState, setLoginState } = useContext(DeliveryContext);
   const navigate = useNavigate();

   const navigateToLogout = () => {
      navigate("/logout");
   };

   const navigateToCart = () => {
      navigate("/cart");
   };

   const navigateToPurchase = () => {
      navigate("/purchase");
   };

   const { data, isLoading, refetch } = useQuery(
      "login",
      () => {
         if (userLogin) {
            setLoggingIn(true);
            return login(userLogin);
         }
      },
      { retry: 0 }
   );

   const [clickedButton1, setClickedButton1] = useState(false);
   const [clickedButton2, setClickedButton2] = useState(false);
   const [clickedButton3, setClickedButton3] = useState(false);

   const handleClickedButton1 = () => {
      if (!clickedButton1) {
         alert("로그인을 먼저 해주세요!");
         setClickedButton1(true);
      }
   };
   const handleClickedButton2 = () => {
      if (!clickedButton2) {
         alert("로그인을 먼저 해주세요!");
         setClickedButton2(true);
      }
   };

   const handleClickedButton3 = () => {
      if (!clickedButton3) {
         alert("회원가입을 먼저 해주세요!");
         alert("회원가입 화면으로 이동합니다.");
      }
   };

   useEffect(() => {
      if (data && data.resultCode === "SUCCESS" && userLogin) {
         console.log(data);
         localStorage.setItem(
            "loginState",
            JSON.stringify({ id: userLogin.loginId })
         );
         setLoginState({ id: userLogin.loginId });
         setTimeout(() => {
            navigate("/");
            setLoggingIn(false);
         }, 1000);
      } else if (data && data.resultCode === "ERROR") {
         console.log(data);
         navigate("/register");
      }
   }, [data]);

   useEffect(
      () => {
         refetch();
      },
      [userLogin],
      [data]
   );

   function onSubmit(e) {
      e.preventDefault();
      console.log("등록");
      const user = {
         loginId: loginId,
         password: password,
      };
      setUserLogin(user);
   }
   return (
      <>
         <StyledBackground>
            {loggingIn ? (
               <h1>로그인중..</h1>
            ) : loginState?.id ? (
               <>
                  {/* 로그인 상태 */}
                  <Container2>
                     <Non>
                        <Info>
                           <Welcome>
                              <h1>
                                 환영합니다. <br />
                                 로그인 유저 : {loginState.id} 님.
                                 <br />
                                 <LgButton onClick={navigateToLogout}>
                                    로그아웃
                                 </LgButton>
                              </h1>
                           </Welcome>
                           <Move>
                              <Btn onClick={navigateToCart}>마이페이지</Btn>
                              <Btn onClick={navigateToPurchase}>
                                 {" "}
                                 내 주문 현황
                              </Btn>
                           </Move>
                        </Info>
                     </Non>
                     <Section2>
                        <Products />
                     </Section2>
                  </Container2>
               </>
            ) : (
               <>
                  {/* 로그아웃 상태 */}
                  <Container>
                     <Section1>
                        <Login>
                           <StyledForm onSubmit={onSubmit}>
                              <Logo>
                                 <h2>저기요</h2>
                              </Logo>
                              <SignIn>
                                 <Id
                                    input
                                    id="loginId"
                                    value={loginId}
                                    onChange={(e) => setLoginId(e.target.value)}
                                    placeholder="아이디 입력(필수)"
                                 />
                                 <PassWord
                                    input
                                    id="password"
                                    value={password}
                                    type="password"
                                    onChange={(e) =>
                                       setPassword(e.target.value)
                                    }
                                    placeholder="비밀번호 입력(필수)"
                                 />
                              </SignIn>
                              <Sub>
                                 <Button onClick={handleClickedButton3}>
                                    로그인
                                 </Button>
                                 <StyledNavLink to="/register">
                                    가입하기
                                 </StyledNavLink>
                                 {/* 이건 useLocation? */}
                              </Sub>
                           </StyledForm>
                           <Section3>
                              <Btn onClick={handleClickedButton1}>
                                 마이페이지
                              </Btn>
                              <Btn onClick={handleClickedButton2}>
                                 {" "}
                                 내 주문 현황
                              </Btn>
                           </Section3>
                        </Login>
                     </Section1>
                     <Section2>
                        <Products />
                     </Section2>
                  </Container>
                  <Outlet />
               </>
            )}
         </StyledBackground>
      </>
   );
}
