public class CajaDeAhorro extends Cuentas{
    private double tasaDeInteres;

    public CajaDeAhorro(int saldo, Cliente cliente, int tasaDeInteres) {
        super(saldo, cliente);
        this.tasaDeInteres = tasaDeInteres;
    }

    public double getTasaDeInteres() {
        return tasaDeInteres;
    }

    public void setTasaDeInteres(int tasaDeInteres) {
        this.tasaDeInteres = tasaDeInteres;
    }

    @Override
    public void extraerEfectivo(int valor) {
        if(valor > this.saldo){
            System.out.println("Saldo insuficiente");
        }else {
            this.setSaldo(this.saldo - valor);
        }
        System.out.println("Usted retiro $"+valor+" Su saldo actual es de "+this.saldo);
    }

    public void cobrarInteres(){
        double valor = (this.getSaldo() * this.getTasaDeInteres()) / 100;
        System.out.println("Usted va a cobrar de sus intereses $"+valor);
    }
}
