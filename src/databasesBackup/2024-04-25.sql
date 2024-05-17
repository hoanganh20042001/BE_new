-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `note` varchar(200) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Rolex','string','2024-04-18 08:57:44.055658','2024-04-18 08:57:44.055658'),(2,'Jacob','string','2024-04-18 08:58:21.639121','2024-04-18 08:58:21.639121'),(3,'Hublot','string','2024-04-18 08:58:40.229726','2024-04-18 08:58:40.229726'),(4,'Patek','string','2024-04-18 08:59:01.612931','2024-04-18 08:59:01.612931'),(6,'Seiko','string','2024-04-22 07:13:42.774356','2024-04-22 07:13:42.774356'),(7,'Casio','string','2024-04-22 07:13:56.440828','2024-04-22 07:13:56.440828'),(8,'Citizen','string','2024-04-22 07:14:05.048492','2024-04-22 07:14:05.048492'),(9,'Fossil','string','2024-04-22 07:14:13.739845','2024-04-22 07:14:13.739845');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Cơ - automatic',NULL,'2024-04-19 09:15:42.212433','2024-04-19 09:15:42.212433'),(2,'Điện tử',NULL,'2024-04-19 09:15:52.676866','2024-04-19 09:15:52.676866'),(3,'Treo tường',NULL,'2024-04-19 09:16:02.799728','2024-04-19 09:16:02.799728'),(4,'Năng lượng mặt trời',NULL,'2024-04-19 09:16:12.331172','2024-04-22 07:11:00.000000');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `value` int DEFAULT NULL,
  `isActive` int DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `example`
--

DROP TABLE IF EXISTS `example`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `example` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `example`
--

