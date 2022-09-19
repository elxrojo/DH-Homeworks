public class CuentaCorriente extends Cuentas{
    private double montoAutorizado;

    public CuentaCorriente(int saldo, Cliente cliente, double montoAutorizado) {
        super(saldo, cliente);
        this.montoAutorizado = montoAutorizado;
    }

    public double getMontoAutorizado() {
        return montoAutorizado;
    }

    public void setMontoAutorizado(double montoAutorizado) {
        this.montoAutorizado = montoAutorizado;
    }

    @Override
    public void extraerEfectivo(int valor) {
        double saldoTotal = this.saldo + this.getMontoAutorizado();
        if(valor > saldoTotal){
            System.out.println("No puede retirar esa cantidad de dinero");
        }else if(valor > this.saldo){
            double desc = valor - this.saldo;
            double v= desc + this.getMontoAutorizado();
            this.setMontoAutorizado(v);
            System.out.println("Su monto autorizado quedo en $"+this.getMontoAutorizado());
        }else {
            this.setSaldo(this.saldo - valor);
            System.out.println(this.getSaldo());
        }
    }
}
