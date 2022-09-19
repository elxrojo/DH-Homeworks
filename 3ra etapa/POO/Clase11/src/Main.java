public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente("Test",200,65695626,26296262);
        Cuentas caja = new CajaDeAhorro(100,cliente,10);
        Cuentas cuenta = new CuentaCorriente(200,cliente,100);

        cuenta.extraerEfectivo(3000);
    }
}
