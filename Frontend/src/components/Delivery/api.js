export function getAllDeliverys() {
   return fetch(`http://localhost:8082/products`, {
      method: "GET",
   }).then((response) => response.json());
}

export function getDeliveryById(id) {
   return fetch(`http://localhost:8082/products/${id}`, {
      method: "GET",
   }).then((response) => response.json());
}

export function getAllFoods() {
   return fetch(`http://localhost:8082/foods`, {
      method: "GET",
   }).then((response) => response.json());
}

export function getFoodsById(id) {
   return fetch(`http://localhost:8082/foods/${id}`, {
      method: "GET",
   }).then((response) => response.json());
}

export function purchaseDelivers(foods, loginId) {
   const purchases = foods.map((food) => ({
      food: food,
      quantity: 1, // 원하는 구매 수량을 여기에 설정
      loginId: loginId,
   }));
   return fetch(`http://localhost:8082/products/dvpurchaselist`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(purchases),
   }).then((response) => response.json());
}

export function getAllPurchasedDelivers() {
   return fetch(`http://localhost:8082/products/dvpurchase`, {
      method: "GET",
   }).then((response) => response.json());
}

export function signUp(user) {
   return fetch(`http://localhost:8083/api/member/signup`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function login(user) {
   console.log(user);
   return fetch(`http://localhost:8083/api/member/login`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
