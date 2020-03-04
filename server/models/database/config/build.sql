BEGIN;
DROP TABLE IF EXISTS journey ,users, uj_relation CASCADE;
CREATE TABLE journey (
    id SERIAL PRIMARY KEY NOT NULL,
    place_name VARCHAR( 50) NOT NULL,
    journey_date VARCHAR( 50),
    checked BOOLEAN ,
    img VARCHAR( 500) NOT NULL,
    journey_des VARCHAR( 500)
);
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR( 50) NOT NULL,
    phone INT NOT NULL,
    email   VARCHAR( 50) NOT NULL,
    user_password VARCHAR( 250) NOT NULL
);
CREATE TABLE uj_relation(
    id SERIAL PRIMARY KEY NOT NULL,
    journey_id INT,
    user_id int,
    FOREIGN KEY (journey_id) REFERENCES journey (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);


COMMIT;
END;