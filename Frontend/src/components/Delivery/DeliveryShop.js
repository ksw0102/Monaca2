import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { createContext, useContext, useState } from "react";
import { getAllDeliverys, getAllFoods } from "./api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";
import { Products } from "./Products";
import { SingleProduct } from "./SingleProducts";
import { ProtectedRoute } from "./Protectedroute";
import { Dashboard } from "./Dashboad";
import { Footer } from "./Footer";
import { Register } from "./Register";
import { Error } from "./Error";
import { Logout } from "./Logout";
import { Login } from "./Login";
import { ProductWrapper } from "./ProductWrapper";
import { Cart } from "./Cart";
import { Purchase } from "./Purchase";

const client = new QueryClient();
export const DeliveryContext = createContext();

export function DeliveryShop() {
   const { data, isLoading } = useQuery("foods", getAllFoods);
   return (
      <>
         <QueryClientProvider client={client}>
            {!isLoading && data && (
               <DeliveryShopLoader
                  foods={data}
                  foodsCheckList={data.map((f) => {
                     return { id: f.id, checked: false };
                  })}
               />
            )}
         </QueryClientProvider>
      </>
   );
}

function DeliveryShopLoader({ foods, foodsCheckList }) {
   const [checkList, setCheckList] = useState(foodsCheckList);
   const [loginState, setLoginState] = useState(
      JSON.parse(localStorage.getItem("loginState"))
   );
   return (
      <DeliveryContext.Provider
         value={{
            checkList,
            setCheckList,
            loginState,
            setLoginState,
            foods,
         }}
      >
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Header />}>
                  <Route index element={<Main />} />
                  <Route path="home" element={<Main />} />
                  <Route path="products" element={<ProductWrapper />}>
                     <Route index element={<Main />} />
                     <Route path=":id" element={<SingleProduct />} />
                  </Route>
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                  <Route path="logout" element={<Logout />} />
                  <Route
                     path="dashboard"
                     element={
                        <ProtectedRoute>
                           <Dashboard />
                        </ProtectedRoute>
                     }
                  ></Route>
                  <Route path="purchase" element={<Purchase />} />
                  <Route path="cart" element={<Cart />} />
               </Route>
               <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </DeliveryContext.Provider>
   );
}
