//Ejercicio 3
//        Escribir una función:
//        boolean cadenasDeTextoDistintas(String unTextoA, String unTextoB)
//        que debe tomar dos cadenas de texto y devolver true, en caso de que sean distintos, o
//        false, en caso de que coincidan

public class punto3 {
    public static boolean cadenasDeTextoDistintas(String unTextoA, String unTextoB){
        return unTextoA.equals(unTextoB);
    }
    public static void main(String[] args) {
        System.out.println(cadenasDeTextoDistintas("hola", "hola"));
    }
}

