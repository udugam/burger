CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    BurgerName VARCHAR(255) NOT NULL,
    Devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);