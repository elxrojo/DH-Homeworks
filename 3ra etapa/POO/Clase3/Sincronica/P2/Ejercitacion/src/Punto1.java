import java.util.Scanner;

public class Punto1 {
    static Scanner scanner = new Scanner(System.in);

    public static int quienGana(int puntos1,int puntos2){
        if (puntos1 > puntos2){
            return 1;
        } else if (puntos2 >  puntos1) {
            return 2;
        } else {
            return 0;
        }
    }

    public static void main(String[] args) {

        System.out.println("Nombre Jugador uno:");
        String jugadorUno = scanner.nextLine();

        System.out.println("Nombre Jugador dos:");
        String jugadorDos = scanner.nextLine();
        int puntosJ1 = 0;
        int puntosJ2 = 0;
        String jugadaDelUno = "vacio";
        String jugadaDelDos = "vacio";


        while (!(jugadaDelDos.equals("*")) || !(jugadaDelUno.equals("*"))){
            System.out.println("Jugada de " + jugadorUno + " :");
            jugadaDelUno = scanner.nextLine().toLowerCase()  ;

            System.out.println("Jugada de " + jugadorDos + " :");
            jugadaDelDos = scanner.nextLine().toLowerCase();

            if ( jugadaDelUno.equals("tijera") && jugadaDelDos.equals("papel")){
                puntosJ1++;
            } else if (jugadaDelUno.equals("tijera") && jugadaDelDos.equals("tijera")){
                System.out.println("Empate");
            } else if (jugadaDelUno.equals("tijera") && jugadaDelDos.equals("piedra")) {
                puntosJ2++;
            } else if (jugadaDelUno.equals("piedra") && jugadaDelDos.equals("papel")){
                puntosJ2++;
            } else if (jugadaDelUno.equals("piedra") && jugadaDelDos.equals("tijera")){
               puntosJ1++;
            } else if (jugadaDelUno.equals("piedra") && jugadaDelDos.equals("piedra")) {
                System.out.println("Empate");
            } else if (jugadaDelUno.equals("papel") && jugadaDelDos.equals("papel")){
                System.out.println("Empate");
            } else if (jugadaDelUno.equals("papel") && jugadaDelDos.equals("tijera")){
                puntosJ2++;
            } else if (jugadaDelUno.equals("papel") && jugadaDelDos.equals("piedra")) {
                puntosJ1++;
            } else if (jugadaDelDos.equals("*") || jugadaDelUno.equals("*")){
                break;
            } else {
                System.out.println("Invalid game");
            }
            System.out.println( puntosJ1 + " || " + puntosJ2);
        }

        System.out.println(quienGana(puntosJ1,puntosJ2));
    }

}
