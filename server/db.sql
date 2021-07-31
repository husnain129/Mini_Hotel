CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range INT NOT NULL check (price_range >=1 and price_range <=5)
);

INSERT into restaurants(name, location, price_range) values ('Pizza Hut', 'New York', 3);

CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(55) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check (rating >=1 and rating <=5)
);

INSERT into reviews(restaurant_id,name,review,rating) values (20,'husnain','good food here',4.5);

--SELECT DATA FROM BOTH TABLES USING INNER JOIN
SELECT r.name AS "Restaurant Name",re.name AS "User name",re.review,re.rating FROM restaurants r INNER  JOIN reviews re on re.restaurant_id = r.id WHERE r.id=20;