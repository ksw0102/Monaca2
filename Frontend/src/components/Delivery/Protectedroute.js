import { useContext } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
   const { loginState } = useContext(DeliveryContext);

   if (loginState?.id) {
      return children;
   } else {
      console.log("로그인이 필요합니다");
      return <Navigate to="/login" />;
   }
}
