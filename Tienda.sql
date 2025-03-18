-- Crea la base de datos si no existe
CREATE DATABASE IF NOT EXISTS tienda_dev;

-- Selecciona la base de datos tienda_dev
USE tienda_dev;

-- Crea la tabla fabricante con las columnas id y nombre
CREATE TABLE fabricante (
    id INT(11) NOT NULL AUTO_INCREMENT,  -- Columna id con auto incremento
    nombre VARCHAR(45) DEFAULT NULL,  -- Columna nombre con un máximo de 45 caracteres
    PRIMARY KEY (id)  -- Define la columna id como clave primaria
);

-- Inserta datos en la tabla fabricante
INSERT INTO fabricante ( id, nombre) 
VALUES 
(1,'Bago'),
(2,'Roomers'),
(3,'Astrzeneca'),
(4,'Montpelier'),
(5,'Casasco'),
(6,'Cassara'),
(7,'Bristol'),
(8,'Nova'),
(9,'Bayer'),
(10,'Pfizer');
