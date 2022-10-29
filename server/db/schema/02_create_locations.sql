-- schema/02_create_locations.sql
DROP TABLE IF EXISTS locations CASCADE;
-- CREATE LOCATIONS
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  department_id integer REFERENCES departments(id) ON DELETE CASCADE NOT NULL,
  hours_open VARCHAR(255) NOT NULL,
  hours_close VARCHAR(255) NOT NULL,
  website VARCHAR(255)
);