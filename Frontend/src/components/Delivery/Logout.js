import { useContext, useEffect } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { useNavigate } from "react-router-dom";

export function Logout() {
   const { setLoginState } = useContext(DeliveryContext);
   const navigate = useNavigate();

   useEffect(() => {
      localStorage.setItem("loginState", JSON.stringify({ id: null }));
      setLoginState({ id: null });
      navigate("/");
   }, []);

   return <></>;
}
