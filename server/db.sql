CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range INT NOT NULL check (price_range >=1 and price_range <=5)
);

INSERT into restaurants(name, location, price_range) values ('Pizza Hut', 'New York', 3);