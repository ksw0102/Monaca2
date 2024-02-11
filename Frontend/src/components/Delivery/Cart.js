import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { useNavigate } from "react-router-dom";

// const Print = styled.div`
//    border: 5px solid gray;
//    width: 50vw;
//    margin: 10px auto;
//    height: 3vh;
//    border-radius: 30px;
//    position: absolute;
//    left: 25%;
//    z-index: 1; /* Increase z-index to ensure it's above other elements */
// `;
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
const Card = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: 7.5rem;
   margin: 20px auto;
`;
const Img = styled.img`
   width: 200px;
   height: 150px;
   border: 1px solid black;
   border-radius: 10px;
   box-shadow: 3px 3px 3px gray;
   object-fit: cover;
`;

const Inner = styled.div`
   width: 35%;
`;
const Text = styled.p`
   font-size: 1.3rem;
`;
const DeleteBtn = styled.button`
   margin: 5px;
   padding: 3px;
   font-size: 1rem;
   letter-spacing: 1.5px;
   border: 2px solid black;
   background-color: white;
   &:hover {
      cursor: pointer;
   }
   &:active {
      background-color: #a8b63e;
   }
`;
const Cover = styled.div`
   border-top: 2px dashed gray;
   border-bottom: 2px dashed gray;
   padding: 10px;
   margin-top: 30px;
   margin-left: 10px;
   margin-right: 10px;
`;

const Cost = styled.div`
   margin: 1rem;
   color: black;
`;

const Button = styled.button`
   margin: 5px;
   padding: 10px;
   letter-spacing: 1.5px;
   font-size: 1rem;
   border: 2px solid black;
   background-color: white;
   &:hover {
      cursor: pointer;
   }
   &:active {
      background-color: #a8b63e;
   }
`;
export function Cart() {
   // 체크된 항목 가져오기
   const { checkList, setCheckList, foods } = useContext(DeliveryContext);
   const [totalPrice, setTotalPrice] = useState(0); // 가격
   const [newList, setNewList] = useState([]); // 상태관리
   const navigate = useNavigate(); // 이동

   function onClick(e) {
      const temp = checkList.map((item) => {
         if (item.id === +e.target.id) {
            return { ...item, checked: false };
         } else {
            return item;
         }
      });
      setCheckList(temp);
   }

   function onClickBtn() {
      const temp = checkList.map((item) => {
         return { ...item, checked: false };
      });
      setCheckList(temp);
      navigate("/purchase", { state: { newList } });
   }
   useEffect(() => {
      setNewList(foods.filter((f, i) => checkList[i].checked));
   }, [checkList, foods]);

   useEffect(() => {
      let price = 0;
      for (let i = 0; i < newList.length; i++) {
         price = price + newList[i].price;
      }
      setTotalPrice(price);
   }, [newList]);

   return (
      <>
         <Recipt>
            {/* <Print></Print> */}
            <Container>
               <Logo>
                  <h1>저기요</h1>{" "}
               </Logo>
               <span>내 주문내역 확인</span>
               <Cover>
                  {newList.map((food) => (
                     <Card key={food.id}>
                        <Img src={food.image} />
                        <Inner>
                           <div>
                              <Text>메뉴명: {food.title}</Text>
                              <Text>카테고리 : {food.category}</Text>
                              <DeleteBtn id={food.id} onClick={onClick}>
                                 삭제하기
                              </DeleteBtn>
                           </div>
                        </Inner>
                        <Text>{food.price}&nbsp;₩</Text>
                     </Card>
                  ))}
               </Cover>
               <Cost>
                  <h2>총 결제금액은 &nbsp;{totalPrice}원 입니다.</h2>
               </Cost>
               <Button onClick={onClickBtn}>결제하기</Button>
            </Container>
         </Recipt>
      </>
   );
}
