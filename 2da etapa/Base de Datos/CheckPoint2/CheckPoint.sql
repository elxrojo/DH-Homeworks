# Camada: 0522TDBD1N1C8LAED0222PT
# Grupo Nro: 04
# Integrantes: Lorenzo Monje, Sofia Moneta, Tomas Davite, Federico Venturini.


#Pregunta 1
# Listar todas las reservas de hoteles realizadas en la ciudad de Nápoles
SELECT res.*, h.ciudad
FROM hoteles h
JOIN hotelesxreserva resxh ON resxh.idHotel = h.idhotel
JOIN reservas res ON res.idReserva = resxh.idReserva
WHERE h.ciudad LIKE "Nápoles";
#Rta: aparecen en total 6 resultados

#Pregunta 2
SELECT p.idpago, p.precioTotal, p.cantidadCuotas, mp.nombre
FROM pagos p
JOIN metodospago mp ON p.idMetodosPago = mp.idmetodospago
WHERE p.idMetodosPago = 3;
#Rta: Devuelve 19 reginstros

#Pregunta 3
# Listar la cantidad de reservas realizadas de acuerdo al método de pago.
SELECT count(res.idreserva) AS CantidadReservas, mp.nombre
FROM reservas res
JOIN pagos p ON p.idpago = res.idpago
JOIN metodospago mp  ON mp.idmetodospago = p.idmetodospago
group by mp.idmetodospago;
#Rta: son: 19	Efectivo, 24	Transferencia Bancaria, 19	Tarjeta de Crédito

#Pregunta 4
# Listar las reservas de los clientes cuyo pago lo hicieron a través de tarjeta de crédito, se pide mostrar el nombre, apellido, país y el método de pago.
SELECT  CONCAT(cli.nombres," ", cli.apellidos) AS NombreCompleto,
        ps.nombre AS Pais ,
		mp.nombre AS MetodoPago,
        res.idreserva
FROM reservas res
JOIN clientes cli ON cli.idcliente = res.idCliente
JOIN pagos p ON p.idpago = res.idpago
JOIN metodospago mp ON mp.idmetodospago = p.idMetodosPago
JOIN paises ps ON ps.idpais = cli.idPais
WHERE mp.nombre = "Tarjeta de Crédito";
# RTA: El primer resultado nos da a Agustin Rodriguez proveniente de ARG con el pago de Tarjeta de Crédito 	con el id de reserva 2

#Pregunta 5
# Listar la cantidad de reservas de hoteles por país, se necesita mostrar el nombre del país y la cantidad
SELECT Count(hxr.idhotelesxreserva) AS CantidadReservas, p.nombre AS Pais
FROM hotelesxreserva hxr
JOIN hoteles h ON h.idhotel = hxr.idhotel
JOIN paises p ON p.idpais = h.idPais
group by p.nombre;
#Rta: son 5	de Colombia, 1 dePerú ,5 de	Argentina, 5 de Chile, 8 de Ecuador, 1 de Grecia,4 de Bolivia, 6 de Italia


#Pregunta 6
SELECT cl.nombres, cl.apellidos, cl.numeroPasaporte, cl.ciudad, p.nombre
FROM clientes cl
JOIN paises p ON cl.idPais = p.idpais
WHERE p.nombre = 'Perú';

#Pregunta 7
SELECT count(res.idreserva) AS CantidadReservas,
	mp.nombre,
    CONCAT(cli.nombres, " ",  cli.apellidos) AS nombreCompleto
FROM reservas res
JOIN pagos p ON p.idpago = res.idpago
JOIN metodospago mp  ON mp.idmetodospago = p.idmetodospago
JOIN clientes cli ON cli.idcliente = res.idcliente
group by mp.nombre, nombreCompleto;
# RTA: El primer cliente que aparece nos dice que hizo 2 reservas con efectivo y 2 reservas con tarjeta de débito

#Pregunta 8
# Mostrar la cantidad de   clientes por   país, se necesita visualizar el nombre del país y la cantidad de clientes.
SELECT COUNT(cli.idcliente) as cantidadClientes ,p.nombre AS pais
FROM clientes cli
JOIN paises p ON p.idPais = cli.idPais
group by p.idpais;
# RTA: Los resultados de los 3 primeros son 13 de Argentina, 4	de Bolivia, 7 de Chile

#Pregunta 9
SELECT r.idReserva, h.nombre, h.direccion, h.ciudad, p.nombre AS Pais, tp.nombre AS TipoDePension
FROM reservas r	
JOIN hotelesxreserva hr ON hr.idReserva = r.idreserva
JOIN hoteles h ON hr.idHotel = h.idHotel
JOIN paises p ON p.idpais = h.idpais
JOIN tiposhospedaje tp ON tp.idtiposhospedaje = hr.idTiposHospedaje
WHERE tp.nombre = "Media Pensión";
#Devuelve 22 resultados

