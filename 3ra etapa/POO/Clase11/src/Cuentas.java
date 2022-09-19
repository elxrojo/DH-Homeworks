public abstract class Cuentas {
    protected int saldo;
    protected Cliente cliente;

    public Cuentas(int saldo, Cliente cliente) {
        this.saldo = saldo;
        this.cliente = cliente;
    }

    public int getSaldo() {
        return saldo;
    }

    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void depositarEfectivo(int valor) {
        this.setSaldo(this.saldo+valor);
        System.out.println("Usted ingreso $"+valor+" Su saldo actual es de "+this.saldo);
    }
    public abstract void extraerEfectivo(int valor);

    @Override
    public String toString() {
        return "Cuentas{" +
                "saldo=" + saldo +
                ", cliente=" + cliente +
                '}';
    }
}
