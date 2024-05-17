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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'Trải nghiệm một chiếc Rolex',NULL,NULL,NULL,NULL,'Tại Rolex, chúng tôi rất tự hào về công việc của mình và tin chắc rằng không có gì tuyệt vời hơn việc lần đầu trải nghiệm những chi tiết tỉ mỉ, trọng lượng cân đối, sự thoải mái hay đơn giản là cảm nhận về một chiếc đồng hồ Rolex. Với kiến thức, những kỹ năng căn bản và bí quyết công nghệ, các Đại lý bán lẻ Chính thức của Rolex sẽ hướng dẫn bạn các mẫu sản phẩm hiện có và tư vấn về các khía cạnh kỹ thuật của sản phẩm một cách tốt nhất cũng như hỗ trợ bạn lựa chọn sản phẩm sẽ theo bạn suốt đời. Mỗi chiếc Rolex được phân phối trong một hộp trưng bày đẹp mắt vừa có chức năng bảo vệ vừa giữ chân kính vừa vặn bên trong. Chiếc hộp quà cũng rất quan trọng, khi bạn mua tặng ai đó, chiếc hộp trưng bày cũng mang đến thông điệp như một món quà, tương tác đầu tiên của người nhận với chiếc hộp cũng là cách để họ khám phá món quà nào đang nằm bên trong đó.','2024-04-27 07:02:14.285695','2024-04-27 07:02:14.000000','http://localhost:9001/products/buying-a-rolex-official-rolex-retailers-shoot-shop-geneva-retail-campaign-horloger-pub.avif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T070214Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=662b89b4432c79b2fe999faab34cfea78ead70650357c50d27d2d946d1d2e7e1'),(2,'Trải nghiệm một chiếc Rolex',NULL,NULL,NULL,NULL,'Tại Rolex, chúng tôi rất tự hào về công việc của mình và tin chắc rằng không có gì tuyệt vời hơn việc lần đầu trải nghiệm những chi tiết tỉ mỉ, trọng lượng cân đối, sự thoải mái hay đơn giản là cảm nhận về một chiếc đồng hồ Rolex. Với kiến thức, những kỹ năng căn bản và bí quyết công nghệ, các Đại lý bán lẻ Chính thức của Rolex sẽ hướng dẫn bạn các mẫu sản phẩm hiện có và tư vấn về các khía cạnh kỹ thuật của sản phẩm một cách tốt nhất cũng như hỗ trợ bạn lựa chọn sản phẩm sẽ theo bạn suốt đời. Mỗi chiếc Rolex được phân phối trong một hộp trưng bày đẹp mắt vừa có chức năng bảo vệ vừa giữ chân kính vừa vặn bên trong. Chiếc hộp quà cũng rất quan trọng, khi bạn mua tặng ai đó, chiếc hộp trưng bày cũng mang đến thông điệp như một món quà, tương tác đầu tiên của người nhận với chiếc hộp cũng là cách để họ khám phá món quà nào đang nằm bên trong đó.','2024-04-27 07:27:49.270458','2024-04-27 07:27:49.000000','http://localhost:9001/news/buying-a-rolex-official-rolex-retailers-shoot-shop-geneva-retail-campaign-horloger-pub.avif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T072749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f25618195c717064b372ef2c3e20dea270f999f48a8f9c8df7a0bbafbc69222f'),(3,'Sự kiện Seiko Việt Nam chính thức ra mắt ','2024-04-27',0,0,NULL,'Thương hiệu đồng hồ nổi tiếng của Nhật Bản - Seiko đã chính thức ra mắt thị trường Việt Nam tại sự kiện Seiko Vietnam Official Launch diễn ra vào ngày 8/12/2023. Sự kiện không chỉ giới thiệu sản phẩm mà còn thông tin về chiến lược phát triển và câu chuyện thương hiệu của Seiko tại Việt Nam. Hơn 70 khách mời đã tham dự sự kiện Seiko Vietnam Official Launch tại khách sạn Park Hyatt Saigon vào ngày 8 tháng 12 năm 2023, bao gồm các quý báo giới, nhà sưu tập, quý nhà bán lẻ và KOLs. Sự kiện cũng mang ý nghĩa quan trọng thể hiện sự đổi mới và sáng tạo của Seiko trong suốt 110 năm chế tác đồng hồ đeo tay. Các điểm nhấn chính của sự kiện bao gồm chia sẻ về tầm nhìn và cam kết của Seiko đối với thị trường Việt Nam, giới thiệu về câu chuyện thương hiệu cũng như các mẫu đồng hồ Seiko mới nhất. Sự kiện cũng tri ân các Nhà Bán Lẻ đã đóng góp vào sự phát triển của Seiko tại Việt Nam. Đây là một dịp quan trọng để Seiko thể hiện sự cảm kết và tôn trọng hướng đến các đối tác và khách hàng. Ông Akira Sakairi, Tổng giám đốc Seiko Thái Lan & Indochina, đã chia sẻ về định hướng phát triển của Seiko tại thị trường Việt Nam trong buổi ra mắt Văn Phòng Đại Diện Seiko Việt Nam. Tập đoàn Seiko đánh giá cao tiềm năng và tầm quan trọng của thị trường này, bởi Việt Nam là dự án điển hình để Seiko triển khai tại Myanma, Lào và Campuchia. Ông Akira Sakairi nhấn mạnh nỗ lực xây dựng nền tảng vững chãi cho thương hiệu Seiko thông qua việc tập trung vào chiến lược thương hiệu toàn cầu (Global Brand) và thực hiện các chiến dịch tiếp thị với sự hỗ trợ của đối tác chiến lược tại Việt Nam.','2024-04-27 08:20:56.311582','2024-04-27 08:20:56.000000','http://localhost:9001/news/z4998295076871_57cdd1f17ff4a7feb0a6fac9800f06fe.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T082056Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8a6049ae5fb13736e6ef8938c3076bed4fe745c59aed0d442c4408777847734d');
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
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (2,11,3,1,3,'2024-04-23 17:09:27.711248','2024-04-23 17:16:31.000000',NULL),(6,NULL,NULL,NULL,NULL,'2024-04-24 08:28:08.475945','2024-04-24 08:28:08.475945',NULL),(7,NULL,NULL,NULL,NULL,'2024-04-24 08:30:10.107371','2024-04-24 08:30:10.107371',NULL),(8,NULL,NULL,NULL,NULL,'2024-04-24 08:31:10.246206','2024-04-24 08:31:10.246206',NULL),(9,NULL,NULL,NULL,NULL,'2024-04-24 08:31:11.053652','2024-04-24 08:31:11.053652',NULL),(10,NULL,NULL,NULL,NULL,'2024-04-24 08:31:12.798115','2024-04-24 08:31:12.798115',NULL),(11,NULL,NULL,NULL,NULL,'2024-04-24 08:31:13.778101','2024-04-24 08:31:13.778101',NULL),(12,NULL,NULL,NULL,NULL,'2024-04-24 08:31:14.745838','2024-04-24 08:31:14.745838',NULL),(13,NULL,NULL,NULL,NULL,'2024-04-24 08:31:15.739337','2024-04-24 08:31:15.739337',NULL),(14,NULL,NULL,NULL,NULL,'2024-04-24 08:34:17.264510','2024-04-24 08:34:17.264510',NULL),(15,NULL,NULL,NULL,NULL,'2024-04-24 09:36:36.716250','2024-04-24 09:36:36.716250',NULL),(16,NULL,NULL,NULL,NULL,'2024-04-24 09:36:38.773618','2024-04-24 09:36:38.773618',NULL),(17,NULL,NULL,NULL,NULL,'2024-04-24 09:36:41.426938','2024-04-24 09:36:41.426938',NULL),(18,NULL,NULL,NULL,NULL,'2024-04-24 09:36:42.857907','2024-04-24 09:36:42.857907',NULL),(19,NULL,NULL,NULL,NULL,'2024-04-24 09:36:48.180283','2024-04-24 09:36:48.180283',NULL),(20,NULL,NULL,NULL,NULL,'2024-04-24 09:36:50.961533','2024-04-24 09:36:50.961533',NULL),(22,NULL,NULL,NULL,NULL,'2024-04-24 09:45:00.307339','2024-04-24 09:45:00.307339',NULL),(28,31,1,1,5,'2024-04-24 09:54:58.264650','2024-04-25 08:20:18.000000',2),(29,23,1,1,6,'2024-04-24 09:55:08.803384','2024-04-25 08:48:19.000000',2),(30,23,1,1,6,'2024-04-24 09:55:11.899016','2024-04-25 08:48:19.000000',2),(31,23,1,1,NULL,'2024-04-24 09:55:12.371272','2024-04-24 09:55:12.371272',NULL),(32,23,1,1,NULL,'2024-04-24 09:55:13.053237','2024-04-24 09:55:13.053237',NULL),(33,23,1,1,NULL,'2024-04-24 09:55:13.279360','2024-04-24 09:55:13.279360',NULL),(34,23,1,1,NULL,'2024-04-24 09:55:13.486121','2024-04-24 09:55:13.486121',NULL),(35,23,1,1,NULL,'2024-04-24 09:55:13.714015','2024-04-24 09:55:13.714015',NULL),(36,23,1,1,NULL,'2024-04-24 09:55:13.926737','2024-04-24 09:55:13.926737',NULL),(37,23,1,1,NULL,'2024-04-24 09:55:14.128023','2024-04-24 09:55:14.128023',NULL),(38,23,1,1,NULL,'2024-04-24 09:55:14.358606','2024-04-24 09:55:14.358606',NULL),(39,23,1,1,NULL,'2024-04-24 09:55:14.591397','2024-04-24 09:55:14.591397',NULL),(40,23,1,1,NULL,'2024-04-24 09:55:14.800607','2024-04-24 09:55:14.800607',NULL),(41,21,1,1,NULL,'2024-04-24 17:09:05.951587','2024-04-24 17:09:05.951587',NULL),(42,21,1,1,NULL,'2024-04-24 17:09:06.912769','2024-04-24 17:09:06.912769',NULL),(43,21,1,1,NULL,'2024-04-24 17:09:07.170499','2024-04-24 17:09:07.170499',NULL),(44,21,1,1,NULL,'2024-04-24 17:09:07.461505','2024-04-24 17:09:07.461505',NULL),(45,21,1,1,NULL,'2024-04-24 17:09:07.718248','2024-04-24 17:09:07.718248',NULL),(46,27,1,1,NULL,'2024-04-24 17:09:20.290385','2024-04-24 17:09:20.290385',NULL),(47,27,1,1,NULL,'2024-04-24 17:09:20.560970','2024-04-24 17:09:20.560970',NULL),(48,27,1,1,NULL,'2024-04-24 17:09:20.797070','2024-04-24 17:09:20.797070',NULL),(51,27,1,1,NULL,'2024-04-24 17:09:21.489857','2024-04-24 17:09:21.489857',NULL),(52,27,1,1,NULL,'2024-04-24 17:09:23.014270','2024-04-24 17:09:23.014270',NULL),(53,27,1,1,NULL,'2024-04-24 17:09:23.245191','2024-04-24 17:09:23.245191',NULL),(54,29,1,1,NULL,'2024-04-24 17:09:24.689064','2024-04-24 17:09:24.689064',NULL),(55,29,1,1,NULL,'2024-04-24 17:09:24.927828','2024-04-24 17:09:24.927828',NULL),(60,30,1,1,NULL,'2024-04-24 17:09:27.318930','2024-04-24 17:09:27.318930',NULL),(61,31,1,1,NULL,'2024-04-25 01:14:18.488754','2024-04-25 01:14:18.488754',NULL),(62,21,1,1,NULL,'2024-04-25 01:52:10.764908','2024-04-25 01:52:10.764908',NULL),(63,21,1,1,NULL,'2024-04-25 01:52:13.121124','2024-04-25 01:52:13.121124',NULL),(64,22,1,1,NULL,'2024-04-25 01:52:15.792307','2024-04-25 01:52:15.792307',NULL),(68,19,1,1,NULL,'2024-04-26 08:31:44.350788','2024-04-26 08:31:44.000000',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay`
--

LOCK TABLES `pay` WRITE;
/*!40000 ALTER TABLE `pay` DISABLE KEYS */;
INSERT INTO `pay` VALUES (3,'string','string','string',NULL,'2024-04-23','2024-04-23 17:16:30.968337','2024-04-23 17:16:30.968337',0,3),(6,'string','string','string',NULL,'2024-04-25','2024-04-25 08:48:19.883660','2024-04-25 08:48:19.883660',0,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (57,'Datejust-36','http://localhost:9001/products/dong-ho-rolex-datejust-36-126234-mat-so-xanh-la-cay-coc-so-da-quang.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T010046Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b688e3a785241fee460ac2c6dabaa287b86b8ef1a868aeda09b14431a06763c8',10,5000,'1','Hiệu ứng tia mặt trời tạo ra sự phản chiếu ánh sáng tinh tế trên nhiều mẫu mặt đồng hồ của bộ sưu tập Oyster Perpetual. Phương pháp sử dụng các kỹ thuật chải thành thạo tạo ra các rãnh hướng từ trung tâm của mặt đồng hồ ra ngoài.  Ánh sáng được khuếch tán nhất quán dọc theo từng bản khắc, tạo nên sắc thái huyền ảo, tinh tế đặc trưng theo di chuyển của cổ tay. Sau khi hoàn thiện hiệu ứng tia mặt trời, màu sắc của mặt đồng hồ được phủ bằng cách ứng dụng công nghệ PVD (Công nghệ mạ chân không) hoặc mạ điện. Một lớp sơn bóng nhẹ là lớp phủ cuối cùng của mặt đồng hồ.','2024-04-27 01:00:46.591369','2024-04-27 01:00:46.000000',NULL,NULL,1,NULL,NULL,1,4500),(58,'Datejust-28','http://localhost:9001/products/Dong-ho-Rolex-Lady-Datejust-28-Chocolate-279171.jpg.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T010659Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5361e0c6d904d7cae08d8d1640246c5e802f048ae5329acfaf3077ad239c2e75',10,5000,'1','Hiệu ứng tia mặt trời tạo ra sự phản chiếu ánh sáng tinh tế trên nhiều mẫu mặt đồng hồ của bộ sưu tập Oyster Perpetual. Phương pháp sử dụng các kỹ thuật chải thành thạo tạo ra các rãnh hướng từ trung tâm của mặt đồng hồ ra ngoài.\r\n\r\nÁnh sáng được khuếch tán nhất quán dọc theo từng bản khắc, tạo nên sắc thái huyền ảo, tinh tế đặc trưng theo di chuyển của cổ tay. Sau khi hoàn thiện hiệu ứng tia mặt trời, màu sắc của mặt đồng hồ được phủ bằng cách ứng dụng công nghệ PVD (Công nghệ mạ chân không) hoặc mạ điện. Một lớp sơn bóng nhẹ là lớp phủ cuối cùng của mặt đồng hồ.','2024-04-27 01:06:59.018188','2024-04-27 01:06:59.000000',NULL,100,1,NULL,NULL,1,4500),(59,'Timthumb','http://localhost:9001/products/timthumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T010808Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5a6ff110a3d79cc2c132a14eea9229478ab2a197aa781a5d504c1960db4cfd58',10,6000,'1','Hiệu ứng tia mặt trời tạo ra sự phản chiếu ánh sáng tinh tế trên nhiều mẫu mặt đồng hồ của bộ sưu tập Oyster Perpetual. Phương pháp sử dụng các kỹ thuật chải thành thạo tạo ra các rãnh hướng từ trung tâm của mặt đồng hồ ra ngoài.\r\n\r\nÁnh sáng được khuếch tán nhất quán dọc theo từng bản khắc, tạo nên sắc thái huyền ảo, tinh tế đặc trưng theo di chuyển của cổ tay. Sau khi hoàn thiện hiệu ứng tia mặt trời, màu sắc của mặt đồng hồ được phủ bằng cách ứng dụng công nghệ PVD (Công nghệ mạ chân không) hoặc mạ điện. Một lớp sơn bóng nhẹ là lớp phủ cuối cùng của mặt đồng hồ.','2024-04-27 01:08:08.511609','2024-04-27 01:08:08.000000',NULL,100,1,NULL,NULL,2,5400),(60,'Datejust-31','http://localhost:9001/products/dong-ho-rolex-datejust-31-278381-mat-so-bac-nam-kim-cuong.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T030414Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0e636ae763270ad54cd1b83eea4eafb1bc5a541b2518e445a0b65a0f26a3ea3f',10,7000,'1','Rolex là một nhà sản xuất đồng hồ Thụy Sĩ đa năng và độc lập. Có trụ sở chính tại Geneva, công ty được công nhận về chuyên môn và chất lượng sản phẩm của mình.','2024-04-27 03:04:14.585222','2024-04-27 03:04:14.000000',NULL,100,1,NULL,NULL,1,6300),(61,'Cosmograph','http://localhost:9001/products/rolex-cosmograph-daytona-18k-white-gold-mens-watch-116599-rbow.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T030558Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1ab4215f3cf3905d8d0b12c1d48b7d323bd311f8e859e20cf3e695128fbefe40',10,10000,'1','render','2024-04-27 03:05:58.661725','2024-04-27 03:05:58.000000',NULL,100,1,NULL,NULL,1,9000),(62,'Sea-dweller','http://localhost:9001/products/rolex-sea-dweller-126603-d9de1763-769d-47f5-99a8-c5956b858c4c-efc7aa25-8514-43a6-886d-18548a34aaa3.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=your-access-key%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T030809Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bb7bff8f0ccd75a1fa178710294de9a40e82e929091857f8c611e873c8fc7279',10,10000,'2','Rolex là một nhà sản xuất đồng hồ Thụy Sĩ đa năng và độc lập. Có trụ sở chính tại Geneva, công ty được công nhận về chuyên môn và chất lượng sản phẩm của mình.','2024-04-27 03:08:09.642046','2024-04-27 03:08:09.000000',NULL,1000,1,NULL,NULL,1,9000);
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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userToken`
--

LOCK TABLES `userToken` WRITE;
/*!40000 ALTER TABLE `userToken` DISABLE KEYS */;
INSERT INTO `userToken` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzNTEyMjIwLCJleHAiOjE3MTM1OTg2MjB9.KWZRA8AQRfjZRJuvsLWCL5yrBjZoWwJKudhC--vx-JA','5313512220996',1,NULL,1,'2024-04-19 07:37:01.011771','2024-04-19 07:37:01.011771'),(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzNTEzNzc0LCJleHAiOjE3MTM2MDAxNzR9.0NBC3j-iOk6RjchKIBrmbbuX9L83sNP_eqdL9PXl5mQ','5313513774462',1,NULL,1,'2024-04-19 08:02:54.482232','2024-04-19 08:02:54.482232'),(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzNTE0MDI0LCJleHAiOjE3MTM2MDA0MjR9.2jZqHvGpllSyKMc9XOjoepUJqYwe6CIBjPjZ2xW2QX4','5313514024833',1,NULL,1,'2024-04-19 08:07:04.839891','2024-04-19 08:07:04.839891'),(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE0Mzk1LCJleHAiOjE3MTM2MDA3OTV9.k9cDDJhRNxloiZ37qLu_8jOb8n28uH_FqOWQuOtDIlk','5313514395534',2,NULL,1,'2024-04-19 08:13:15.550588','2024-04-19 08:13:15.550588'),(5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE0NDIxLCJleHAiOjE3MTM2MDA4MjF9.hZE190lpncJoCyYHIAfM6k3QGk7NiG3hY3N48tBxVlE','5313514421996',2,NULL,1,'2024-04-19 08:13:42.003630','2024-04-19 08:13:42.003630'),(6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE0NDY4LCJleHAiOjE3MTM2MDA4Njh9.sn18bOv3X5lH70khpbJQqHg8DXt-5f5m2svwcCW5H8k','5313514468999',2,NULL,1,'2024-04-19 08:14:29.004436','2024-04-19 08:14:29.004436'),(7,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE4MDUwLCJleHAiOjE3MTM2MDQ0NTB9._s9AYXbOQlhK5ITswf22UbOfh0egs3q8XYIe-g38GPo','5313518050813',2,NULL,1,'2024-04-19 09:14:10.820604','2024-04-19 09:14:10.820604'),(8,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNTE5MzI2LCJleHAiOjE3MTM2MDU3MjZ9.6TNFNIhbVmkD7qXLOgZyQ-WF8pG4YEZVzHKyuMrHMnw','5313519326601',2,NULL,1,'2024-04-19 09:35:26.615805','2024-04-19 09:35:26.615805'),(9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNzY5MjM2LCJleHAiOjE3MTM4NTU2MzZ9.zYGPsGwI-5XcxDpkztuUO_UzNyOgBJHBI23pNqZzNdI','5313769236051',2,NULL,1,'2024-04-22 07:00:36.066446','2024-04-22 07:00:36.066446'),(10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNzY5ODA1LCJleHAiOjE3MTM4NTYyMDV9.9rMy9xYyMs4LOpS-t-AuDYhBFVJtlli-xrn3qXuyOy4','5313769805131',2,NULL,1,'2024-04-22 07:10:05.145125','2024-04-22 07:10:05.145125'),(11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzNzc2MTI1LCJleHAiOjE3MTM4NjI1MjV9.pQ9jO8vzBH8yfQjNduzqlFdTQOlYGqRE9JVVIE3hHtQ','5313776125673',2,NULL,1,'2024-04-22 08:55:25.692170','2024-04-22 08:55:25.692170'),(12,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODI3NDg1LCJleHAiOjE3MTM5MTM4ODV9.otntmu3UwRswSC4KsfchNDzqcYI7kmjBYXH_ZjNY5kA','5313827485167',2,NULL,1,'2024-04-22 23:11:25.183531','2024-04-22 23:11:25.183531'),(13,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODUwNzEwLCJleHAiOjE3MTM5MzcxMTB9.flKdj9lCAtoFT2ToqBxsMT0m2mMpLAGOo-VOpGuQ7cI','5313850710991',2,NULL,1,'2024-04-23 05:38:31.006186','2024-04-23 05:38:31.006186'),(14,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODYyNDc2LCJleHAiOjE3MTM5NDg4NzZ9.iL8JfZWLFzbk0p7tD21Xq2pCtQz2ZniP3Vdf_8dnHdE','5313862476557',2,NULL,1,'2024-04-23 08:54:36.576524','2024-04-23 08:54:36.576524'),(15,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODYyNzk2LCJleHAiOjE3MTM5NDkxOTZ9.UH9FsvcX2uV4RrUMGqtJqzn_jYSJ0AsimH4ujMPbXpc','5313862796107',2,NULL,1,'2024-04-23 08:59:56.120305','2024-04-23 08:59:56.120305'),(16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODYyOTYyLCJleHAiOjE3MTM5NDkzNjJ9.vA7hWGmd4IfL-BX-maUgVAJLctiby_rPdkPkEJX8pvA','5313862962602',2,NULL,1,'2024-04-23 09:02:42.607633','2024-04-23 09:02:42.607633'),(17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODY0ODc2LCJleHAiOjE3MTM5NTEyNzZ9.klfEjKjuFr5wOPIREvTVQrjT2dUOT1oPut3sgvK-gvI','5313864876174',2,NULL,1,'2024-04-23 09:34:36.190297','2024-04-23 09:34:36.190297'),(18,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODY2ODcxLCJleHAiOjE3MTM5NTMyNzF9.VncQM55Hq5Rvw3VCxlRlN-Rf-V73WiWz7ZuJXhQUHlc','5313866871430',2,NULL,1,'2024-04-23 10:07:51.442792','2024-04-23 10:07:51.442792'),(19,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODY3MDUwLCJleHAiOjE3MTM5NTM0NTB9.ZUxDuW9_wPDL9o6e1ZdHnl4h-Ds71EO4Je713HFvoRQ','5313867050802',2,NULL,1,'2024-04-23 10:10:50.810374','2024-04-23 10:10:50.810374'),(20,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODY3MDYyLCJleHAiOjE3MTM5NTM0NjJ9.oBPna2JXQhaHQ4ubTyK0BBzDbvLN9j3lyIXaoGEVyfA','5313867062042',2,NULL,1,'2024-04-23 10:11:02.047373','2024-04-23 10:11:02.047373'),(21,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODkyMDk2LCJleHAiOjE3MTM5Nzg0OTZ9.geRrVXIOWPB6jTHc3h_7uUn7D_kuM58b9m18pmUaybY','5313892096830',2,NULL,1,'2024-04-23 17:08:16.839656','2024-04-23 17:08:16.839656'),(22,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzODkyNDczLCJleHAiOjE3MTM5Nzg4NzN9.3lwt_zEYnRxM075ki0sDlJgwbscGeRbeZkwtGRbVSZU','5313892473251',2,NULL,1,'2024-04-23 17:14:33.270381','2024-04-23 17:14:33.270381'),(23,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzOTIyMzkxLCJleHAiOjE3MTQwMDg3OTF9.zGhY21-w0wAM5MpAsvSjxAfMVu7idEpsCLbi90_Kbxg','5313922391937',2,NULL,1,'2024-04-24 01:33:11.957731','2024-04-24 01:33:11.957731'),(24,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzOTIyNzg3LCJleHAiOjE3MTQwMDkxODd9.DsSaGTlkUN_L2SVmZV0sFnq9EEy4FsUd19ghKUZxWs0','5313922787642',2,NULL,1,'2024-04-24 01:39:47.648065','2024-04-24 01:39:47.648065'),(25,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTIzMzc2LCJleHAiOjE3MTQwMDk3NzZ9.ndlvhv3d9U4S-23zOlenDN8Oh0byleMNAwiNdzuLWbE','5313923376544',1,NULL,1,'2024-04-24 01:49:36.557040','2024-04-24 01:49:36.557040'),(26,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTI2Nzc3LCJleHAiOjE3MTQwMTMxNzd9.pgKLpArUa-_7Lg3JcLNR9yLwcOgtEcg83HktyIc3wiU','5313926777444',1,NULL,1,'2024-04-24 02:46:17.453073','2024-04-24 02:46:17.453073'),(27,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTI3NTk5LCJleHAiOjE3MTQwMTM5OTl9.hzfgiiQuPy8xcON57uJAxZVR9MYqLVKkarXO4JBS7zI','5313927599241',1,NULL,1,'2024-04-24 02:59:59.252031','2024-04-24 02:59:59.252031'),(28,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTM4NTA5LCJleHAiOjE3MTQwMjQ5MDl9.pbzbUjec_uqxPa3hHc9B0_UZZ9ujN7ymE4Pi-RIvy8A','5313938509179',1,NULL,1,'2024-04-24 06:01:49.196518','2024-04-24 06:01:49.196518'),(29,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzOTM5NzEyLCJleHAiOjE3MTQwMjYxMTJ9.7sc8SgCkdXasFQz8VoARTHssg9GafpXCr4KQ9wqdCrM','5313939712859',2,NULL,1,'2024-04-24 06:21:52.872365','2024-04-24 06:21:52.872365'),(30,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTQ5NzMzLCJleHAiOjE3MTQwMzYxMzN9.WyTkwfAdLR-3oCjoZ47-xCnE364QRbxXdBt-_dUz5vk','5313949733000',1,NULL,1,'2024-04-24 09:08:53.017459','2024-04-24 09:08:53.017459'),(31,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzEzOTQ5NzcyLCJleHAiOjE3MTQwMzYxNzJ9.7ZjVSgg9ZCaw6LYLMrC9iHt6LNt-bDszZeBCejHAAoU','5313949772686',2,NULL,1,'2024-04-24 09:09:32.695377','2024-04-24 09:09:32.695377'),(32,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzEzOTc4NDgwLCJleHAiOjE3MTQwNjQ4ODB9.v2-n38WCLILRbG7h0MpKydM2vPOafJqZ5Itq_xDrPsA','5313978480709',1,NULL,1,'2024-04-24 17:08:00.721787','2024-04-24 17:08:00.721787'),(33,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzE0MDA3NTY4LCJleHAiOjE3MTQwOTM5Njh9.Ikm7FHd2SyaOtL25jojTVrhwt1rc-0Q2bZO8Wt5kZ1E','5314007568459',1,NULL,1,'2024-04-25 01:12:48.473420','2024-04-25 01:12:48.473420'),(34,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MDEwMzAwLCJleHAiOjE3MTQwOTY3MDB9.r64Pbc1uOPn4RaTKRU1CPNaoplyUVlAjl6UMS0M6nio','5314010300105',2,NULL,1,'2024-04-25 01:58:20.116441','2024-04-25 01:58:20.116441'),(35,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzE0MDEwNTc1LCJleHAiOjE3MTQwOTY5NzV9.74SoY58qsJReD1Nns0HwRfjdybiRx8tLeZ-6_50OL9U','5314010575219',1,NULL,1,'2024-04-25 02:02:55.226238','2024-04-25 02:02:55.226238'),(36,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzE0MDEzNTA5LCJleHAiOjE3MTQwOTk5MDl9.6IsvGqtv2QS50UXsU3i6haKV4Y7XSgPqgU4d-kO6-K4','5314013509488',1,NULL,1,'2024-04-25 02:51:49.505780','2024-04-25 02:51:49.505780'),(37,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzE0MDI4NTAwLCJleHAiOjE3MTQxMTQ5MDB9.XEyZFzn98df0xl8WtZDKN0KkrpbOn-087P4939H3ceg','5314028500797',1,NULL,1,'2024-04-25 07:01:40.812505','2024-04-25 07:01:40.812505'),(38,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MDMyNjA2LCJleHAiOjE3MTQxMTkwMDZ9.afq9Mxl4I_8lQEp_5RAx9DNn-Dpc9M18KStJPth0d1Y','5314032606909',2,NULL,1,'2024-04-25 08:10:06.931237','2024-04-25 08:10:06.931237'),(39,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZ3V5ZW52YW5ob2FuZ2FuaDIwMDQyMDAxQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsInN1YiI6MSwiaWF0IjoxNzE0MTE4ODg5LCJleHAiOjE3MTQyMDUyODl9.Y9wg51uZeMuPVLvXTB_7xG9thS8Ry-__DqebN1zJsV4','5314118889108',1,NULL,1,'2024-04-26 08:08:09.125908','2024-04-26 08:08:09.125908'),(40,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MTE5MDA4LCJleHAiOjE3MTQyMDU0MDh9.bWZ6JGXqkFXZr12V9TOKdyG-2o1YJR-eAfWKQ_NEOIA','5314119008340',2,NULL,1,'2024-04-26 08:10:08.350709','2024-04-26 08:10:08.350709'),(41,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MTc4MTE1LCJleHAiOjE3MTQyNjQ1MTV9.qJ6iZn8mZgCP3k1CpnUxdUGm30ASVo1d3sxVfjfBWP0','5314178115512',2,NULL,1,'2024-04-27 00:35:15.536824','2024-04-27 00:35:15.536824'),(42,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MTc4Nzk5LCJleHAiOjE3MTQyNjUxOTl9.GvIuquOOBnwHWLNvSDYJTvCkIDDWsPhK-P_We4ZBFFs','5314178799076',2,NULL,1,'2024-04-27 00:46:39.104381','2024-04-27 00:46:39.104381'),(43,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MTc5NTg5LCJleHAiOjE3MTQyNjU5ODl9.lqeBilN0g2igieTIwwOcbkYkgqmxS95RvHqX9RnPynE','5314179589540',2,NULL,1,'2024-04-27 00:59:49.560601','2024-04-27 00:59:49.560601'),(44,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MTgzNDY5LCJleHAiOjE3MTQyNjk4Njl9.xCBxvrlypCcPonGbR8XrjeSWqEdJdhm1gC9u54YpLUU','5314183469759',2,NULL,1,'2024-04-27 02:04:29.779271','2024-04-27 02:04:29.779271'),(45,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MTg4MTcyLCJleHAiOjE3MTQyNzQ1NzJ9.EOcRkqemZBEMGeEiqjz9BBIjI2CDnqw8fpHg6v0i4GQ','5314188172909',2,NULL,1,'2024-04-27 03:22:52.920410','2024-04-27 03:22:52.920410'),(46,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MjAxMjI5LCJleHAiOjE3MTQyODc2Mjl9.IRD5wBOBBs0vlzF2zI9MVmYX0uKDtEX1rE8MXTd_hmM','5314201229562',2,NULL,1,'2024-04-27 07:00:29.585843','2024-04-27 07:00:29.585843'),(47,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MjAzMzAyLCJleHAiOjE3MTQyODk3MDJ9.5sAxOoo5LlymJS6CeiRYANot0RZhTQDpdngGOLcQ91g','5314203302415',2,NULL,1,'2024-04-27 07:35:02.427761','2024-04-27 07:35:02.427761'),(48,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MjAzODc2LCJleHAiOjE3MTQyOTAyNzZ9.keWWz4zZLBRbcE29IWChnmwRCjAvsTUU3shBuaP1uV0','5314203876931',2,NULL,1,'2024-04-27 07:44:36.946016','2024-04-27 07:44:36.946016'),(49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MjA1OTk4LCJleHAiOjE3MTQyOTIzOTh9.bDClSQtN0XfGPOxei_7PSHsg1hkr-Hz__XyG3o39Wb8','5314205998886',2,NULL,1,'2024-04-27 08:19:58.904599','2024-04-27 08:19:58.904599'),(50,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MzA0NjczLCJleHAiOjE3MTQzOTEwNzN9.CFRTrJ7tA1VXeBrCiTTpIK8VVJIs9VtFu-KTddmg8Y0','5314304673520',2,NULL,1,'2024-04-28 11:44:33.535865','2024-04-28 11:44:33.535865'),(51,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0MzA3NTA0LCJleHAiOjE3MTQzOTM5MDR9.G20EKkLSEjGSM-ng_9-St5lcVRc9SA7Ux2mw8fhxwwM','5314307504540',2,NULL,1,'2024-04-28 12:31:44.553356','2024-04-28 12:31:44.553356'),(52,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0NTQwOTUyLCJleHAiOjE3MTQ2MjczNTJ9.tx5B91vDsE5hJ7A_CF-ArcVPhTTNQuaNfYuIsQ6ibfQ','5314540952773',2,NULL,1,'2024-05-01 05:22:32.792465','2024-05-01 05:22:32.792465'),(53,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmhAZ21haWwuY29tIiwicm9sZSI6IkNsaWVudCIsInN1YiI6MiwiaWF0IjoxNzE0NTQyODk3LCJleHAiOjE3MTQ2MjkyOTd9.wMxzv0IQP_E6PoKT0_bVuC3AwNo0FPY-biBSV_5Z65g','5314542897005',2,NULL,1,'2024-05-01 05:54:57.014453','2024-05-01 05:54:57.014453');
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

-- Dump completed on 2024-05-01 17:00:00
