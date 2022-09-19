//        Ingresá tu nombre y tu apellido por separado, a partir de estas variables debés obtener en
//        una tercera tus iniciales.

import java.util.Scanner;

public class Punto4 {
    public static void main(String[] args) {
        String nombre;
        String apellido;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese su nombre: ");
        nombre = scanner.nextLine();

        System.out.println("Ingrese su apellido: ");
        apellido = scanner.nextLine();

        String iniciales1 = nombre.charAt(0) + "" + apellido.charAt(0);
        System.out.println(iniciales1);

    }
}
