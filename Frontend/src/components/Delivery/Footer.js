import styled from "styled-components";

const StyledFooter = styled.div`
   width: 100vw;
   height: 15vh;
   background-color: beige;
   align-items: center;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Logo = styled.div`
   text-align: center;
   font-size: 2rem;
   & h2 {
      color: gray;
   }
`;

const Info1 = styled.div`
   font-size: 1rem;
   color: gray;
`;
const Info2 = styled.div`
   font-size: 1rem;
   color: gray;
`;
const Info3 = styled.div`
   background-repeat: no-repeat;
   background-image: url(https://imagestorage97.files.wordpress.com/2023/11/logo.png?w=240);
   background-position: 60px 40px;
   text-decoration: none;
   width: 100%;
   height: 100%;
`;
const Bar = styled.span`
   color: darkgray;
`;
export function Footer() {
   return (
      <>
         <StyledFooter>
            <Logo>
               <h2>저기요</h2>
            </Logo>
            <Info1>
               <h3>주식회사 DW ACADEMY</h3>
               <br />
               <h3>
                  대전광역시 중구 중앙로121번길 20 <Bar>|</Bar> 대표이사 :
                  정한길
               </h3>
            </Info1>
            <Info2>
               <h3>사이트 개발자</h3>
               <br />
               <h3>
                  조장 : 김선욱 <Bar>|</Bar> 부조장 : 김예은
               </h3>
            </Info2>
            <Info3></Info3>
         </StyledFooter>
      </>
   );
}
