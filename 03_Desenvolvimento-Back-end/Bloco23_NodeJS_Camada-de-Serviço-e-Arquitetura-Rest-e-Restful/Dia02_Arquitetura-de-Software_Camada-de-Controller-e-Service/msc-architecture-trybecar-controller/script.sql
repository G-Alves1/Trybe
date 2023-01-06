-- Usando o banco trybecashdb
USE trybecardb;

-- Excluindo as tabelas se as mesmas existirem
DROP TABLE IF EXISTS waypoints;
DROP TABLE IF EXISTS travels;
DROP TABLE IF EXISTS travel_status;
DROP TABLE IF EXISTS passengers;
DROP TABLE IF EXISTS drivers_cars;
DROP TABLE IF EXISTS drivers;
DROP TABLE IF EXISTS cars;

-- Criando a tabela travel_status
CREATE TABLE IF NOT EXISTS travel_status (
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- Criando a tabela passengers
CREATE TABLE IF NOT EXISTS passengers (
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

-- Criando a tabela cars
CREATE TABLE IF NOT EXISTS cars (
	id INTEGER NOT NULL AUTO_INCREMENT,
    model VARCHAR(100),
    color VARCHAR(20),
    license_plate VARCHAR(20),
    PRIMARY KEY (id)
);

-- Criando a tabela drivers
CREATE TABLE IF NOT EXISTS drivers (
	id INTEGER AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS drivers_cars ( 
  driver_id INTEGER NOT NULL,
  car_id INTEGER NOT NULL,
    FOREIGN KEY (driver_id)
      REFERENCES drivers(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE, 
    FOREIGN KEY (car_id) 
    REFERENCES cars(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
);

-- Criando a tabela travels
CREATE TABLE IF NOT EXISTS travels (
	id INTEGER NOT NULL AUTO_INCREMENT,
    passenger_id INTEGER NOT NULL,
    driver_id INTEGER DEFAULT NULL,
    travel_status_id INTEGER DEFAULT 1,
    starting_address VARCHAR(100),
    ending_address VARCHAR(100),
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (passenger_id) 
		REFERENCES passengers(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (driver_id) 
		REFERENCES drivers(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (travel_status_id) 
		REFERENCES travel_status(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

-- Criando a tabela waypoints
CREATE TABLE IF NOT EXISTS waypoints (
	id INTEGER NOT NULL AUTO_INCREMENT,
    travel_id INTEGER NOT NULL,
    address VARCHAR(100) NOT NULL,
    stop_order INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (travel_id) 
		REFERENCES travels(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

-- Pré populando a tabela travel_status
INSERT INTO travel_status (name) VALUES 
	('Aguardando Motorista'), 
    ('Motorista a Caminho'), 
    ('Viagem em Andamento'), 
    ('Viagem Finalizada');

-- Pré populando a tabela passengers
INSERT INTO passengers (name, email, phone) VALUES 
	('Doriana Quintal', 'doriana.quintal@acme.com', '(49) 3882-3117'),
    ('Leo Sampaio', 'leo.sampaio@acme.com', '(66) 3692-7793'),
    ('Anabela Monteiro', 'anabela.monteiro@acme.com', '(49) 2134-2152'),
    ('Estêvão Paranhos', 'estevao.paranhos@acme.com', '(82) 2166-2413'),
    ('Mateo Vidigal', 'mateo.vidigal@acme.com', '(51) 2303-7355');

-- Pré populando a cars
INSERT INTO cars (model, color, license_plate) VALUES 
	('Renault Sandero', 'Branco', 'NCA-0956'),
    ('Volkswagen Gol', 'Vermelho', 'DZG-4376'),
    ('Chevrolet Onix', 'Prata', 'KBJ-2899'),
    ('Renault Logan', 'Azul', 'NFA-9035'),
    ('Fiat Siena', 'Cinza', 'HTH-9177'),
    ('Nissan Versa', 'Preto', 'BGY-6802');

-- Pré populando a tabela drivers
INSERT INTO drivers (name) VALUES 
	('Liana Cisneiros'),
    ('Fábio Frazão'),
    ('Anastacia Bicalho'),
    ('Samara Granjeiro'),
    ('Levi Teixeira');

INSERT INTO drivers_cars (driver_id, car_id) VALUES 
	(1, 1),
    (2, 2),
    (3, 3),
    (4, 4), 
    (5, 5),
    (5, 6);