#Pregunta 10
# Mostrar por cada método de pago el monto total obtenido,se pide visualizar el nombre del método de pago y el total.
SELECT mp.nombre, concat("$",sum(p.precioTotal)) AS Ganancia
FROM reservas res
JOIN pagos p ON p.idpago = res.idpago
JOIN metodospago mp  ON mp.idmetodospago = p.idmetodospago
group by mp.idmetodospago;
# RTA: El monto total de cada metodo es: en Efectivo $39067,  en  Tarjeta de Crédito	$36196, y en Transferencia Bancaria	$48704

#Pregunta 11
SELECT s.ciudad, SUM(p.precioTotal) AS "TOTAL MENDOZA"
FROM pagos p
INNER JOIN reservas re ON re.idpago = p.idpago
INNER JOIN sucursales s ON s.idSucursal = re.idSucursal
WHERE s.ciudad = "Mendoza";
#Rta: La suma de pagos de la sucursal Mendoza es $19626.

#Pregunta 12
SELECT * 
FROM clientes c
LEFT JOIN reservas r ON c.idcliente = r.idCliente
WHERE r.idreserva IS NULL;
# Devuelve 33 registros

#Pregunta 13
SELECT re.idreserva, v.idvuelo , v.fechaPartida, v.fechaLlegada, re.fechaRegistro AS FechaReserva
FROM reservas re
INNER JOIN vuelosxreserva vxr ON vxr.idReserva = re.idreserva
INNER JOIN vuelos v ON v.idvuelo = vxr.idVuelo
WHERE v.origen = 'CHILE' AND v.destino = 'ECUADOR';
# Devuelve 3 registros

#Pregunta 14
SELECT h.nombre, h.cantidadHabitaciones, pa.nombre
FROM hoteles h
JOIN paises pa ON pa.idpais = h.idPais
WHERE cantidadHabitaciones BETWEEN 30 AND 70 AND pa.nombre = "Argentina";
#Rta: Devuelve 3 hoteles con esas caracteristicas.

#Pregunta 15
SELECT h.nombre, sum(r.idreserva) AS CantidadReservas
FROM hoteles h
JOIN hotelesxreserva hr ON hr.idHotel = h.idHotel
JOIN reservas r ON r.idreserva = hr.idReserva
GROUP BY h.nombre
ORDER BY CantidadReservas DESC
LIMIT 10;
#Rta: El hotel con mas reservas, es el Hotel Caesar August

#Pregunta 16
SELECT c.nombres, c.apellidos, mp.nombre
FROM clientes c
INNER JOIN reservas r ON r.idCliente = c.idcliente
INNER JOIN pagos p ON p.idpago = r.idPago
INNER JOIN metodospago mp ON mp.idmetodospago = p.idMetodosPago
ORDER BY c.apellidos ASC;
# Devuelve 62 registros

#Pregunta 17
SELECT v.origen, count(r.idreserva)
FROM reservas r
JOIN vuelosxreserva vr ON vr.idReserva = r.idreserva
JOIN vuelos v ON v.idvuelo = vr.idvuelo
WHERE extract(hour FROM r.fechaRegistro) = 18 AND (v.origen = "Argentina" OR v.origen = "Colombia")
GROUP BY v.origen;
#Rta: Hay 1 vuelos a las 18 horas desde Argentina y 1 desde Colombia.

#Pregunta 18
SELECT p.nombre AS NombrePais, SUM(pg.precioTotal) AS SumaTotal
FROM sucursales s
INNER JOIN paises p ON s.idPais = p.idpais
INNER JOIN reservas re ON re.idSucursal = s.idSucursal
INNER JOIN pagos pg ON re.idPago = pg.idpago
GROUP BY  p.nombre
ORDER BY sumaTotal DESC;
#Devuelve 2 registros

#Pregunta 19
SELECT *
FROM paises p
LEFT JOIN clientes c ON c.idPais = p.idpais
WHERE c.idcliente IS NULL
ORDER BY p.nombre DESC;
#Devuelve 19 registros

#Pregunta 20
SELECT h.nombre, count(hxr.idReserva) AS CantReserva
FROM hoteles h
INNER JOIN hotelesxreserva hxr ON hxr.idhotel = h.idhotel
INNER JOIN reservas r ON r.idReserva = hxr.idReserva
GROUP BY h.nombre
HAVING CantReserva > 2 ;
# Devuelve 4 registros