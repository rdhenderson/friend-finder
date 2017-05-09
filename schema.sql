	CREATE TABLE friends (
		id INT AUTO_INCREMENT NOT NULL, 
        name VARCHAR(255) NOT NULL,
        photo VARCHAR(255), 
        answers VARCHAR(255),
        match INT,
        PRIMARY KEY(id)
	);