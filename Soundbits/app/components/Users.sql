CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255) DEFAULT 'default_profile_pic.png',
  num_likes INT DEFAULT 0,
  num_posts INT DEFAULT 0,
  num_friends INT DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY (username),
  UNIQUE KEY (email)
);