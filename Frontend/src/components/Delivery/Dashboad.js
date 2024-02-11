import { useContext, useEffect } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { useQuery } from "react-query";
import { getAllPurchasedDelivers } from "./api";
import styled from "styled-components";

const Recipt = styled.div`
   width: 100vw;
   padding-top: 40px;
   padding-bottom: 40px;
   position: relative;
`;
const Container = styled.div`
   border-radius: 5px;
   background-color: #e9e6d7;
   border: 0;
   height: 90vh;
   width: 40%;
   margin: 10px auto;
   padding: 5px;
   align-items: center;
   justify-content: center;
   text-align: center;
   box-shadow: 3px 3px 10px 4px gray;
   overflow: hidden;
   & span {
      color: black;
      font-weight: bold;
      font-size: 1.5rem;
   }
`;
const Logo = styled.div`
   color: black;
   font-weight: bolder;
   border-bottom: 2px dashed gray;
   padding: 10px;
   margin: 10px;
   margin-bottom: 30px;
`;

const Cover = styled.div`
   border-top: 2px dashed gray;
   border-bottom: 2px dashed gray;
   padding: 10px;
   margin-top: 30px;
   margin-left: 10px;
   margin-right: 10px;
   & p {
      font-size: 1.5rem;
      padding: 5px;
   }
`;
export function Dashboard() {
   const { loginState } = useContext(DeliveryContext);
   const { data, isLoading } = useQuery(
      "getAllPurchase",
      getAllPurchasedDelivers,
      {
         retry: 0,
      }
   );
   console.log("dashboard", data);

   return (
      <>
         {/* 포스트맨으로 직접 올리기 (각 id) */}
         {/* 이 방법으로 하면, cart에서 체크해서 받아오는게 안된다. */}
         <Recipt>
            <Container>
               <Logo>
                  <h1>저기요</h1>{" "}
               </Logo>
               <span>
                  <h3>{loginState?.id}의 장바구니</h3>
               </span>
               <Cover>
                  {!isLoading && Array.isArray(data) && data.length > 0 ? (
                     data
                        .filter((d) => d.loginId === loginState.id)
                        .map((d, i) => (
                           <p key={i}>
                              메뉴명 : {d.food.title}, 수량 : {d.quantity}
                           </p>
                        ))
                  ) : (
                     <p>데이터가 없습니다</p>
                  )}
               </Cover>
            </Container>
         </Recipt>
      </>
   );
}
