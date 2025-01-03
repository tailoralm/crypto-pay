-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: criptopay
-- ------------------------------------------------------
-- Server version	9.1.0

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
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `config` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `database_version` decimal(5,2) DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `userId` int unsigned DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `group` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `log_userid_foreign` (`userId`),
  CONSTRAINT `log_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment_intention`
--

DROP TABLE IF EXISTS `payment_intention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_intention` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `walletId` int unsigned DEFAULT NULL,
  `value` decimal(16,2) NOT NULL,
  `status` varchar(255) DEFAULT 'PENDING',
  `description` varchar(255) NOT NULL,
  `endDate` timestamp NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `payment_intention_walletid_foreign` (`walletId`),
  CONSTRAINT `payment_intention_walletid_foreign` FOREIGN KEY (`walletId`) REFERENCES `wallet` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment_on_chain`
--

DROP TABLE IF EXISTS `payment_on_chain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_on_chain` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `walletId` int unsigned DEFAULT NULL,
  `value` decimal(16,8) NOT NULL,
  `transactionHash` varchar(255) DEFAULT NULL,
  `fromWalletHash` varchar(255) DEFAULT NULL,
  `toWalletHash` varchar(255) DEFAULT NULL,
  `chain` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `payment_on_chain_walletid_foreign` (`walletId`),
  CONSTRAINT `payment_on_chain_walletid_foreign` FOREIGN KEY (`walletId`) REFERENCES `wallet` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `userId` int unsigned DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `subCategory` varchar(50) DEFAULT NULL,
  `value` decimal(7,2) DEFAULT NULL,
  `stock` int DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_userid_foreign` (`userId`),
  CONSTRAINT `product_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `wallet` varchar(255) DEFAULT NULL,
  `privateKey` varchar(255) DEFAULT NULL,
  `secretKey` varchar(255) DEFAULT NULL,
  `active` int DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `userId` int unsigned DEFAULT NULL,
  `walletHash` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `chain` varchar(50) DEFAULT NULL,
  `chainHash` varchar(255) DEFAULT NULL,
  `observe` int DEFAULT '1',
  `value` decimal(16,8) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `wallet_userid_foreign` (`userId`),
  CONSTRAINT `wallet_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-03 20:09:45