LOCK TABLES `example` WRITE;
/*!40000 ALTER TABLE `example` DISABLE KEYS */;
/*!40000 ALTER TABLE `example` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like` (
  `newsId` int NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`newsId`,`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
/*!40000 ALTER TABLE `like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1659198278798,'CreateAccountTable1659198278798'),(2,1702550012312,'createUserTable1702550012312'),(3,1702550175241,'createUserTokenTable1702550175241'),(4,1702550247693,'createRoleTable1702550247693'),(5,1707966792425,'createNewsTable1707966792425'),(6,1707966830833,'createCommentTable1707966830833'),(7,1707967579803,'createCategoryTable1707967579803'),(8,1707980423442,'createCartTable1707980423442'),(9,1707980602281,'createPayTable1707980602281'),(10,1707981861621,'createOrderTable1707981861621'),(11,1707982389953,'createDiscountTable1707982389953'),(12,1707985171604,'createProductsTable1707985171604'),(13,1708055017645,'addTypeInProduct1708055017645'),(14,1708587955973,'insertProduct1708587955973'),(15,1708588574068,'createCategoryTable1708588574068'),(16,1708590082081,'createBrandTable1708590082081'),(17,1708612065472,'updateProduct1708612065472'),(18,1708614266116,'updateBrandId1708614266116'),(19,1708875114511,'updateOrder1708875114511'),(20,1708914524119,'createLikeTable1708914524119'),(21,1708915582503,'createAddressTable1708915582503'),(22,1708935865416,'updatePay1708935865416'),(23,1708936880648,'insertDiscountedPrice1708936880648'),(24,1708958741629,'insertUserIdInPay1708958741629'),(25,1708997719878,'updateImage1708997719878'),(26,1709212835463,'insertCodeInUser1709212835463');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `newDate` date DEFAULT NULL,
  `view` int DEFAULT '0',
  `liked` int DEFAULT '0',
  `userId` int DEFAULT NULL,
  `content` text,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `payId` int DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,10,3,1,3,'2024-04-23 17:09:17.872642','2024-04-23 17:16:31.000000',NULL),(2,11,3,1,3,'2024-04-23 17:09:27.711248','2024-04-23 17:16:31.000000',NULL),(3,20,1,1,NULL,'2024-04-24 01:52:05.018877','2024-04-24 01:52:05.018877',NULL),(4,23,1,1,NULL,'2024-04-24 01:52:12.852144','2024-04-24 01:52:12.852144',NULL),(5,25,1,1,NULL,'2024-04-24 06:22:43.344470','2024-04-24 06:22:43.344470',NULL),(6,NULL,NULL,NULL,NULL,'2024-04-24 08:28:08.475945','2024-04-24 08:28:08.475945',NULL),(7,NULL,NULL,NULL,NULL,'2024-04-24 08:30:10.107371','2024-04-24 08:30:10.107371',NULL),(8,NULL,NULL,NULL,NULL,'2024-04-24 08:31:10.246206','2024-04-24 08:31:10.246206',NULL),(9,NULL,NULL,NULL,NULL,'2024-04-24 08:31:11.053652','2024-04-24 08:31:11.053652',NULL),(10,NULL,NULL,NULL,NULL,'2024-04-24 08:31:12.798115','2024-04-24 08:31:12.798115',NULL),(11,NULL,NULL,NULL,NULL,'2024-04-24 08:31:13.778101','2024-04-24 08:31:13.778101',NULL),(12,NULL,NULL,NULL,NULL,'2024-04-24 08:31:14.745838','2024-04-24 08:31:14.745838',NULL),(13,NULL,NULL,NULL,NULL,'2024-04-24 08:31:15.739337','2024-04-24 08:31:15.739337',NULL),(14,NULL,NULL,NULL,NULL,'2024-04-24 08:34:17.264510','2024-04-24 08:34:17.264510',NULL),(15,NULL,NULL,NULL,NULL,'2024-04-24 09:36:36.716250','2024-04-24 09:36:36.716250',NULL),(16,NULL,NULL,NULL,NULL,'2024-04-24 09:36:38.773618','2024-04-24 09:36:38.773618',NULL),(17,NULL,NULL,NULL,NULL,'2024-04-24 09:36:41.426938','2024-04-24 09:36:41.426938',NULL),(18,NULL,NULL,NULL,NULL,'2024-04-24 09:36:42.857907','2024-04-24 09:36:42.857907',NULL),(19,NULL,NULL,NULL,NULL,'2024-04-24 09:36:48.180283','2024-04-24 09:36:48.180283',NULL),(20,NULL,NULL,NULL,NULL,'2024-04-24 09:36:50.961533','2024-04-24 09:36:50.961533',NULL),(21,23,1,1,NULL,'2024-04-24 09:43:47.818117','2024-04-24 09:43:47.818117',NULL),(22,NULL,NULL,NULL,NULL,'2024-04-24 09:45:00.307339','2024-04-24 09:45:00.307339',NULL),(23,19,1,1,NULL,'2024-04-24 09:48:48.741174','2024-04-24 09:48:48.741174',NULL),(24,29,1,1,NULL,'2024-04-24 09:49:06.369134','2024-04-24 09:49:06.369134',NULL),(25,19,1,1,NULL,'2024-04-24 09:51:38.947966','2024-04-24 09:51:38.947966',NULL),(26,29,1,1,NULL,'2024-04-24 09:53:33.499068','2024-04-24 09:53:33.499068',NULL),(27,29,1,1,NULL,'2024-04-24 09:54:47.543188','2024-04-24 09:54:47.543188',NULL),(28,31,1,1,NULL,'2024-04-24 09:54:58.264650','2024-04-24 09:54:58.264650',NULL),(29,23,1,1,NULL,'2024-04-24 09:55:08.803384','2024-04-24 09:55:08.803384',NULL),(30,23,1,1,NULL,'2024-04-24 09:55:11.899016','2024-04-24 09:55:11.899016',NULL),(31,23,1,1,NULL,'2024-04-24 09:55:12.371272','2024-04-24 09:55:12.371272',NULL),(32,23,1,1,NULL,'2024-04-24 09:55:13.053237','2024-04-24 09:55:13.053237',NULL),(33,23,1,1,NULL,'2024-04-24 09:55:13.279360','2024-04-24 09:55:13.279360',NULL),(34,23,1,1,NULL,'2024-04-24 09:55:13.486121','2024-04-24 09:55:13.486121',NULL),(35,23,1,1,NULL,'2024-04-24 09:55:13.714015','2024-04-24 09:55:13.714015',NULL),(36,23,1,1,NULL,'2024-04-24 09:55:13.926737','2024-04-24 09:55:13.926737',NULL),(37,23,1,1,NULL,'2024-04-24 09:55:14.128023','2024-04-24 09:55:14.128023',NULL),(38,23,1,1,NULL,'2024-04-24 09:55:14.358606','2024-04-24 09:55:14.358606',NULL),(39,23,1,1,NULL,'2024-04-24 09:55:14.591397','2024-04-24 09:55:14.591397',NULL),(40,23,1,1,NULL,'2024-04-24 09:55:14.800607','2024-04-24 09:55:14.800607',NULL);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay`
--

DROP TABLE IF EXISTS `pay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pay` (
  `id` int NOT NULL AUTO_INCREMENT,
  `accountNumber` varchar(200) DEFAULT NULL,
  `bankName` varchar(200) DEFAULT NULL,
  `status` varchar(200) DEFAULT NULL,
  `cost` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `discountId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay`
--

LOCK TABLES `pay` WRITE;
/*!40000 ALTER TABLE `pay` DISABLE KEYS */;
INSERT INTO `pay` VALUES (3,'string','string','string',NULL,'2024-04-23','2024-04-23 17:16:30.968337','2024-04-23 17:16:30.968337',0,3);
/*!40000 ALTER TABLE `pay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `image` text,
  `discount` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `categoryId` varchar(200) DEFAULT NULL,
  `description` text,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `status` varchar(200) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `typeId` int DEFAULT NULL,
  `sold` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `brandId` int DEFAULT NULL,
  `discountedPrice` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (19,'Rolex DateJust','http://localhost:9001/product/dong-ho-rolex-datejust-31-278381-mat-so-bac-nam-kim-cuong.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240419%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240419T031523Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=214cf90c8eafbd20690b60114d1c5bfad4824d95963ff28003fe49ac80824589',10,120000000,'1','Chiếc Rolex Datejust 31 278381RBR Mặt Số Bạc Nạm Kim Cương cùng là một thiết kế nằm trong dòng sản phẩm mũi nhọn này, sở hữu vẻ bề ngoài cực kỳ tinh tế và phù hợp với chị em phụ nữ. Đầu tiên, ta cần phải nhắc tới vành bezel được đính kim cương lộng lẫy, có giá trị rất cao và khiến cho chiếc đồng hồ thật sự lấp lánh khi đặt dưới ánh đèn.','2024-04-19 03:15:23.065238','2024-04-19 03:15:23.000000',NULL,100,1,NULL,NULL,1,108000000),(21,'Rolex Datejust 36 126234 ','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240419%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240419T064109Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a7a1502197fa31da1f0345cf59d960c78fda4b8383739ce79e0e71321f932597',10,120000000,'1','Giới thiệu đồng hồ Rolex Datejust 36 126234 Mặt Số Xanh Lá Cây Cọc Số Dạ Quang','2024-04-19 06:41:09.742041','2024-04-19 06:41:09.000000',NULL,1,1,NULL,NULL,1,108000000),(22,'Đồng hồ Rolex Lady-Datejust 28 Chocolate 279171','http://localhost:9001/product/Dong-ho-Rolex-Lady-Datejust-28-Chocolate-279171.jpg.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240419%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240419T064336Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7f6a11a516bad7a692415bf1f4bbdcb474c66fed337ba16d561a680a3327e043',10,320000000,'1','Đồng hồ Rolex Lady-Datejust 28 Chocolate hiện đã có sẵn trên gian hàng của Sneaker Daily. Cơ hội hiếm có để sở hữu món đồ cao cấp này dành cho các quý ông.','2024-04-19 06:43:36.524892','2024-04-19 06:43:36.000000',NULL,1,1,NULL,NULL,1,288000000),(23,'Co Astronomia Solar Baguette','http://localhost:9001/product/timthumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T074852Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fe4b0ab4f5e7e12fd0c1e122639f42277f160176555964396799e9ee01276fc1',10,1500000000,'1','Chuyển động thẳng đứng với 3 cánh tay, Xoay hoàn toàn trong 10 phút quanh Trục trung tâm; Lồng Tourbillon bay trong 60 giây; Sơn mài vàng hồng và xanh lam; Quả cầu quay trong 60 giây; Mặt số giờ và phút, Hệ thống bánh răng vi sai được cấp bằng sáng chế℗ cho phép giữ vị trí 12/6 giờ; Jacob cut® Sapphire màu vàng (288 mặt; ≈ 1,5ct) ở phía trên bộ chuyển động. Khung mang 3 viên đá Jacob cut®: Thạch anh tím, Topaz và Peridot.  ','2024-04-22 07:48:52.494070','2024-04-22 07:48:52.000000',NULL,10,1,NULL,NULL,2,1350000000),(27,'wqdefg','http://localhost:9001/product/Dong-ho-Rolex-Lady-Datejust-28-Chocolate-279171.jpg.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T083540Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c39f6838174086cc6e31bbbcf01a571a2cd0678ca55a2490fac4fef3111e0f40',0,0,'0','','2024-04-22 08:35:40.747423','2024-04-22 08:35:40.000000',NULL,0,0,NULL,NULL,2,0),(29,'sdc','http://localhost:9001/product/timthumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T083704Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f40dfc0f1faa4e602ee87c6e0b791a79a9720360ce03bd3fe728a776004a2988',0,0,'0','','2024-04-22 08:37:04.207216','2024-04-22 08:37:04.000000',NULL,0,0,NULL,NULL,0,0),(30,'sdcv b','http://localhost:9001/product/Dong-ho-Rolex-Lady-Datejust-28-Chocolate-279171.jpg.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T091855Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4cc26e20bd16da2ec75e38637ef295fbe0517bd3d00bc6e9993b98583197970b',0,0,'0','','2024-04-22 09:18:55.538249','2024-04-22 09:18:55.000000',NULL,0,0,NULL,NULL,0,0),(31,'sdcv b','http://localhost:9001/product/Dong-ho-Rolex-Lady-Datejust-28-Chocolate-279171.jpg.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T092504Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0a26ba3f3fef6cd581e0bf3b1f39c71ecb0ac58392ac67fdd9f450a0f97194f4',0,0,'0','','2024-04-22 09:25:04.906571','2024-04-22 09:25:04.000000',NULL,0,0,NULL,NULL,0,0),(32,'dsxc ','http://localhost:9001/product/160dit-2.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T092611Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5f0a55755d954c1a71bbeb95c40a503a5839cc0eee6db866ce6f3340d04ce1f0',0,0,'0','','2024-04-22 09:26:11.142022','2024-04-22 09:26:11.000000',NULL,0,0,NULL,NULL,0,0),(33,'asdfvbg','http://localhost:9001/product/160dit-2.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T231836Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=af30069b7f601c2a07d4fb76763ac76f5012252af144bf749b6a8f7cfa873b51',0,0,'0','','2024-04-22 23:18:36.280563','2024-04-22 23:18:36.000000',NULL,0,0,NULL,NULL,0,0),(34,'dcv','http://localhost:9001/product/timthumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T170233Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0ea36e892d876efcff95aa259f492421e1373db637080c4ed174867d350cea96',0,0,'0','','2024-04-22 17:02:33.438031','2024-04-22 17:02:33.000000',NULL,0,0,NULL,NULL,0,0),(35,'dcv','http://localhost:9001/product/timthumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T170241Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f41829314be6f62ae4d32ea3aa2d3584ced573fd962ce13ab80496d5eeadbd95',0,0,'0','','2024-04-22 17:02:41.946616','2024-04-22 17:02:41.000000',NULL,0,0,NULL,NULL,0,0),(36,'asxdcvbgn','http://localhost:9001/product/Dong-ho-Rolex-Lady-Datejust-28-Chocolate-279171.jpg.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T171358Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ac4b9603c24727f26af4c08635243f97fd7132bb8e2d421babb42e382ad6dc47',0,0,'0','','2024-04-22 17:13:58.214839','2024-04-22 17:13:58.000000',NULL,0,0,NULL,NULL,0,0),(37,'dcds','http://localhost:9001/product/timthumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T171515Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9fb4c754eb6da27a07f6e1e32db0ed0a040793a84afa41a04de5047044acfd8e',0,0,'0','','2024-04-22 17:15:15.694169','2024-04-22 17:15:15.000000',NULL,0,0,NULL,NULL,0,0),(40,'dc ','http://localhost:9001/product/timthumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T172647Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=07810221b6e42595edaec2047561840493f12ef78bd7140fe18b7faaec744918',0,0,'0','','2024-04-22 17:26:47.753340','2024-04-22 17:26:47.000000',NULL,0,0,NULL,NULL,0,0),(42,'sdxc','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240422%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240422T172720Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d61937859ede22aa87c10ade6ff5651a6c9513461ebd04382a2d19c45c47d458',0,0,'0','','2024-04-22 17:27:20.683533','2024-04-22 17:27:20.000000',NULL,0,0,NULL,NULL,0,0),(43,'sdc','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T081020Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8f66e8f5a212fe50e05091ea210440a758de738ed00f9801f9a6f7a89e28c7a9',0,0,'0','','2024-04-23 08:10:20.457457','2024-04-23 08:10:20.000000',NULL,0,0,NULL,NULL,0,0),(44,'qsdxc','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T081703Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=370cafbc0fd4998744d99e6c2c31817c0299b25c554ff096845fc3d1c19eecfb',0,0,'0','','2024-04-23 08:17:03.320947','2024-04-23 08:17:03.000000',NULL,0,0,NULL,NULL,0,0),(45,'asdfg','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T081938Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e18eb6a4dad2922c415f3cf18bc280551735f114a3285f1ed233ca1caeaf24fe',0,0,'0','','2024-04-23 08:19:38.830619','2024-04-23 08:19:38.000000',NULL,0,0,NULL,NULL,0,0),(46,'vfdsf','http://localhost:9001/product/timthumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T082024Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=df1a3645f60fbd277129fb25a4983abd1f10c47a7bb20e044339f6eb0de9e77b',0,0,'0','','2024-04-23 08:20:24.914011','2024-04-23 08:20:24.000000',NULL,0,0,NULL,NULL,0,0),(47,'123','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T082224Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=84579897e7970a1818dada379497586d672bb9488e217fb7cbf555df9bab4606',0,0,'0','','2024-04-23 08:22:24.593091','2024-04-23 08:22:24.000000',NULL,0,0,NULL,NULL,0,0),(48,'dxc','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T082352Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d8563ab9088e5b9a3195c197858e385b038d9360eb8ff2ae0600f17ab133e002',0,0,'0','','2024-04-23 08:23:52.356889','2024-04-23 08:23:52.000000',NULL,0,0,NULL,NULL,0,0),(49,'xc','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T082652Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=834f70b761ea10e82784013006d17efbc2640afbc77b0bbb6b946e3a06b0d701',0,0,'0','','2024-04-23 08:26:52.858039','2024-04-23 08:26:52.000000',NULL,0,0,NULL,NULL,0,0),(50,'df','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T082754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2ad4528a1d38f852c406187effaaa3a76b75da3d2d6f7f16d86fc9abfb8aefad',0,0,'0','','2024-04-23 08:27:54.481194','2024-04-23 08:27:54.000000',NULL,0,0,NULL,NULL,0,0),(51,'sdc','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-coc-so-kim-cuong.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T083013Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7a53b7ae9002e6c3132d8256134e98bfe6c8323cf2692facb9adcc696d03aedd',0,0,'0','','2024-04-23 08:30:13.521048','2024-04-23 08:30:13.000000',NULL,0,0,NULL,NULL,0,0),(52,'sdcv','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T083041Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b60253b61c5df34aba115ee32880bd01725f75cdafee6738f1d4771f7e82185b',0,0,'0','','2024-04-23 08:30:41.185457','2024-04-23 08:30:41.000000',NULL,0,0,NULL,NULL,0,0),(53,'sdcv','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T083056Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a73b13eb631e98006136d88f8a92e6e11215859b42880f32b45bdd2b3a2f8eb2',0,0,'0','','2024-04-23 08:30:56.489384','2024-04-23 08:30:56.000000',NULL,0,0,NULL,NULL,0,0),(54,'sdxc','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-coc-so-kim-cuong.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T083126Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2f6f011df3ecc4272f58b5ab2376415a2c3df75fc8fc849305d0c7e854665223',0,0,'0','','2024-04-23 08:31:26.954979','2024-04-23 08:31:26.000000',NULL,0,0,NULL,NULL,0,0),(55,'sxdc','http://localhost:9001/product/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T083201Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7d159e443377fd7a7df5e9dfa71b1f9b9ff3ff4b1ac3246ba784fb462a23a609',0,0,'0','','2024-04-23 08:32:01.348278','2024-04-23 08:32:01.000000',NULL,0,0,NULL,NULL,0,0),(56,'sx','http://localhost:9001/product/160dit-2.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your_access_key%2F20240423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240423T083216Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a287354bd529d067c1cf01da43a8c8640ac642073a160898f2fbfda205efdf09',0,0,'0','','2024-04-23 08:32:16.492080','2024-04-23 08:32:16.000000',NULL,0,0,NULL,NULL,0,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(200) DEFAULT NULL,
  `conDate` date DEFAULT NULL,
  `value` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `isActive` int DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Admin',NULL,'admin','2024-04-18 05:10:03.632111','2024-04-18 05:10:03.632111'),(2,'Client',NULL,'client','2024-04-18 05:10:19.314210','2024-04-18 05:10:19.314210');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'Đồng hồ nam',NULL,'2024-04-22 07:20:54.775922','2024-04-22 07:20:54.775922'),(2,'Đồng hồ nữ',NULL,'2024-04-22 07:21:07.126862','2024-04-22 07:21:07.126862'),(3,'Đồng hồ trẻ em',NULL,'2024-04-22 07:21:16.047812','2024-04-22 07:21:16.047812');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `identity` varchar(200) DEFAULT NULL,
  `userName` varchar(200) DEFAULT NULL,
  `roleId` int DEFAULT NULL,
  `passWord` varchar(200) DEFAULT NULL,
  `fullName` varchar(200) DEFAULT NULL,
  `phoneNumber` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `addressId` int DEFAULT NULL,
  `isActive` int DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `code` varchar(200) DEFAULT NULL,
  `forgetPassCode` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,NULL,2,'$2b$12$i0M4TkU0Z71VD.RMTYp7LejIqyJNG8belUSCa4TgRJq9ZTg/.yeNy','HoangAnh','0386494859','nguyenvanhoanganh20042001@gmail.com',NULL,0,'2024-04-18 05:15:12.745021','2024-04-18 05:15:12.745021','Whs78W',NULL),(2,NULL,NULL,1,'$2b$12$JfglaFdn5w/jD1.o7PuxZ.zcltJbIVmSyN2gth12qH0LYH.DCBGna','anh','0386494859','anh@gmail.com',NULL,0,'2024-04-19 08:10:39.436885','2024-04-19 08:10:39.436885','Elmamn',NULL),(3,NULL,NULL,2,'$2b$12$M4m/1LG3Sovg1UnimNu0EeLPUVpaMJicYMrS59NHQvumE5tZcO6Fu','anh','0386494859','anhh@gmail.com',NULL,0,'2024-04-23 17:07:27.708716','2024-04-23 17:07:27.708716','FZiRWk',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userToken`
--

DROP TABLE IF EXISTS `userToken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userToken` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` text,
  `expired` varchar(500) DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `deviceInfo` varchar(200) DEFAULT NULL,
  `isActive` int DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userToken`
--

LOCK TABLES `userToken` WRITE;
/*!40000 ALTER TABLE `userToken` DISABLE KEYS */;
INSERT INTO `userToken` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzNTEyMjIwLCJleHAiOjE3MTM1OTg2MjB9.KWZRA8AQRfjZRJuvsLWCL5yrBjZoWwJKudhC--vx-JA','5313512220996',1,NULL,1,'2024-04-19 07:37:01.011771','2024-04-19 07:37:01.011771'),(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzNTEzNzc0LCJleHAiOjE3MTM2MDAxNzR9.0NBC3j-iOk6RjchKIBrmbbuX9L83sNP_eqdL9PXl5mQ','5313513774462',1,NULL,1,'2024-04-19 08:02:54.482232','2024-04-19 08:02:54.482232'),(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzNTE0MDI0LCJleHAiOjE3MTM2MDA0MjR9.2jZqHvGpllSyKMc9XOjoepUJqYwe6CIBjPjZ2xW2QX4','5313514024833',1,NULL,1,'2024-04-19 08:07:04.839891','2024-04-19 08:07:04.839891'),(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE0Mzk1LCJleHAiOjE3MTM2MDA3OTV9.k9cDDJhRNxloiZ37qLu_8jOb8n28uH_FqOWQuOtDIlk','5313514395534',2,NULL,1,'2024-04-19 08:13:15.550588','2024-04-19 08:13:15.550588'),(5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE0NDIxLCJleHAiOjE3MTM2MDA4MjF9.hZE190lpncJoCyYHIAfM6k3QGk7NiG3hY3N48tBxVlE','5313514421996',2,NULL,1,'2024-04-19 08:13:42.003630','2024-04-19 08:13:42.003630'),(6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE0NDY4LCJleHAiOjE3MTM2MDA4Njh9.sn18bOv3X5lH70khpbJQqHg8DXt-5f5m2svwcCW5H8k','5313514468999',2,NULL,1,'2024-04-19 08:14:29.004436','2024-04-19 08:14:29.004436'),(7,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE4MDUwLCJleHAiOjE3MTM2MDQ0NTB9._s9AYXbOQlhK5ITswf22UbOfh0egs3q8XYIe-g38GPo','5313518050813',2,NULL,1,'2024-04-19 09:14:10.820604','2024-04-19 09:14:10.820604'),(8,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE5MzI2LCJleHAiOjE3MTM2MDU3MjZ9.6TNFNIhbVmkD7qXLOgZyQ-WF8pG4YEZVzHKyuMrHMnw','5313519326601',2,NULL,1,'2024-04-19 09:35:26.615805','2024-04-19 09:35:26.615805'),(9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNzY5MjM2LCJleHAiOjE3MTM4NTU2MzZ9.zYGPsGwI-5XcxDpkztuUO_UzNyOgBJHBI23pNqZzNdI','5313769236051',2,NULL,1,'2024-04-22 07:00:36.066446','2024-04-22 07:00:36.066446'),(10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNzY5ODA1LCJleHAiOjE3MTM4NTYyMDV9.9rMy9xYyMs4LOpS-t-AuDYhBFVJtlli-xrn3qXuyOy4','5313769805131',2,NULL,1,'2024-04-22 07:10:05.145125','2024-04-22 07:10:05.145125'),(11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNzc2MTI1LCJleHAiOjE3MTM4NjI1MjV9.pQ9jO8vzBH8yfQjNduzqlFdTQOlYGqRE9JVVIE3hHtQ','5313776125673',2,NULL,1,'2024-04-22 08:55:25.692170','2024-04-22 08:55:25.692170'),(12,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODI3NDg1LCJleHAiOjE3MTM5MTM4ODV9.otntmu3UwRswSC4KsfchNDzqcYI7kmjBYXH_ZjNY5kA','5313827485167',2,NULL,1,'2024-04-22 23:11:25.183531','2024-04-22 23:11:25.183531'),(13,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODUwNzEwLCJleHAiOjE3MTM5MzcxMTB9.flKdj9lCAtoFT2ToqBxsMT0m2mMpLAGOo-VOpGuQ7cI','5313850710991',2,NULL,1,'2024-04-23 05:38:31.006186','2024-04-23 05:38:31.006186'),(14,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODYyNDc2LCJleHAiOjE3MTM5NDg4NzZ9.iL8JfZWLFzbk0p7tD21Xq2pCtQz2ZniP3Vdf_8dnHdE','5313862476557',2,NULL,1,'2024-04-23 08:54:36.576524','2024-04-23 08:54:36.576524'),(15,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODYyNzk2LCJleHAiOjE3MTM5NDkxOTZ9.UH9FsvcX2uV4RrUMGqtJqzn_jYSJ0AsimH4ujMPbXpc','5313862796107',2,NULL,1,'2024-04-23 08:59:56.120305','2024-04-23 08:59:56.120305'),(16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODYyOTYyLCJleHAiOjE3MTM5NDkzNjJ9.vA7hWGmd4IfL-BX-maUgVAJLctiby_rPdkPkEJX8pvA','5313862962602',2,NULL,1,'2024-04-23 09:02:42.607633','2024-04-23 09:02:42.607633'),(17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODY0ODc2LCJleHAiOjE3MTM5NTEyNzZ9.klfEjKjuFr5wOPIREvTVQrjT2dUOT1oPut3sgvK-gvI','5313864876174',2,NULL,1,'2024-04-23 09:34:36.190297','2024-04-23 09:34:36.190297'),(18,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODY2ODcxLCJleHAiOjE3MTM5NTMyNzF9.VncQM55Hq5Rvw3VCxlRlN-Rf-V73WiWz7ZuJXhQUHlc','5313866871430',2,NULL,1,'2024-04-23 10:07:51.442792','2024-04-23 10:07:51.442792'),(19,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODY3MDUwLCJleHAiOjE3MTM5NTM0NTB9.ZUxDuW9_wPDL9o6e1ZdHnl4h-Ds71EO4Je713HFvoRQ','5313867050802',2,NULL,1,'2024-04-23 10:10:50.810374','2024-04-23 10:10:50.810374'),(20,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODY3MDYyLCJleHAiOjE3MTM5NTM0NjJ9.oBPna2JXQhaHQ4ubTyK0BBzDbvLN9j3lyIXaoGEVyfA','5313867062042',2,NULL,1,'2024-04-23 10:11:02.047373','2024-04-23 10:11:02.047373'),(21,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODkyMDk2LCJleHAiOjE3MTM5Nzg0OTZ9.geRrVXIOWPB6jTHc3h_7uUn7D_kuM58b9m18pmUaybY','5313892096830',2,NULL,1,'2024-04-23 17:08:16.839656','2024-04-23 17:08:16.839656'),(22,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODkyNDczLCJleHAiOjE3MTM5Nzg4NzN9.3lwt_zEYnRxM075ki0sDlJgwbscGeRbeZkwtGRbVSZU','5313892473251',2,NULL,1,'2024-04-23 17:14:33.270381','2024-04-23 17:14:33.270381'),(23,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzOTIyMzkxLCJleHAiOjE3MTQwMDg3OTF9.zGhY21-w0wAM5MpAsvSjxAfMVu7idEpsCLbi90_Kbxg','5313922391937',2,NULL,1,'2024-04-24 01:33:11.957731','2024-04-24 01:33:11.957731'),(24,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzOTIyNzg3LCJleHAiOjE3MTQwMDkxODd9.DsSaGTlkUN_L2SVmZV0sFnq9EEy4FsUd19ghKUZxWs0','5313922787642',2,NULL,1,'2024-04-24 01:39:47.648065','2024-04-24 01:39:47.648065'),(25,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTIzMzc2LCJleHAiOjE3MTQwMDk3NzZ9.ndlvhv3d9U4S-23zOlenDN8Oh0byleMNAwiNdzuLWbE','5313923376544',1,NULL,1,'2024-04-24 01:49:36.557040','2024-04-24 01:49:36.557040'),(26,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTI2Nzc3LCJleHAiOjE3MTQwMTMxNzd9.pgKLpArUa-_7Lg3JcLNR9yLwcOgtEcg83HktyIc3wiU','5313926777444',1,NULL,1,'2024-04-24 02:46:17.453073','2024-04-24 02:46:17.453073'),(27,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTI3NTk5LCJleHAiOjE3MTQwMTM5OTl9.hzfgiiQuPy8xcON57uJAxZVR9MYqLVKkarXO4JBS7zI','5313927599241',1,NULL,1,'2024-04-24 02:59:59.252031','2024-04-24 02:59:59.252031'),(28,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTM4NTA5LCJleHAiOjE3MTQwMjQ5MDl9.pbzbUjec_uqxPa3hHc9B0_UZZ9ujN7ymE4Pi-RIvy8A','5313938509179',1,NULL,1,'2024-04-24 06:01:49.196518','2024-04-24 06:01:49.196518'),(29,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzOTM5NzEyLCJleHAiOjE3MTQwMjYxMTJ9.7sc8SgCkdXasFQz8VoARTHssg9GafpXCr4KQ9wqdCrM','5313939712859',2,NULL,1,'2024-04-24 06:21:52.872365','2024-04-24 06:21:52.872365'),(30,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTQ5NzMzLCJleHAiOjE3MTQwMzYxMzN9.WyTkwfAdLR-3oCjoZ47-xCnE364QRbxXdBt-_dUz5vk','5313949733000',1,NULL,1,'2024-04-24 09:08:53.017459','2024-04-24 09:08:53.017459'),(31,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzOTQ5NzcyLCJleHAiOjE3MTQwMzYxNzJ9.7ZjVSgg9ZCaw6LYLMrC9iHt6LNt-bDszZeBCejHAAoU','5313949772686',2,NULL,1,'2024-04-24 09:09:32.695377','2024-04-24 09:09:32.695377');
/*!40000 ALTER TABLE `userToken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-24 17:00:00
