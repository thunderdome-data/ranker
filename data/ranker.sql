-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 21, 2013 at 10:37 PM
-- Server version: 5.5.25
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: 'news'
--

-- --------------------------------------------------------

--
-- Table structure for table 'scandals'
--

DROP TABLE IF EXISTS ranker.scandals;
CREATE TABLE ranker.scandals (
  id int(3) NOT NULL AUTO_INCREMENT,
  ranker_id varchar(11) NOT NULL,
  title varchar(256) NOT NULL,
  rank_total int(14) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table 'scandals'
--

INSERT INTO ranker.scandals (id, ranker_id, title, rank_total) VALUES
(1, 'a1', 'A. Johnson: Impeachment (1868)', 0),
(2, 'a2', 'Grant: The Whiskey Ring (1875)', 0),
(3, 'a3', 'Harding: Teapot Dome (1921-23)', 0),
(4, 'a4', 'Nixon: Watergate (1973)', 0),
(5, 'a5', 'Nixon: Agnew resignation (1973) ', 0),
(6, 'a6', 'Reagan: Iran-Contra affair (1986)', 0),
(7, 'a7', 'Clinton: Lewinsky affair (1998)', 0),
(8, 'a8', 'Bush: U.S. attorneys (2006-2007)', 0),
(9, 'a9', 'Bush: Valerie Plame (2007)', 0),
(10, 'a10', 'Obama: Benghazi (2012)', 0),
(11, 'a11', 'Obama: IRS (2013)', 0),
(12, 'a12', 'Obama: AP phone records (2013)', 0);
