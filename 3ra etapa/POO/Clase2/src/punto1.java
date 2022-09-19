// consigna: Hacer una función que dado un número indica si es un número primo o no. Un número
//        primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo,
//        ya que 25 es divisible por 1, 5 y 25. 17 sí es primo porque solo se puede dividir por 1 y por
//        17.

//        Usar esta función en un programa, que permita el ingreso de un número y luego llame a la
//        función desarrollada para comprobar si es primo o no. Para resolverlo usar la función
//        obtenida en el ejercicio desarrollado en la clase asincrónica. boolean esDivisible(int n, int
//        divisor)


import java.util.Scanner;

public class punto1 {
    public static String numeroPrimo(int numero ){

        if (numero == 1 || numero == 2 ||numero == 3 ||numero == 5||numero == 7){
            return "El numero " + numero + " es primo ";
        } else if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0){
            return "El numero " + numero + " no es primo.";
        } else {
            return "El numero " + numero + " es primo";
        }
    }

    public static void main(String[] args) {
        Scanner  numScaneado = new Scanner(System.in);
        System.out.println("Ingrese un numero:");
        int numIngresado = numScaneado.nextInt();
        System.out.println(numeroPrimo(numIngresado));
    }
}
