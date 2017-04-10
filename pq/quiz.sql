-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2017 at 01:58 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `answerID` int(11) NOT NULL,
  `questionID` int(11) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`answerID`, `questionID`, `answer`) VALUES
(1, 2, 'Cloth'),
(2, 2, 'Leather'),
(3, 2, 'Mail'),
(4, 2, 'Plate'),
(5, 1, 'Damage dealing'),
(6, 1, 'Defending the party'),
(7, 1, 'Healing'),
(8, 3, 'Elemental'),
(9, 3, 'Holy and Void (Yin and Yang)'),
(10, 3, 'Demonic'),
(11, 4, 'Becoming the weapon (Changing forms)'),
(12, 4, 'Warglaives'),
(13, 4, 'Swords and Daggers'),
(14, 4, 'Fists and Swords'),
(15, 5, 'Using magic, fist weapons and staves'),
(16, 5, 'Bow and arrow, polearms'),
(17, 6, 'Morph into a bear'),
(18, 6, 'Using martial arts and barrels of grog'),
(19, 6, 'Warglaives and demonic powers'),
(20, 6, 'Powers of the light with sword and shield'),
(21, 6, 'Pure rage with sword and shield'),
(22, 6, 'Blood magic with two-handed weapon'),
(23, 7, 'Your chi'),
(24, 7, 'Powers of nature'),
(25, 5, 'With powers of the Light'),
(26, 5, 'Using pure rage'),
(27, 5, 'With powers of unholy, frost and blood magics');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `questionID` int(11) NOT NULL,
  `question` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`questionID`, `question`) VALUES
(1, 'Which of these roles do you prefer?'),
(2, 'What type of armour do you like?'),
(3, 'What kind of magic do you like?'),
(4, 'What kind of weapons do you like?'),
(5, 'How do you like to deal damage?'),
(6, 'What do you like to use to defend the party?'),
(7, 'What magic would you use to heal the party?');

-- --------------------------------------------------------

--
-- Table structure for table `resultclasses`
--

CREATE TABLE `resultclasses` (
  `resultClass` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `resultClassName` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `resultclasses`
--

INSERT INTO `resultclasses` (`resultClass`, `userID`, `resultClassName`) VALUES
(1, 1, 'Druid'),
(2, 1, 'Druid'),
(3, 1, 'Priest'),
(4, 1, 'Death Knight'),
(5, 1, 'Monk'),
(6, 1, 'Demon Hunter'),
(7, 1, 'Warrior'),
(8, 2, 'Druid'),
(9, 2, 'Rogue'),
(10, 2, 'Shaman'),
(11, 2, 'Paladin'),
(12, 2, 'Warrior'),
(13, 2, 'Druid'),
(14, 2, 'Hunter'),
(15, 2, 'Demon Hunter'),
(16, 2, 'Paladin'),
(17, 2, 'Paladin'),
(18, 2, 'Monk'),
(19, 2, 'Monk'),
(20, 2, 'Warrior'),
(21, 2, 'Hunter'),
(22, 2, 'Priest'),
(23, 2, 'Warlock'),
(24, 2, 'Mage'),
(25, 2, 'Druid'),
(26, 2, 'Demon Hunter'),
(27, 2, 'Rogue'),
(28, 2, 'Rogue'),
(29, 2, 'Monk'),
(30, 2, 'Shaman'),
(31, 2, 'Hunter'),
(32, 2, 'Paladin'),
(33, 2, 'Warrior'),
(34, 2, 'Death Knight'),
(35, 2, 'Druid'),
(36, 2, 'Monk'),
(37, 2, 'Demon Hunter'),
(38, 2, 'Paladin'),
(39, 2, 'Warrior'),
(40, 2, 'Death Knight'),
(41, 2, 'Monk'),
(42, 2, 'Druid'),
(43, 1, 'Druid'),
(44, 1, 'Death Knight'),
(45, 1, 'Druid'),
(46, 1, 'Death Knight'),
(47, 5, 'Mage'),
(48, 5, 'Mage'),
(49, 5, 'Mage'),
(50, 5, 'Priest'),
(51, 5, 'Priest'),
(52, 5, 'Warlock'),
(53, 5, 'Mage'),
(54, 5, 'Mage'),
(55, 5, 'Priest'),
(56, 5, 'Priest'),
(57, 5, 'Priest'),
(58, 5, 'Demon Hunter'),
(59, 5, 'Priest'),
(60, 5, 'Warlock');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `resultID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `questionID` int(11) NOT NULL,
  `answerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`resultID`, `userID`, `questionID`, `answerID`) VALUES
