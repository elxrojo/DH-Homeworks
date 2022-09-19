
public class Mascotas2doIntento {

    public static Double[] generadorDePaquetes(int limiteI){
        Double[] paquetes = new Double[limiteI];
        for (int i = 0; i < limiteI; i++){
            paquetes[i] = Math.round((Math.random() * 2.5)*100.0)/100.0 ;
        }
        return paquetes;
    }

    public static String cuantosPaquetes(Double[] arrayPaquetes, Double limitFood, String nombreMascota) {
        double sumaPaquetes = 0;
        int contadorPaquetes = 0;
        int contador = 0;
        while (sumaPaquetes<= limitFood){
            sumaPaquetes += arrayPaquetes[contador];
            System.out.println("Se le da de comer un paquete de " + Math.round(arrayPaquetes[contador]* 100.0 )/100.0 + " sumando un total de " + Math.round(sumaPaquetes * 100.0) /100.0);
            contadorPaquetes++;
            contador++;
        }
        if (sumaPaquetes > (limitFood + (limitFood*5.0)/100.0)){
            double excesoDeComida = sumaPaquetes - limitFood;
            sumaPaquetes -= excesoDeComida;
            System.out.println("Quitando exceso de comida (" +  excesoDeComida + ") ...");
        }
        return "La cantidad de paquetes que comerá "+ nombreMascota + " es de " + contadorPaquetes + " para completar sus " + limitFood + "Kg diarios";
    }

    public static void main(String[] args) {
        Double[] arrayGuardado = generadorDePaquetes(7);
        System.out.println(arrayGuardado);
        System.out.println(cuantosPaquetes(arrayGuardado, 4.0, "Firu"));

    }
}
