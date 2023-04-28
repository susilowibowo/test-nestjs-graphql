-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 28, 2023 at 05:41 AM
-- Server version: 5.7.33
-- PHP Version: 8.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_nextdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `age`) VALUES
(4, 'J.R.R. Tolkien', 86),
(5, 'G.R.R. Martin', 73),
(6, 'sumantos', 45);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `isbn` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `author_id` int(11) NOT NULL,
  `published` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `isbn`, `description`, `author_id`, `published`) VALUES
(9, 'Similarion', '978-03453912453', 'old shit.', 4, '1983-09-12'),
(16, 'Lord of The Ring: Fellowship of the ring', '978-03453913331', 'old shit.', 4, '1984-09-15'),
(17, 'teknik memutilasi', '401-23125', 'cara memotong anggota tubuh', 6, '2000-11-05');

-- --------------------------------------------------------

--
-- Table structure for table `marketing`
--

CREATE TABLE `marketing` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marketing`
--

INSERT INTO `marketing` (`id`, `name`, `code`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'the only marketing', 'pdm03', 1, '2023-04-27 02:59:56', '2023-04-27 02:59:56');

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pdm_id` int(11) DEFAULT NULL,
  `marketing_id` int(11) NOT NULL,
  `partner_group_id` int(11) DEFAULT NULL,
  `partner_type_id` int(11) NOT NULL,
  `level` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `user_id`, `pdm_id`, `marketing_id`, `partner_group_id`, `partner_type_id`, `level`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 10, NULL, 1, NULL, 1, NULL, NULL, '2023-04-27 08:40:15', '2023-04-27 08:40:15'),
(2, 15, NULL, 1, NULL, 1, NULL, NULL, '2023-04-27 09:39:08', '2023-04-27 09:39:08'),
(3, 18, NULL, 1, NULL, 1, NULL, NULL, '2023-04-27 09:45:10', '2023-04-27 09:45:10'),
(5, 22, NULL, 1, NULL, 1, NULL, NULL, '2023-04-28 03:34:13', '2023-04-28 03:34:13');

-- --------------------------------------------------------

--
-- Table structure for table `partner_type`
--

CREATE TABLE `partner_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `partner_type`
--

INSERT INTO `partner_type` (`id`, `name`) VALUES
(5, 'Affiliate'),
(2, 'Galeri'),
(1, 'IB'),
(4, 'KOL'),
(3, 'Referal');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', '2023-04-27 02:44:43', '2023-04-27 02:44:43'),
(5, 'Admin', '2023-04-27 02:46:27', '2023-04-27 02:46:27'),
(7, 'Compliance', '2023-04-27 02:47:15', '2023-04-27 02:47:15'),
(8, 'Finance', '2023-04-27 02:47:22', '2023-04-27 02:47:22'),
(9, 'PDM', '2023-04-27 02:47:30', '2023-04-27 02:47:30'),
(10, 'Settlement', '2023-04-27 02:47:37', '2023-04-27 02:47:37'),
(11, 'Partner', '2023-04-27 02:46:34', '2023-04-27 02:46:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `wp_id` int(11) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `telegram_id` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `wp_id`, `phone`, `password`, `email`, `remember_token`, `role_id`, `name`, `telegram_id`, `username`, `created_at`, `updated_at`) VALUES
(10, NULL, '08123124123', NULL, 'dosajohny@sins.co', NULL, 11, 'Jhony Dosa', NULL, 'dosajohny@sins.co', '2023-04-27 08:40:15', '2023-04-27 08:40:15'),
(15, NULL, '08123121123', NULL, 'dosajohn2y@sins.co', NULL, 11, 'Jhony Dosa2', NULL, 'dosajohn2y@sins.co', '2023-04-27 09:39:08', '2023-04-27 09:39:08'),
(18, NULL, '08123121133', NULL, 'dosajohn3y@sins.co', NULL, 11, 'Jhony Dosa3', NULL, 'dosajohn3y@sins.co', '2023-04-27 09:45:10', '2023-04-27 09:45:10'),
(22, NULL, '08123124163', NULL, 'dosajohny6@sins.co', NULL, 11, 'Jhony Dosa101', NULL, 'dosajohny6@sins.co', '2023-04-28 03:34:13', '2023-04-28 03:34:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_54337dc30d9bb2c3fadebc6909` (`isbn`),
  ADD UNIQUE KEY `IDX_3cd818eaf734a9d8814843f119` (`title`),
  ADD KEY `FK_1056dbee4616479f7d562c562df` (`author_id`);

--
-- Indexes for table `marketing`
--
ALTER TABLE `marketing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_6aee7fd33891dbfa5ccbbdfe084` (`user_id`),
  ADD KEY `FK_dac618372500894d838b215c8db` (`partner_type_id`);

--
-- Indexes for table `partner_type`
--
ALTER TABLE `partner_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_dbe0176f73f5ce65b3f955e293` (`name`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_648e3f5447f725579d7d4ffdfb` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_a000cca60bcf04454e72769949` (`phone`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  ADD UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`),
  ADD KEY `FK_a2cecd1a3531c0b041e29ba46e1` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `marketing`
--
ALTER TABLE `marketing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `partner_type`
--
ALTER TABLE `partner_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `FK_1056dbee4616479f7d562c562df` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `partners`
--
ALTER TABLE `partners`
  ADD CONSTRAINT `FK_6aee7fd33891dbfa5ccbbdfe084` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_dac618372500894d838b215c8db` FOREIGN KEY (`partner_type_id`) REFERENCES `partner_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_a2cecd1a3531c0b041e29ba46e1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
