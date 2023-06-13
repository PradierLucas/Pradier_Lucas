CREATE TABLE PAIS
(
  pais_id INT NOT NULL,
  nombre_pais VARCHAR(20) NOT NULL,
  PRIMARY KEY (pais_id)
);

CREATE TABLE PROVINCIA
(
  provincia_id INT NOT NULL,
  nombre_provincia VARCHAR(20) NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD
(
  codigo_localidad INT NOT NULL,
  nombre VARCHAR(20) NOT NULL,
  codigo_postal INT NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (codigo_localidad),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id)
);

CREATE TABLE EMPLEADO
(
  empleado_id INT NOT NULL,
  dni INT NOT NULL,
  nombre VARCHAR(20) NOT NULL,
  telefono INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  fecha_alta VARCHAR(20) NOT NULL,
  codigo_localidad INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_localidad) REFERENCES LOCALIDAD(codigo_localidad)
);

select * from empleado;
select * from localidad;
select * from pais;
select * from provincia;


insert into pais values(1,"Argentina");
insert into pais values(2,"Brasil");
insert into pais values(3,"Paraguay");

insert into provincia values(1,"Misiones",1);
insert into provincia values(2,"Corrientes",1);
insert into provincia values(3,"Chaco",1);

insert into localidad values(1,"Posadas",3300,1);
insert into localidad values(2,"Obera",1122,1);
insert into localidad values(3,"Iguazu",4561,1);


insert into empleado values(1,123456,"sergio",552255, "sergio@gmail.com" ,"01/02/2020",1);
insert into empleado values(2,45612,"Alan",789745, "alan@gmail.com" ,"05/06/2021",2);
insert into empleado values(3,78945,"Carla",4032656, "carla@gmail.com" ,"10/7/2020",3);