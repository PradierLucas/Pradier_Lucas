CREATE TABLE ALUMNO
(
  fecha_nac VARCHAR(20) NOT NULL,
  dni INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  cod_matricula INT NOT NULL,
  nombre VARCHAR(20) NOT NULL,
  PRIMARY KEY (cod_matricula)
);

CREATE TABLE CURSO
(
  nombre VARCHAR(50) NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (cod_curso)
);

CREATE TABLE PROFESOR
(
  email VARCHAR(50) NOT NULL,
  especialidad VARCHAR(20) NOT NULL,
  nombre VARCHAR(20) NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE INSCRIPTO
(
  cod_matricula INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (cod_matricula, cod_curso),
  FOREIGN KEY (cod_matricula) REFERENCES ALUMNO(cod_matricula),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso)
);

CREATE TABLE IMPARTIDO
(
  cod_curso INT NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (cod_curso, profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id)
);

select * from alumno;
select * from curso;
select * from profesor;

insert into alumno values("25/08/78",123456,"sergio@gmail.com",2,"segio");
insert into alumno values("10/06/97",546484,"lucas@gmail.com",1,"lucas");
insert into alumno values("05/06/85",784552,"jorge@gmail.com",3,"jorge");

insert into curso values("Programacion",1);
insert into curso values("Ingles",2);
insert into curso values("SQL",3);

insert into profesor values("carlos@gmail.com","Programacion","carlos",1);
insert into profesor values("miguel@gmail.com","SQL","miguel",2);
insert into profesor values("laura@gmail.com","Ingles","Laura",3);

