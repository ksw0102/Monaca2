import styled from "styled-components";
import kiosk1 from "../image/Thumbnail/Kiosk1Th.jpg";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Thumb = styled.div`
   width: 100%;
   height: 100%;
   background-image: url(${kiosk1});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Play = styled.div`
   width: 10%;
   height: 20%;
`;

const Button = styled.div`
   width: 100%;
   height: 100%;
   border-radius: 50%;
   background-color: #6666;
   display: flex;
   align-items: center;
   justify-content: center;
   &:hover {
      cursor: pointer;
   }
`;

const Triangle = styled.div`
   border-bottom: 30px solid transparent;
   border-top: 30px solid transparent;
   border-left: 60px solid white;
   border-right: 1px solid transparent;
`;

export function WatchTheLecture() {
   const navigate = useNavigate();

   const navigateToClassRoom = () => {
      navigate("/stud-class-room");
   };

   return (
      <>
         <Box>
            <Thumb>
               <Play>
                  <Button onClick={navigateToClassRoom}>
                     <Triangle />
                  </Button>
               </Play>
            </Thumb>
         </Box>
      </>
   );
}
