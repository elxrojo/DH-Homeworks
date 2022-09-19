import java.util.Scanner;

public class CuenteComitente extends Cuenta{
    private String CNV;



    public String getCNV() {
        return CNV;
    }

    public void setCNV(String CNV) {
        this.CNV = CNV;
    }

    public CuenteComitente(double saldo, String CNV) {
        super(saldo);
        this.CNV = CNV;
    }

    @Override
    public void extraer(double monto) {

        Scanner numScaneado = new Scanner(System.in);
        System.out.println("Ingrese un CNV:");
        String CNVingresado = numScaneado.nextLine();

        if(CNVingresado.equals(CNV)){
            this.setSaldo(this.getSaldo()-monto);
            System.out.println(" Se agrego exitosamente $" + monto + " por ende tu nuevo saldo es de $"+ getSaldo());
        } else {
            this.setSaldo(getSaldo()-(monto / 2));
            System.out.println(" Se intento agregar $" + monto + " por ende tu nuevo saldo es de $"+ getSaldo());
        }
    }


    @Override
    public void depositar(double monto) {
        Double porcentajeTotal = monto - (monto / 100);
        setSaldo( this.getSaldo() + porcentajeTotal);
        System.out.println(" tu saldo a agregar es " + porcentajeTotal + " y queda como total "+ this.getSaldo());
    }
}
