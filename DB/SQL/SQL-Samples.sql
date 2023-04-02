CREATE TABLE bug (
     `id` INT NOT NULL AUTO_INCREMENT ,
     `name` VARCHAR(255) NOT NULL ,
     `description` TEXT NOT NULL ,
     `severity` INT NOT NULL ,
     PRIMARY KEY (`id`)
)

-- switch to shop_db:

SELECT * 
FROM product

SELECT name, price 
FROM product

SELECT * 
FROM product
WHERE price > 100 AND dept_id=1

SELECT * 
FROM product
WHERE price > 100 
ORDER BY price DESC

SELECT * FROM `product` WHERE name LIKE '%board%'


-- COLUMN FUNCTIONS:
SELECT COUNT(*) 
FROM product
WHERE dept_id=1

SELECT AVG(price) as avg_price
FROM product
WHERE dept_id=1


SELECT dept_id, COUNT(*)
FROM product
GROUP BY dept_id

DELETE FROM product WHERE _id = 11

UPDATE product 
SET name = 'Printer Laser', price = 510 
WHERE _id = 9;

-- Join (Aggregation)
SELECT product.*, dept.name 
FROM product, dept
WHERE dept_id = dept._id



-- More of bugs:

SELECT * FROM bug
SELECT name, severity FROM bug
SELECT * FROM bug WHERE severity > 3

SELECT * 
FROM bug
WHERE name like 'Error%'

SELECT * FROM bug ORDER BY severity

-- Those are Column-Functions:
SELECT SUM(severity) FROM bug WHERE 1=1
SELECT AVG(severity) FROM bug
SELECT MAX(severity) FROM bug

SELECT severity, count(*)
FROM bug 
GROUP BY severity

-- CRUDL:

SELECT * FROM bug WHERE _id = 1;
-- DELETE FROM bug;
DELETE FROM bug WHERE _id = 1;


UPDATE bug SET severity=4 WHERE _id=3
UPDATE bug SET severity=4, name="dsds" WHERE _id=3

INSERT INTO bug
 (_id, name, description, severity) 
 VALUES 
 (NULL, 'Cannot play at noon', 'Noon issue - Problem when bla', 2);


-- ITP:

-- Create User Table 
-- Bug table add assigned_user_id FK
-- JOIN 2 tables:
SELECT b.*, u.full_name 
FROM bug b, user u
WHERE b.assigned_user_id = u._id
ORDER BY severity




-- JOIN 2 tables:
SELECT product._id, product.name, product.price, dept.name as deptName
FROM product, dept
WHERE product.dept_id = dept._id

SELECT product.*, dept.name FROM product, dept WHERE product.dept_id = dept._id


SELECT p.*, d.name 
FROM product p, dept d
WHERE p.dept_id = d._id
ORDER BY price