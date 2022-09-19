#punto1----------

SELECT COUNT(ClienteID)
FROM clientes;

#Punto2----------

SELECT COUNT(ClienteID), Ciudad
FROM CLIENTES
GROUP BY Ciudad;



SELECT SUM(Transporte)
FROM facturas;

SELECT SUM(EnvioVia)
FROM facturas;

SELECT COUNT(FacturaID), ClienteID
FROM facturas
GROUP BY ClienteID
ORDER BY COUNT(FacturaID) desc;

SELECT COUNT(FacturaID), ClienteID
FROM facturas
GROUP BY ClienteID
ORDER BY COUNT(FacturaID) desc
LIMIT 5;

SELECT COUNT(FacturaID), PaisEnvio
FROM facturas
GROUP BY PaisEnvio
ORDER BY COUNT(FacturaID) asc
LIMIT 1;

SELECT COUNT(FacturaID), EmpleadoID
FROM facturas
GROUP BY EmpleadoID
ORDER BY COUNT(FacturaID) desc
LIMIT 1;


SELECT COUNT(ProductoID) as "Cantidad Productos" , ProductoID
FROM facturadetalle
GROUP BY ProductoID
ORDER BY COUNT(ProductoID) desc
limit 1;

