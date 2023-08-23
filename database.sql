CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
task varchar(200),
completed boolean
);


INSERT INTO "tasks" ("task", "completed")
VALUES
('Check WSB reddit for stock tips', true),
('Dance', false),
('Make tea', true),
('Feed chipmunks', true);