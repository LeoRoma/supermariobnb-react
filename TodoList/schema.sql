CREATE TABLE testtable1 (
 id serial PRIMARY KEY,
 first VARCHAR(100),
 last VARCHAR(100),
 email text UNIQUE NOT NULL,
 phone VARCHAR(100),
 location VARCHAR(100),
 hobby VARCHAR(100),
 added TIMESTAMP NOT NULL
);

CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  password VARCHAR(255),
  email_verified BOOLEAN,
  date_created DATE,
  last_login DATE
);

// psql -U postgres