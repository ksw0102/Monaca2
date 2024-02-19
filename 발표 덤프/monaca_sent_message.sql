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
-- Table structure for table `sent_message`
--

DROP TABLE IF EXISTS `sent_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sent_message` (
  `sent_message_id` bigint NOT NULL AUTO_INCREMENT,
  `create_at` datetime(6) DEFAULT NULL,
  `is_hide` bit(1) DEFAULT NULL,
  `text` varchar(150) DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `message_id` bigint DEFAULT NULL,
  `receiver_user_id` bigint DEFAULT NULL,
  `sender_user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`sent_message_id`),
  UNIQUE KEY `UK_1g734qb8k2qxk5h2hv8tymuh` (`message_id`),
  KEY `FKfjvp85edk9lohor723d4bvu9l` (`receiver_user_id`),
  KEY `FK3jic86q7jht37l8emw0hxnocq` (`sender_user_id`),
  CONSTRAINT `FK3jic86q7jht37l8emw0hxnocq` FOREIGN KEY (`sender_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKfjvp85edk9lohor723d4bvu9l` FOREIGN KEY (`receiver_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKl586lqtn48b2nxqisunfhfl8` FOREIGN KEY (`message_id`) REFERENCES `message` (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sent_message`
--

LOCK TABLES `sent_message` WRITE;
/*!40000 ALTER TABLE `sent_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `sent_message` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-13 12:18:15
