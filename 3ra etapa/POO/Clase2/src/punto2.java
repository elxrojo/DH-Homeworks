//Ejercicio 2
//        Escribir una función que reciba tres números y devuelva el máximo entre los tres números.
//        Integer maximoEntreTresNumeros(Integer unNumeroA, Integer unNumeroB, Integer
//        unNumeroC)
//        Luego hacer un programa que permita el ingreso de 3 valores, utilice la función y muestre
//        el resultado.

public class punto2 {

    public static String mayorDeTres (int num1, int num2, int num3){
        if (num1 > num2 && num1 > num3){
            return "El Mayor numero entre los tres es: " + num1;
        } else if (num2 > num1 && num2 > num3) {
            return "El Mayor numero entre los tres es: " + num2;
        } else {
            return "El Mayor numero entre los tres es: " + num3;
        }
    }

    public static void main(String[] args) {
        System.out.println(mayorDeTres(1,1,55));
    }
}
