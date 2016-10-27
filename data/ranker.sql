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
-- Table structure for table 'trump'
--

DROP TABLE IF EXISTS ranker.trump;
CREATE TABLE ranker.trump (
  id int(3) NOT NULL AUTO_INCREMENT,
  ranker_id varchar(11) NOT NULL,
  title varchar(256) NOT NULL,
  rank_total int(14) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0;

--
-- Dumping data for table 'trump'
--

INSERT INTO ranker.trump (ranker_id, title) VALUES
('a1','Calling Mexicans “rapists” and “drug dealers” at announcement of campaign'),
('a2','Saying Sen. John McCain isn\'t a war hero because he was captured'),
('a3','Saying debate moderator Megyn Kelly had “blood coming out of her wherever”'),
('a4','Refusing to reject Ku Klux Klan leader David Duke\'s support'),
('a5','Referencing the size of his genitals during a primary debate'),
('a6','Mimicking a disabled reporter at a campaign rally'),
('a7','Questions and lawsuits regarding the former Trump University'),
('a8','Claiming a judge was unable to be impartial in a case because of his Mexican heritage'),
('a9','Feud with Gold Star parents Khizr and Ghazala Khan), whose son was killed in Iraq'),
('a10', 'Comments about groping and kissing women in "Access Hollywood” video'),
('a11', 'Comments about women who said he groped them, “She wouldn’t be my first choice”'),
('a12', 'Retweet of image with Hillary Clinton and the Star of David from anti-Semitic website'),
('a13', 'Use of Trump foundation funds to pay his private legal fees'),
('a14', 'Attacks on House Speaker Paul Ryan and other GOP leaders'),
('a15', 'Linking Sen. Ted Cruz\'s dad to Lee Harvey Oswald and the assassination of JFK'),
('a16', 'Threatening to “spill the beans” on Heidi Cruz), then insulting her looks on Twitter'),
('a17', 'Video of Trump saying about child on escalator, “I’m going to be dating her in 10 years”'),
('a18', 'Saying the "Second Amendment people" could do something about Hillary Clinton'),
('a19', 'Egging on violence against protesters and offering to pay supporters’ legal fees'),
('a20', 'Not paying federal income taxes and saying), "That makes me smart"'),
('a21', 'Proposal to ban Muslims from entering the United States'),
('a22', 'Suggesting he\'d jail Hillary Clinton over her e-mails when he’s president'),
('a23', 'Encouraging Russia to hack Hillary Clinton’s e-mails and publish them'),
('a24', 'Refusing to say he’d accept the results of the election if he loses'),
('a25', '3 a.m. tweet about Miss Universe winner Alicia Machado -- "check out sex tape"');
