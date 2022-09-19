
public class Main {

    public static void main(String[] args) {

        // Personas
        Persona tipo1 = new Persona("Juana","Castillo", 454655,21 );
        Persona tipo2 = new Persona("Juan","Fernandez", 154455,50 );
        Persona tipo3 = new Persona("Osvaldo","Herrera", 455655,25 );
        Persona tipo4 = new Persona("Osvaldo","Herrera", 455655,25 );

        // Contratos por hora
        SxHoras contrato1 = new SxHoras(tipo1,16,"03/11/20", true, 36.0,100.50 );
        SxHoras contrato4 = new SxHoras(tipo4,4,"03/01/22", false, 8.0,20.50 );

        // contrato por mes
        SxMes contrato2 = new SxMes(tipo2, 15,"17/06/20",false, 500.05,100.0,"supervisor");
        SxMes contrato3 = new SxMes(tipo3, 86,"17/06/10",true, 822.05,150.0,"jefe");


        System.out.println(contrato1.compareTo(contrato4));
        System.out.println(contrato3.esJefe());
        System.out.println(contrato1.trabaja());
    }
}
