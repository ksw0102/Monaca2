import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { purchaseDelivers } from "./api";
import { DeliveryContext } from "./DeliveryShop";
import styled from "styled-components";

const Container = styled.div`
   height: 74.5vh;
   margin: 20px auto;
   text-align: center;
   & h1 {
      font-weight: bold;
   }
`;
export function Purchase() {
   const navigate = useNavigate();
   const location = useLocation();
   const { loginState, setLoginState } = useContext(DeliveryContext);
   const purchasedDelivers = location.state?.newList;

   useEffect(() => {
      const delay = 3000;
      if (purchasedDelivers && purchasedDelivers.length > 0) {
         purchaseDelivers(purchasedDelivers, loginState.id);

         setTimeout(() => {
            navigate("/dashboard");
            // dashboard로 넘어가기 잠깐 제외
         }, delay);
         // 아무것도 안들어가있으면 백을 시킨다
      } else {
         setTimeout(() => {
            navigate("/home");
         }, delay);
      }
   }, []);

   return (
      <Container>
         <h1>
            장바구니로 이동 중... <br />
            (장바구니가 비어있으면 메인으로 이동합니다.)
         </h1>
      </Container>
   );
}
