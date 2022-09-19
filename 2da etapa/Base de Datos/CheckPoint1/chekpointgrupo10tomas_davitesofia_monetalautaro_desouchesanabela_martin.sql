-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DHespegar
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DHespegar
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DHespegar` DEFAULT CHARACTER SET utf8 ;
USE `DHespegar` ;

-- -----------------------------------------------------
-- Table `DHespegar`.`DHespegar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`DHespegar` (
  `idDHespegar` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idDHespegar`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Clientes` (
  `idClientes` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  `N°_de_pasaporte` VARCHAR(15) NOT NULL,
  `Direccion` VARCHAR(40) NOT NULL,
  `Telefono` VARCHAR(20) NOT NULL,
  `DHespegar_idDHespegar` INT NOT NULL,
  PRIMARY KEY (`idClientes`),
  UNIQUE INDEX `N°_de_pasaporte_UNIQUE` (`N°_de_pasaporte` ASC) VISIBLE,
  INDEX `fk_Clientes_DHespegar1_idx` (`DHespegar_idDHespegar` ASC) VISIBLE,
  CONSTRAINT `fk_Clientes_DHespegar1`
    FOREIGN KEY (`DHespegar_idDHespegar`)
    REFERENCES `DHespegar`.`DHespegar` (`idDHespegar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Pais` (
  `idPais` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPais`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Ciudad` (
  `idCiudad` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(15) NOT NULL,
  `Pais_idPais` INT NOT NULL,
  `Clientes_idClientes` INT NOT NULL,
  PRIMARY KEY (`idCiudad`),
  INDEX `fk_Ciudad_Pais1_idx` (`Pais_idPais` ASC) VISIBLE,
  INDEX `fk_Ciudad_Clientes1_idx` (`Clientes_idClientes` ASC) VISIBLE,
  CONSTRAINT `fk_Ciudad_Pais1`
    FOREIGN KEY (`Pais_idPais`)
    REFERENCES `DHespegar`.`Pais` (`idPais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ciudad_Clientes1`
    FOREIGN KEY (`Clientes_idClientes`)
    REFERENCES `DHespegar`.`Clientes` (`idClientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Agencia_DHespegar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Agencia_DHespegar` (
  `idAgencia_DHespegar` INT NOT NULL AUTO_INCREMENT,
  `DHespegar_idDHespegar` INT NOT NULL,
  PRIMARY KEY (`idAgencia_DHespegar`),
  INDEX `fk_Agencia_DHespegar_DHespegar1_idx` (`DHespegar_idDHespegar` ASC) VISIBLE,
  CONSTRAINT `fk_Agencia_DHespegar_DHespegar1`
    FOREIGN KEY (`DHespegar_idDHespegar`)
    REFERENCES `DHespegar`.`DHespegar` (`idDHespegar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Sucursal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Sucursal` (
  `idSucursal` INT NOT NULL AUTO_INCREMENT,
  `Telefono` VARCHAR(20) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `Ciudad_idCiudad` INT NOT NULL,
  `Agencia_DHespegar_idAgencia_DHespegar` INT NOT NULL,
  PRIMARY KEY (`idSucursal`),
  INDEX `fk_Sucursal_Ciudad1_idx` (`Ciudad_idCiudad` ASC) VISIBLE,
  INDEX `fk_Sucursal_Agencia_DHespegar1_idx` (`Agencia_DHespegar_idAgencia_DHespegar` ASC) VISIBLE,
  CONSTRAINT `fk_Sucursal_Ciudad1`
    FOREIGN KEY (`Ciudad_idCiudad`)
    REFERENCES `DHespegar`.`Ciudad` (`idCiudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sucursal_Agencia_DHespegar1`
    FOREIGN KEY (`Agencia_DHespegar_idAgencia_DHespegar`)
    REFERENCES `DHespegar`.`Agencia_DHespegar` (`idAgencia_DHespegar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Reserva_Vuelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Reserva_Vuelo` (
  `idReserva_Vuelo` INT NOT NULL AUTO_INCREMENT,
  `Codigo_de_reserva` CHAR(6) NOT NULL,
  `Fecha_y_hora` DATETIME NOT NULL,
  PRIMARY KEY (`idReserva_Vuelo`),
  UNIQUE INDEX `Codigo_de_reserva_UNIQUE` (`Codigo_de_reserva` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Tipo_de_Vuelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Tipo_de_Vuelo` (
  `idTipo_de_Vuelo` INT NOT NULL AUTO_INCREMENT,
  `Clase` VARCHAR(7) NOT NULL,
  PRIMARY KEY (`idTipo_de_Vuelo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Vuelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Vuelo` (
  `idVuelo` INT NOT NULL AUTO_INCREMENT,
  `N°_de_vuelo` CHAR(6) NOT NULL,
  `Fecha_de_partida` DATETIME NOT NULL,
  `Fecha_de_llegada(estimada)` DATETIME NOT NULL,
  `Origen` VARCHAR(45) NOT NULL,
  `Destino` VARCHAR(45) NOT NULL,
  `Tipo_de_Vuelo_idTipo_de_Vuelo` INT NOT NULL,
  PRIMARY KEY (`idVuelo`),
  UNIQUE INDEX `N°_de_vuelo_UNIQUE` (`N°_de_vuelo` ASC) VISIBLE,
  INDEX `fk_Vuelo_Tipo_de_Vuelo1_idx` (`Tipo_de_Vuelo_idTipo_de_Vuelo` ASC) VISIBLE,
  CONSTRAINT `fk_Vuelo_Tipo_de_Vuelo1`
    FOREIGN KEY (`Tipo_de_Vuelo_idTipo_de_Vuelo`)
    REFERENCES `DHespegar`.`Tipo_de_Vuelo` (`idTipo_de_Vuelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Hotel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Hotel` (
  `idHotel` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `Telefono` VARCHAR(20) NOT NULL,
  `Habitaciones` INT NOT NULL,
  `Ciudad_idCiudad` INT NOT NULL,
  PRIMARY KEY (`idHotel`),
  INDEX `fk_Hotel_Ciudad1_idx` (`Ciudad_idCiudad` ASC) VISIBLE,
  CONSTRAINT `fk_Hotel_Ciudad1`
    FOREIGN KEY (`Ciudad_idCiudad`)
    REFERENCES `DHespegar`.`Ciudad` (`idCiudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Metodo_de_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Metodo_de_pago` (
  `idMetodo_de_pago` INT NOT NULL AUTO_INCREMENT,
  `Metodo` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idMetodo_de_pago`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Pago` (
  `idPago` INT NOT NULL AUTO_INCREMENT,
  `Precio` INT NOT NULL,
  `Metodo_de_pago_idMetodo_de_pago` INT NOT NULL,
  PRIMARY KEY (`idPago`),
  INDEX `fk_Pago_Metodo_de_pago1_idx` (`Metodo_de_pago_idMetodo_de_pago` ASC) VISIBLE,
  CONSTRAINT `fk_Pago_Metodo_de_pago1`
    FOREIGN KEY (`Metodo_de_pago_idMetodo_de_pago`)
    REFERENCES `DHespegar`.`Metodo_de_pago` (`idMetodo_de_pago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Reserva_General`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Reserva_General` (
  `idReserva_General` INT NOT NULL AUTO_INCREMENT,
  `Clientes_idClientes` INT NOT NULL,
  `Reserva_Vuelo_idReserva_Vuelo` INT NOT NULL,
  `Pago_idPago` INT NOT NULL,
  `Sucursal_idSucursal` INT NOT NULL,
  PRIMARY KEY (`idReserva_General`),
  INDEX `fk_Reserva_General_Clientes1_idx` (`Clientes_idClientes` ASC) VISIBLE,
  INDEX `fk_Reserva_General_Reserva_Vuelo1_idx` (`Reserva_Vuelo_idReserva_Vuelo` ASC) VISIBLE,
  INDEX `fk_Reserva_General_Pago1_idx` (`Pago_idPago` ASC) VISIBLE,
  INDEX `fk_Reserva_General_Sucursal1_idx` (`Sucursal_idSucursal` ASC) VISIBLE,
  CONSTRAINT `fk_Reserva_General_Clientes1`
    FOREIGN KEY (`Clientes_idClientes`)
    REFERENCES `DHespegar`.`Clientes` (`idClientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_General_Reserva_Vuelo1`
    FOREIGN KEY (`Reserva_Vuelo_idReserva_Vuelo`)
    REFERENCES `DHespegar`.`Reserva_Vuelo` (`idReserva_Vuelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_General_Pago1`
    FOREIGN KEY (`Pago_idPago`)
    REFERENCES `DHespegar`.`Pago` (`idPago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_General_Sucursal1`
    FOREIGN KEY (`Sucursal_idSucursal`)
    REFERENCES `DHespegar`.`Sucursal` (`idSucursal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Reserva_Hotel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Reserva_Hotel` (
  `idReserva_Hotel` INT NOT NULL AUTO_INCREMENT,
  `Pension` TINYINT(2) NOT NULL,
  `Checkin` DATETIME NOT NULL,
  `Checkout` DATETIME NOT NULL,
  `Reserva_General_idReserva_General` INT NOT NULL,
  PRIMARY KEY (`idReserva_Hotel`),
  INDEX `fk_Reserva_Hotel_Reserva_General1_idx` (`Reserva_General_idReserva_General` ASC) VISIBLE,
  CONSTRAINT `fk_Reserva_Hotel_Reserva_General1`
    FOREIGN KEY (`Reserva_General_idReserva_General`)
    REFERENCES `DHespegar`.`Reserva_General` (`idReserva_General`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Reserva_Hotel_has_Hotel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Reserva_Hotel_has_Hotel` (
  `Reserva_Hotel_idReserva_Hotel` INT NOT NULL,
  `Hotel_idHotel` INT NOT NULL,
  PRIMARY KEY (`Reserva_Hotel_idReserva_Hotel`, `Hotel_idHotel`),
  INDEX `fk_Reserva_Hotel_has_Hotel_Hotel1_idx` (`Hotel_idHotel` ASC) VISIBLE,
  INDEX `fk_Reserva_Hotel_has_Hotel_Reserva_Hotel1_idx` (`Reserva_Hotel_idReserva_Hotel` ASC) VISIBLE,
  CONSTRAINT `fk_Reserva_Hotel_has_Hotel_Reserva_Hotel1`
    FOREIGN KEY (`Reserva_Hotel_idReserva_Hotel`)
    REFERENCES `DHespegar`.`Reserva_Hotel` (`idReserva_Hotel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_Hotel_has_Hotel_Hotel1`
    FOREIGN KEY (`Hotel_idHotel`)
    REFERENCES `DHespegar`.`Hotel` (`idHotel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Reserva_Vuelo_has_Vuelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Reserva_Vuelo_has_Vuelo` (
  `Reserva_Vuelo_idReserva_Vuelo` INT NOT NULL,
  `Vuelo_idVuelo` INT NOT NULL,
  PRIMARY KEY (`Reserva_Vuelo_idReserva_Vuelo`, `Vuelo_idVuelo`),
  INDEX `fk_Reserva_Vuelo_has_Vuelo_Vuelo1_idx` (`Vuelo_idVuelo` ASC) VISIBLE,
  INDEX `fk_Reserva_Vuelo_has_Vuelo_Reserva_Vuelo1_idx` (`Reserva_Vuelo_idReserva_Vuelo` ASC) VISIBLE,
  CONSTRAINT `fk_Reserva_Vuelo_has_Vuelo_Reserva_Vuelo1`
    FOREIGN KEY (`Reserva_Vuelo_idReserva_Vuelo`)
    REFERENCES `DHespegar`.`Reserva_Vuelo` (`idReserva_Vuelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_Vuelo_has_Vuelo_Vuelo1`
    FOREIGN KEY (`Vuelo_idVuelo`)
    REFERENCES `DHespegar`.`Vuelo` (`idVuelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHespegar`.`Vuelo_has_Ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHespegar`.`Vuelo_has_Ciudad` (
  `Vuelo_idVuelo` INT NOT NULL,
  `Ciudad_idCiudad` INT NOT NULL,
  PRIMARY KEY (`Vuelo_idVuelo`, `Ciudad_idCiudad`),
  INDEX `fk_Vuelo_has_Ciudad_Ciudad1_idx` (`Ciudad_idCiudad` ASC) VISIBLE,
  INDEX `fk_Vuelo_has_Ciudad_Vuelo1_idx` (`Vuelo_idVuelo` ASC) VISIBLE,
  CONSTRAINT `fk_Vuelo_has_Ciudad_Vuelo1`
    FOREIGN KEY (`Vuelo_idVuelo`)
    REFERENCES `DHespegar`.`Vuelo` (`idVuelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vuelo_has_Ciudad_Ciudad1`
    FOREIGN KEY (`Ciudad_idCiudad`)
    REFERENCES `DHespegar`.`Ciudad` (`idCiudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
