public class mascotas {

    public static double[] paquetes = {1.2, 0.7, 1.1, 1.3};

    public static String cuantosPaquetes(double[] arrayPaquetes, int limitFood, String nombreMascota) {
        double sumaPaquetes = 0;
        int contadorPaquetes = 0;
        int contador = 0;
        while (sumaPaquetes<= limitFood){
            sumaPaquetes += paquetes[contador];
            contadorPaquetes++;
            contador++;
        }
        return "La cantidad de paquetes que comerá "+ nombreMascota + " es de " + contadorPaquetes;
    }

    public static void main(String[] args) {
        System.out.println(cuantosPaquetes(paquetes, 4, "Firu"));

    }
}
