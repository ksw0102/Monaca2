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
-- Table structure for table `teaching_lectures`
--

DROP TABLE IF EXISTS `teaching_lectures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teaching_lectures` (
  `user` bigint NOT NULL,
  `lecture` bigint NOT NULL,
  PRIMARY KEY (`user`,`lecture`),
  KEY `FKrwahcqgca26w7r79u5b5nkr84` (`lecture`),
  CONSTRAINT `FKje9unp61r42btpnditc52x9ha` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKrwahcqgca26w7r79u5b5nkr84` FOREIGN KEY (`lecture`) REFERENCES `lecture` (`lecture_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teaching_lectures`
--

LOCK TABLES `teaching_lectures` WRITE;
/*!40000 ALTER TABLE `teaching_lectures` DISABLE KEYS */;
INSERT INTO `teaching_lectures` VALUES (9,1),(10,2),(10,3),(9,4),(11,5),(12,6),(13,7),(13,8),(12,9),(13,9),(12,10),(13,11),(14,11),(12,12),(15,12),(12,13),(14,13),(14,14),(12,15),(15,15),(14,16),(16,16),(14,17),(15,18),(16,18),(14,19),(17,19),(15,20),(16,20),(14,21),(16,21),(17,21),(14,22),(17,22),(15,23),(16,23),(17,24),(12,52);
/*!40000 ALTER TABLE `teaching_lectures` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-08 19:59:19
