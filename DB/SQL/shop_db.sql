CREATE TABLE `dept` (
  `_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `dept`
--

INSERT INTO `dept` (`_id`, `name`)
VALUES (1, 'Toys'),
  (2, 'Computers'),
  (3, 'Medicals');
-- --------------------------------------------------------
--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10, 0) NOT NULL,
  `dept_id` int(11) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `product`
--

INSERT INTO `product` (`_id`, `name`, `price`, `dept_id`)
VALUES (1, 'Father Board Intel', '270', 1),
  (2, 'Key Board', '60', 1),
  (3, 'Hard Drive', '180', 1),
  (4, 'Mouse', '40', 1),
  (5, 'Processor', '260', 1),
  (6, 'DVD drive', '121', 2),
  (7, 'CD drive', '121', 2),
  (9, 'Printer Laser s3', '510', 2),
  (10, 'Speaker', '132', 2),
  (11, 'kiki', '44', 1),
  (12, 'Product NEW', '90', 1);
ALTER TABLE `dept`
ADD PRIMARY KEY (`_id`);
--
-- Indexes for table `product`
--
ALTER TABLE `product`
ADD PRIMARY KEY (`_id`),
  ADD KEY `dept_id` (`dept_id`);
ALTER TABLE `dept`
MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 4;