(8, 1, 1, 5),
(9, 1, 2, 2),
(10, 1, 1, 7),
(11, 1, 2, 2),
(12, 1, 1, 7),
(13, 1, 2, 1),
(14, 1, 1, 5),
(15, 1, 2, 1),
(16, 1, 1, 6),
(17, 1, 2, 4),
(18, 1, 1, 6),
(19, 1, 2, 2),
(20, 1, 1, 7),
(21, 1, 2, 3),
(22, 1, 1, 5),
(23, 1, 2, 2),
(24, 1, 1, 5),
(25, 1, 2, 4),
(26, 2, 1, 7),
(27, 2, 2, 2),
(28, 2, 1, 5),
(29, 2, 2, 2),
(30, 2, 1, 5),
(31, 2, 2, 2),
(32, 2, 1, 5),
(33, 2, 2, 3),
(34, 2, 1, 6),
(35, 2, 2, 4),
(36, 2, 1, 7),
(37, 2, 2, 3),
(38, 2, 1, 6),
(39, 2, 2, 4),
(40, 2, 1, 5),
(41, 2, 2, 4),
(42, 2, 1, 5),
(43, 2, 2, 2),
(44, 2, 1, 5),
(45, 2, 2, 3),
(46, 2, 1, 6),
(47, 2, 2, 2),
(48, 2, 1, 7),
(49, 2, 2, 4),
(50, 2, 1, 6),
(51, 2, 2, 4),
(52, 2, 1, 5),
(53, 2, 2, 4),
(54, 2, 1, 6),
(55, 2, 2, 2),
(56, 2, 1, 5),
(57, 2, 2, 2),
(58, 2, 1, 5),
(59, 2, 2, 4),
(60, 2, 1, 5),
(61, 2, 2, 3),
(62, 2, 1, 5),
(63, 2, 2, 1),
(64, 2, 1, 5),
(65, 2, 2, 1),
(66, 2, 1, 5),
(67, 2, 2, 1),
(68, 2, 1, 5),
(69, 2, 2, 2),
(70, 2, 1, 5),
(71, 2, 2, 2),
(72, 2, 1, 5),
(73, 2, 2, 2),
(74, 2, 1, 5),
(75, 2, 2, 2),
(76, 2, 1, 5),
(77, 2, 2, 2),
(78, 2, 1, 5),
(79, 2, 2, 3),
(80, 2, 1, 5),
(81, 2, 2, 3),
(82, 2, 1, 5),
(83, 2, 2, 4),
(84, 2, 1, 5),
(85, 2, 2, 4),
(86, 2, 1, 5),
(87, 2, 2, 4),
(88, 2, 1, 6),
(89, 2, 2, 2),
(90, 2, 1, 6),
(91, 2, 2, 2),
(92, 2, 1, 6),
(93, 2, 2, 2),
(94, 2, 1, 6),
(95, 2, 2, 4),
(96, 2, 1, 6),
(97, 2, 2, 4),
(98, 2, 1, 6),
(99, 2, 2, 4),
(100, 2, 1, 7),
(101, 2, 2, 1),
(102, 2, 1, 7),
(103, 2, 2, 1),
(104, 2, 1, 7),
(105, 2, 2, 2),
(106, 2, 1, 7),
(107, 2, 2, 2),
(108, 2, 1, 7),
(109, 2, 2, 3),
(110, 2, 1, 7),
(111, 2, 2, 4),
(112, 1, 1, 7),
(113, 1, 2, 2),
(114, 1, 1, 5),
(115, 1, 2, 4),
(116, 1, 1, 5),
(117, 1, 2, 2),
(118, 1, 1, 6),
(119, 1, 2, 4),
(120, 1, 1, 7),
(121, 1, 2, 3),
(122, 5, 1, 5),
(123, 5, 2, 1),
(124, 5, 1, 5),
(125, 5, 2, 1),
(126, 5, 1, 5),
(127, 5, 2, 1),
(128, 5, 1, 5),
(129, 5, 2, 1),
(130, 5, 1, 5),
(131, 5, 2, 1),
(132, 5, 1, 5),
(133, 5, 2, 1),
(134, 5, 1, 5),
(135, 5, 2, 1),
(136, 5, 1, 5),
(137, 5, 2, 1),
(138, 5, 1, 5),
(139, 5, 2, 1),
(140, 5, 1, 5),
(141, 5, 2, 1),
(142, 5, 1, 5),
(143, 5, 2, 1),
(144, 5, 1, 5),
(145, 5, 2, 2),
(146, 5, 1, 5),
(147, 5, 2, 1),
(148, 5, 1, 5),
(149, 5, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int(2) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `name`, `age`, `email`, `password`) VALUES
(1, 'gareth', 26, 'gareth@email.com', 'password'),
(2, 'Aaron', 24, 'aaron@email.com', 'password'),
(3, '', 0, '', ''),
(4, 'Bob', 34, 'bob@email.com', 'password'),
(5, 'Sally', 23, 'sally@email.com', 'password'),
(6, 'Harry', 30, 'harry@email.com', 'password');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`answerID`),
  ADD KEY `questionID` (`questionID`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`questionID`);

--
-- Indexes for table `resultclasses`
--
ALTER TABLE `resultclasses`
  ADD PRIMARY KEY (`resultClass`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`resultID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `questionID` (`questionID`),
  ADD KEY `answerID` (`answerID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `answerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `questionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `resultclasses`
--
ALTER TABLE `resultclasses`
  MODIFY `resultClass` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `resultID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`questionID`) REFERENCES `questions` (`questionID`);

--
-- Constraints for table `results`
--
ALTER TABLE `results`
  ADD CONSTRAINT `results_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `results_ibfk_2` FOREIGN KEY (`questionID`) REFERENCES `questions` (`questionID`),
  ADD CONSTRAINT `results_ibfk_3` FOREIGN KEY (`answerID`) REFERENCES `answers` (`answerID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
