BEGIN;
DROP TABLE IF EXISTS journey ,userss, uj_relation CASCADE;
CREATE TABLE journey (
    id SERIAL PRIMARY KEY NOT NULL,
    place_name VARCHAR( 50) NOT NULL,
    journey_date VARCHAR( 50),
    checked BOOLEAN ,
    img VARCHAR( 500) NOT NULL,
    journey_des VARCHAR( 500)
);
CREATE TABLE userss(
    id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR( 50) NOT NULL,
    phone INT ,
    email   VARCHAR( 50),
    user_password VARCHAR( 250)
);
CREATE TABLE uj_relation(
    id SERIAL PRIMARY KEY NOT NULL,
    journey_id INT,
    user_id int,
    FOREIGN KEY (journey_id) REFERENCES journey (id),
    FOREIGN KEY (user_id) REFERENCES userss (id)
);


COMMIT;
END;