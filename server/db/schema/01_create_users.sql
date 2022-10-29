-- schema/01_create_locations.sql
DROP TABLE IF EXISTS locations CASCADE;
-- CREATE LOCATIONS
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255)
);