SELECT COUNT(id)
FROM clientes
WHERE pais LIKE 'Brazil';

SELECT COUNT(id_genero)
FROM canciones
WHERE id_genero = 6;

SELECT SUM(total)
FROM facturas;

SELECT AVG(milisegundos)
FROM canciones;

SELECT MIN(bytes)
FROM canciones;

SELECT SUM(total)
FROM facturas
WHERE total > 45;
	
