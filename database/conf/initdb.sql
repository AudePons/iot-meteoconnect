CREATE DATABASE  IF NOT EXISTS `db_iot`;

USE `db_iot`;

CREATE OR REPLACE USER 'user'@'%' IDENTIFIED BY 'user';

DROP TABLE IF EXISTS `device`;
CREATE TABLE `device` (
  `deviceId` varchar(100) NOT NULL,
  `zone` varchar(100) NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`deviceId`)
);

DROP TABLE IF EXISTS `humidity`;
CREATE TABLE `humidity` (
  `humidityId` int NOT NULL AUTO_INCREMENT,
  `rate` float NOT NULL,
  `created_at` timestamp NOT NULL,
  `deviceId` varchar(100) NOT NULL,
  PRIMARY KEY (`humidityId`),
  KEY `fk_humidity_device_idx` (`deviceId`),
  CONSTRAINT `fk_humidity_device` FOREIGN KEY (`deviceId`) REFERENCES `device` (`deviceId`)
);

DROP TABLE IF EXISTS `temperature`;
CREATE TABLE `temperature` (
  `temperatureId` int NOT NULL AUTO_INCREMENT,
  `celsius` float NOT NULL,
  `created_at` timestamp NOT NULL,
  `deviceId` varchar(100) NOT NULL,
  PRIMARY KEY (`temperatureId`),
  KEY `fk_temperature_device_idx` (`deviceId`),
  CONSTRAINT `fk_temperature_device` FOREIGN KEY (`deviceId`) REFERENCES `device` (`deviceId`)
);

DROP TABLE IF EXISTS `wind`;
CREATE TABLE `wind` (
  `windId` int NOT NULL AUTO_INCREMENT,
  `speed` float NOT NULL,
  `created_at` timestamp NOT NULL,
  `deviceId` varchar(100) NOT NULL,
  PRIMARY KEY (`windId`),
  KEY `fk_wind_device_idx` (`deviceId`),
  CONSTRAINT `fk_wind_device` FOREIGN KEY (`deviceId`) REFERENCES `device` (`deviceId`)
);