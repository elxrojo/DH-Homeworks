
public class PrincipalMain {

	public static void main(String[] args) {

		CuenteComitente c1 = new CuenteComitente(1000,"Contrasena123");
		c1.depositar(500);

		c1.extraer(500);

		c1.extraer(500);

	}
}
