import java.util.ArrayDeque;
import  java.util.LinkedList;

public class Punto3 {
    public static String mostrarNPrimos(int limit){
        LinkedList<Integer> arrayPrimos = new LinkedList<Integer>{};
        while (arrayPrimos.size < limit){
            int i = 0;
            int cantArray = 0;
            if(i == 2 || i == 3 || i == 5 || i == 7){
                arrayPrimos[cantArray] = arrayPrimos.addLast(i); ;
                cantArray++;
                System.out.println(i);
            } else if (i % 2 == 0 || i % 3== 0 || i % 5 == 0 || i % 7 == 0) {
                arrayPrimos[cantArray] = i;
                cantArray++;
                System.out.println(i);
            }
        }
        String arrayStringeado = arrayPrimos.toString();
        return "Los primeros " + limit + " numeros primos son: " + arrayStringeado;
    }

    public static void main(String[] args) {
        System.out.println(mostrarNPrimos(10));

    }


}
