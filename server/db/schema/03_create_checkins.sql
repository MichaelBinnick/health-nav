-- schema/02_create_checkins.sql
DROP TABLE IF EXISTS checkins CASCADE;
-- CREATE CHECKINS
CREATE TABLE checkins (
  id SERIAL PRIMARY KEY,
  location_id integer REFERENCES locations(id) ON DELETE CASCADE NOT NULL,
  patient VARCHAR(255) NOT NULL,
  time VARCHAR(255) NOT NULL,
  covid_free BOOLEAN, -- yes = passed prescreen, no = failed prescreen, empty = hasn't prescreened
  allergies VARCHAR(510),
  medications VARCHAR(510),
  conditions VARCHAR(765),
  visit_reason VARCHAR(510) NOT NULL
);