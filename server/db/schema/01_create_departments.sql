-- schema/01_create_departments.sql
DROP TABLE IF EXISTS departments CASCADE;
-- CREATE DEPARTMENTS
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);