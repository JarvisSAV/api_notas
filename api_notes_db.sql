CREATE DATABASE  IF NOT EXISTS `api_notes`;
USE `api_notes`;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;


CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `important` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` VALUES (1,'Hacer los foros de Saul','2023-05-30 17:30:31',1),(2,'Respirar 24/7','2023-05-30 18:39:34',0),(3,'No discutir con los maestros','2023-05-30 19:20:14',1);
