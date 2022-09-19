# Realizar una consulta de la facturación de e-market. Incluir la siguiente información:
# ● Id de la factura
# ● fecha de la factura
# ● nombre de la empresa de correo
# ● nombre del cliente
# ● categoría del producto vendido
# ● nombre del producto
# ● precio unitario
# ● cantidad

SELECT fac.FacturaID AS ID,
		fac.FechaFactura as Fecha,
        co.Compania as Compañia,
        cli.Contacto AS Contacto,
        cat.CategoriaNombre AS Categoria,
        p.ProductoNombre AS producto,
        p.PrecioUnitario AS Precio,
        fd.Cantidad 
        
FROM facturas fac
JOIN correos co ON co.CorreoID = fac.EnvioVia
JOIN clientes cli ON cli.ClienteID = fac.ClienteID
JOIN facturadetalle fd ON fd.FacturaID = fac.FacturaID
JOIN productos p ON p.ProductoID = fd.ProductoID
JOIN categorias cat ON cat.CategoriaID = p.CategoriaID;

SELECT c.CategoriaNombre AS Categoria, p.ProductoNombre AS Producto
FROM categorias c
LEFT JOIN productos p ON p.CategoriaID = c.CategoriaID;

SELECT c.*
FROM clientes c
LEFT JOIN facturas f ON f.ClienteID = c.ClienteID;


SELECT pd.ProductoNombre, cat.CategoriaNombre, pv.Compania, pv.Contacto
FROM productos pd
LEFT JOIN categorias cat ON cat.CategoriaID = pd.CategoriaID
LEFT JOIN proveedores pv ON pv.ProveedorID = pd.ProveedorID;

SELECT AVG(PrecioUnitario)
FROM productos

group by categorias 








