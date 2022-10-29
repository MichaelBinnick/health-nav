-- schema/01_create_locations.sql
DROP TABLE IF EXISTS locations CASCADE;
-- CREATE LOCATIONS
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  hours_open VARCHAR(255) NOT NULL,
  hours_close VARCHAR(255) NOT NULL,
  website VARCHAR(255)
);