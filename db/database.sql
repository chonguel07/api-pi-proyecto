CREATE DATABASE IF NOT EXISTS proyectopidb;

USE proyectopidb;

CREATE TABLE denuncia (
    id INT(11) NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(200) DEFAULT NULL,
    nombre VARCHAR(200) DEFAULT NULL,
    dni VARCHAR(200) DEFAULT NULL,
    telefono VARCHAR(200) DEFAULT NULL,
    PRIMARY KEY (200)
);

INSERT INTO denuncia VALUES
(1,'Fisico','Luz','87654321','987654321'),
(2,'Mental','Ana','12345678','963852741'),
(3,'Emocional','Ale','88888888','912365478'),