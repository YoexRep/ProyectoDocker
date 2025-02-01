-- init.sql
CREATE TABLE IF NOT EXISTS t_saludos (
    f_codigo_saludo SERIAL PRIMARY KEY,
    f_saludo VARCHAR(100) NOT NULL

);

INSERT INTO t_saludos (f_saludo) VALUES
('Hola primer saludo Actualizado workflow 1'),
('Hola segundo saludo Actualizado workflow 2'),
('Hola tercer saludo Actualizado workflow 3');