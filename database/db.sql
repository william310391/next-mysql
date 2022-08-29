CREATE DATABASE productsdb IF NOT EXISTS;

use productsdb;

CREATE TABLE product(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    description varchar(400),
    price DECIMAL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
describe product;