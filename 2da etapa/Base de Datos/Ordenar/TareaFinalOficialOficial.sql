INSERT INTO socio 
VALUES (1,	3000000,	"PATRICIA",	"JOHNSON", 	"28 MySQL Boulevard"	, "QLD");
INSERT INTO socio 
VALUES (2,	2988800,	"LINDA",	"WILLIAMS",	"23 Workhaven Lane",	"Alberta");
INSERT INTO socio 
VALUES (3,	2500000,	"BARBARA",	"JONES",	"1411 Lillydale Drive",	"QLD");
INSERT INTO socio 
VALUES (4,	32980002,	"LOIS",	"BUTLER",	"1688 Okara Way",	"Nothwest Border Prov");
INSERT INTO socio 
VALUES (5,	2313909,	"ROBIN",	"HAYES",	"262 A Corua (La Corua) Parkway",	"Dhaka");

/* separador -------------------------------------------------- */

INSERT INTO telefonoxsocio 
VALUES (1, "54911-45636453", 1);

INSERT INTO telefonoxsocio 
VALUES (2, "54-11-47867654", 2);

INSERT INTO telefonoxsocio 
VALUES (3, 11684736, 3);

INSERT INTO telefonoxsocio 
VALUES (4, 2645887755, 4);


/* separador -------------------------------------------------- */

INSERT INTO autor
values(1,"Rowling","J. K. ");

/* separador -------------------------------------------------- */

INSERT INTO editorial
values (1,    "Bloomsbury Publishing",    54911564874);
INSERT INTO editorial
values (2,    "Scholastic",    223483646);
INSERT INTO editorial
values (3,    "Pottermore Limited",    5694839582);
INSERT INTO editorial
values (4,    "Editorial Salamandra",     011-239-2343);


/* separador -------------------------------------------------- */


INSERT INTO libro
VALUES (1, 9781907545009,    "Harry Potter y la piedra filosofal",    "1997-01-01",    "1997-01-01", 4,  1 );
INSERT INTO libro
VALUES (2, 9781907545009,    "Harry Potter y la piedra filosofal",    "1997-01-01",    "1997-01-01", 4, 1);

/* separador -------------------------------------------------- */

INSERT INTO volumen
VALUES (1,    0,    1);
INSERT INTO volumen
VALUES (2,    1,    1);
INSERT INTO volumen
VALUES (3,    0,    2);


/* separador -------------------------------------------------- */

INSERT INTO prestamos
VALUES (1,    "1997-01-01",    "1997-01-01",    "1997-01-01",  1  );
INSERT INTO prestamos
VALUES (2,    "1997-01-01",    "1997-01-01",    "1997-01-01",  1  );
INSERT INTO prestamos
VALUES (3,    "1997-01-01",    "1997-01-01",    "1997-01-01",  2  );

/* separador -------------------------------------------------- */

INSERT INTO prestamoxvolumen
VALUES (1,	1,    1);
INSERT INTO prestamoxvolumen
VALUES (2,	2,    2);
INSERT INTO prestamoxvolumen
VALUES (3,	3,    1);
INSERT INTO prestamoxvolumen
VALUES (4,	3,    3);

/* separador -------------------------------------------------- */

DELETE FROM telefonoxsocio where Numero = "11684736";
DELETE FROM socio where Apellido = "BARBARA";
SELECT * FROM socio;
update socio SET direccion = "plaza sesamo" WHERE idSocio = 2










































