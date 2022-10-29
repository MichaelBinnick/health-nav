-- schema/03_create_entrances.sql
DROP TABLE IF EXISTS entrances CASCADE;
-- CREATE ENTRANCES
CREATE TABLE entrances (
  id SERIAL PRIMARY KEY,
  location_id integer REFERENCES locations(id) ON DELETE CASCADE NOT NULL,
  x_coord INTEGER NOT NULL,
  y_coord INTEGER NOT NULL
);