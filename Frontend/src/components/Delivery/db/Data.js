import chicken from "./chicken.jpg";
import krfood from "./krfood.jpg";
import snack from "./snack.jpg";
import pizza from "./pizza.jpg";
import chfoood from "./chfood.jpg";
import jpfood from "./jpfood.jpg";
import night from "./night.jpg";
import dessert from "./dessert.jpg";

const foods = [
   {
      id: 10001,
      title: "후라이드 치킨",
      price: 18000,
      category: "치킨",
      image: chicken,
      text: "바삭함, 고소함 가득! 정직하게 튀긴 후라이드 치킨의 정석",
   },
   {
      id: 10002,
      title: "김치찌개",
      price: 9000,
      category: "한식",
      image: krfood,
      text: "얼큰한 김치찌개",
   },
   {
      id: 10003,
      title: "떡볶이",
      price: 3500,
      category: "분식",
      image: snack,
      text: "신라면보다 약간 매운 떡볶이",
   },
   {
      id: 10004,
      title: "페페로니피자",
      price: 16900,
      category: "피자 / 양식",
      image: pizza,
      text: "짭쪼롬한 페페로니를 가득넣은 피자",
   },
   {
      id: 10005,
      title: "짜장면",
      price: 6000,
      category: "중식",
      image: chfoood,
      text: "자극적이지 않고 담백한 짜장면",
   },
   {
      id: 10006,
      title: "돈까스",
      price: 8000,
      category: "일식 / 돈까스",
      image: jpfood,
      text: "돈까스 + 밥 + 우동 + 샐러드 포함",
   },
   {
      id: 10007,
      title: "골뱅이 무침",
      price: 20000,
      category: "야식",
      image: night,
      text: "소면 포함 / 단품구성입니다.",
   },
   {
      id: 10008,
      title: "과일 와플",
      price: 5500,
      category: "카페 / 디저트",
      image: dessert,
      text: "딸기와 바닐라 아이스크림이 올라간 와플",
   },
];

export default foods;
