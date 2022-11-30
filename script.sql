DROP DATABASE IF EXISTS alunos;
CREATE DATABASE alunos;
USE alunos;

CREATE TABLE alunos (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(153) NOT NULL,
	nascimento VARCHAR(12) not null
);

CREATE TABLE cursos (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	curso VARCHAR(50) NOT NULL,
	duracao INTEGER NOT NULL
);

CREATE TABLE cursados (
	id_aluno INTEGER NOT NULL,
	id_curso INTEGER NOT NULL,
	data VARCHAR(12) NOT NULL,
	FOREIGN KEY (id_aluno) REFERENCES alunos (id),
	FOREIGN KEY (id_curso) REFERENCES alunos (id)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/avBack/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/avBack/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/avBack/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;