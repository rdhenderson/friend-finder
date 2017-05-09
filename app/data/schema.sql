/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE friends_db;
USE friends_db;

-- Create the table plans.
CREATE TABLE friends
(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
photo varchar(255) NOT NULL,
survey varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
-- INSERT INTO friends (name, photo, survey) VALUES ('Reid', 'null', );
