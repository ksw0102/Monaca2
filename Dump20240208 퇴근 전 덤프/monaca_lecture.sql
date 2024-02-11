-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: monaca
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lecture`
--

DROP TABLE IF EXISTS `lecture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lecture` (
  `lecture_id` bigint NOT NULL AUTO_INCREMENT,
  `create_at` datetime(6) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `lecture_description` varchar(500) DEFAULT NULL,
  `lecture_name` varchar(50) DEFAULT NULL,
  `lecture_play_time` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `author_user_id` bigint DEFAULT NULL,
  `lecture_category_lecture_category_id` bigint DEFAULT NULL,
  `professor_user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`lecture_id`),
  UNIQUE KEY `UK_hogrg1fr6ld1n8iver5o1956d` (`lecture_name`),
  KEY `FKjamyj6uy42jlj7cads7bvfbuw` (`author_user_id`),
  KEY `FK1ybu7nyhy9g8qyhts2ttgnqr7` (`lecture_category_lecture_category_id`),
  KEY `FKlc0eyomptgyhvmd59ghe5fj1p` (`professor_user_id`),
  CONSTRAINT `FK1ybu7nyhy9g8qyhts2ttgnqr7` FOREIGN KEY (`lecture_category_lecture_category_id`) REFERENCES `lecture_category` (`lecture_category_id`),
  CONSTRAINT `FKjamyj6uy42jlj7cads7bvfbuw` FOREIGN KEY (`author_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKlc0eyomptgyhvmd59ghe5fj1p` FOREIGN KEY (`professor_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecture`
--

LOCK TABLES `lecture` WRITE;
/*!40000 ALTER TABLE `lecture` DISABLE KEYS */;
INSERT INTO `lecture` VALUES (1,'2024-02-08 12:17:15.040606','https://i.ibb.co/Fhhs8Ts/Kiosk1.jpg','키오스크 전반적 이해와 구성','키오스크 초급 1-1',6000,0,'https://i.ibb.co/jWxNBGg/1.jpg',18,1,9),(2,'2024-02-08 12:17:33.560289','https://i.ibb.co/8N5xsyh/Kiosk3.jpg','초보자를 위한 쉬운 사용법','키오스크 초급 1-2',6000,0,'https://i.ibb.co/WKnQrmp/2.jpg',18,1,10),(3,'2024-02-08 12:17:39.361290','https://i.ibb.co/zstXGT6/Kiosk2.jpg','키오스크를 활용한 시간절약','스마트한 대기',6000,30000,'https://i.ibb.co/gFF7C5d/3.jpg',18,1,10),(4,'2024-02-08 12:17:46.553753','https://i.ibb.co/zhGqKBJ/Kiosk4.jpg','쉽고 빠른 디지털 자동화','키오스크 마스터',6000,40000,'https://i.ibb.co/8cHDg25/4.jpg',18,1,9),(5,'2024-02-08 12:17:50.452323','https://i.ibb.co/9hpwLpV/ATM1.jpg','은행원보다 ATM을 더 자주 봐요.','ATM 사용방법',6000,50000,'https://i.ibb.co/T05FH6L/5.jpg',18,1,11),(6,'2024-02-08 12:17:54.875501','https://i.ibb.co/vjMHtbV/Web1.jpg','두통유발 인터넷은 이제 안녕','웹생활의 즐거움',6000,10000,'https://i.ibb.co/6XFMLMF/1.jpg',18,2,12),(7,'2024-02-08 12:18:01.723298','https://i.ibb.co/hM78881/Web2.jpg','웹사이트 활용의 비밀','인터넷 생활 해킹',6000,20000,'https://i.ibb.co/QMV2p9g/2.jpg',18,2,13),(8,'2024-02-08 12:18:07.901098','https://i.ibb.co/KWyrY4R/Web3.jpg','효과적으로 빠르게 요령 익히기','웹사이트 전문가 되기',6000,30000,'https://i.ibb.co/8MRKh1v/3.jpg',18,2,13),(9,'2024-02-08 12:18:14.438280','https://i.ibb.co/jMmNJtZ/Web4.jpg','웹사이트 세계로의 안내','디지털 네비게이터',6000,40000,'https://i.ibb.co/42K8MgL/4.jpg',18,2,12),(10,'2024-02-08 12:18:20.334419','https://i.ibb.co/RQ9T6xh/Web5.jpg','웹사이트 실전 활용법','웹기초부터 고급까지',6000,0,'https://i.ibb.co/S7JBvwN/5.jpg',18,2,12),(11,'2024-02-08 12:18:25.277289','https://i.ibb.co/KLcrZC4/Mobile1.jpg','삶의 질을 향상 시켜주는 강의','편리한 모바일 라이프',6000,0,'https://i.ibb.co/Rz3YFsW/1.jpg ',18,3,14),(12,'2024-02-08 12:18:28.725313','https://i.ibb.co/S3kg9W8/Mobile2.jpg','초보자들의 모바일 기초사용법','모바일 업그레이드',6000,20000,'https://i.ibb.co/DkfkcgQ/2.jpg',18,3,15),(13,'2024-02-08 12:18:32.491440','https://i.ibb.co/x1y754P/Mobile3.jpg','마법처럼 쉬워지는 스마트폰','스마트폰 마법사',6000,30000,'https://i.ibb.co/GkZD9Mn/3.jpg',18,3,14),(14,'2024-02-08 12:18:36.348266','https://i.ibb.co/RQ9T6xh/Web5.jpg','더 나은 사용법으로 일으킨 혁명','모바일 생활 혁명',6000,40000,'https://i.ibb.co/HNmcYym/4.jpg',18,3,14),(15,'2024-02-08 12:18:40.767253','https://i.ibb.co/FKwkM6w/Mobile5.jpg','함께 경험을 그려나가 봐요','스마트폰 경험 디자인',6000,50000,'https://i.ibb.co/L6SQqkq/5.jpg',18,3,15),(16,'2024-02-08 12:18:48.495274','https://i.ibb.co/Wv5hR6q/Wel1.jpg','시민 민원과 소통','복지체계 이해하기',6000,10000,'https://i.ibb.co/hRBKBmR/1.jpg',18,4,16),(18,'2024-02-08 12:19:31.668458','https://i.ibb.co/ss2PHkG/Wel2.jpg','권리 스스로 챙기기','건강한 사회 만들기',6000,20000,'https://i.ibb.co/kDfkcCw/2.jpg',18,4,16),(19,'2024-02-08 12:19:35.909266','https://i.ibb.co/NjZQbj7/Wel3.jpg','국가 복지 민원절차','시민참여의 시작',6000,0,'https://i.ibb.co/r6Rg9r3/3.jpg',18,4,17),(20,'2024-02-08 12:19:39.812059','https://i.ibb.co/f1Y13zc/Wel4.jpg','웹사이트로 민원 기초','집에서 민원 넣기',6000,40000,'https://i.ibb.co/bWfTVxp/4.jpg',18,4,16),(21,'2024-02-08 12:19:43.155270','https://i.ibb.co/fXjndsw/Wel5.jpg','지혜롭게 생활하기','시민중심의 민원',6000,50000,'https://i.ibb.co/Hxjc4D3/5.jpg',18,4,17);
/*!40000 ALTER TABLE `lecture` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-08 19:59:22
