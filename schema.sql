DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(100) NOT NULL,
  PRIMARY KEY (item_id)
);

/* Seeds for SQL table. We haven't discussed this type of file yet */
USE bamazonDB;


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shirt', 'Clothing', 49.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shoes', 'Footwear', 89.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pants', 'Clothing', 59.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Ties', 'Clothing', 29.99, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dress', 'Clothing', 99.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Socks', 'Footwear', 5.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Underwear', 'Clothing', 9.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Coat', 'Winterwear', 109.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sweater', 'Winterwear', 59.99, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hat', 'Clothing', 19.99, 15);