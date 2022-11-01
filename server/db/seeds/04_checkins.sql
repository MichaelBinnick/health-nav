-- seeds/04_checkins.sql
-- Seed Checkins
INSERT INTO checkins (id, location_id, patient_name, time, allergies, medications, conditions, visit_reason) VALUES (1, 9, 'Jim Bean', '2pm', true, 'penicillin', 'advil, toothpaste', 'headache', 'getting an xray of my head');
INSERT INTO checkins (id, location_id, patient_name, time, allergies, medications, conditions, visit_reason) VALUES (2, 14, 'Farah Rezun', '1pm', false, 'none', 'blood pressure meds', 'severe COVID infection', 'starting as new inpatient');
INSERT INTO checkins (id, location_id, patient_name, time, allergies, medications, conditions, visit_reason) VALUES (3, 8, 'Derek Racula', '9am', true, 'sunlight', 'regular blood transfusions', 'questions about blood', 'bloodwork requisition for lab');
