import { useContext } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const StyledBackground = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;
   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.7; /* Adjust the transparency for the background */
      z-index: -1; /* Ensure it's positioned behind other content */
   }
`;

const Container = styled.div`
   width: 50vw;
   display: flex;
   flex-direction: column;
   margin: 20px auto;
   text-align: center;
   align-items: center;
   padding: 1rem;
   & p {
      font-size: 2rem;
      padding: 10px;
   }
`;

const Img = styled.img`
   width: 50%;
   height: 50%;
   box-shadow: 5px 5px 5px 5px gray;
`;

const Content = styled.div`
   margin: 2.5rem;
   font-size: 0.8rem;
   border-radius: 10px;
   padding: 1rem;
   border: 3px solid #c5e17a;
   background-color: white;
   width: 45.5vw;
`;

const StyledNavLink = styled(NavLink)`
   font-size: 1.5rem;
   text-decoration: none;
   padding: 10px;
   margin-top: 15px;
   color: black;
   background-color: white;

   border: 2px solid #c5e17a;
   &:active {
      outline: 2px solid #65793c;
   }
`;

const Inner = styled.div`
   padding: 2rem;
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: center;
   text-align: center;
   gap: 3rem;
`;

const Input = styled.input`
   width: 30px;
   height: 30px;
   cursor: pointer;
   zoom: 1.3;
`;

const Ctinner = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export function SingleProduct() {
   const { foods, checkList, setCheckList } = useContext(DeliveryContext);
   const { id } = useParams();
   console.log("foods", foods);
   console.log(checkList);
   const food = foods.find((f) => f.id === +id);
   const { title, price, category, image, text } = food;

   function onChange(e) {
      const temp = checkList.map((item) => {
         if (item.id === +e.target.id) {
            return { ...item, checked: e.target.checked };
         } else {
            return item;
         }
      });
      setCheckList(temp);
   }
   return (
      <>
         <>
            <StyledBackground>
               <Container>
                  <h1>{title}</h1>
                  <Img src={image} />
                  <Content>
                     <p>메뉴명: {title}</p>
                     <p>카테고리 : {category}</p>
                     <p>가격 : {price}원</p>
                     <p>{text}</p>
                     <Ctinner>
                        <Input
                           type="checkbox"
                           id={food.id}
                           onChange={onChange}
                           checked={checkList.checked}
                        />
                        <p>마이페이지에 담기</p>
                     </Ctinner>
                     <Inner>
                        <StyledNavLink to="/home">
                           목록으로 돌아가기
                        </StyledNavLink>
                        <StyledNavLink to="/cart">마이페이지</StyledNavLink>
                     </Inner>
                  </Content>
               </Container>
            </StyledBackground>
         </>
      </>
   );
}
