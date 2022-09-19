package clase5s;

import java.util.Scanner;

public class Ejecutable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Por favor, ingrese su Usuario: ");
        String nombre = scanner.nextLine();
        System.out.println("Por favor, ingrese su Clave: ");
        String clave = scanner.nextLine();
        System.out.println("Por favor, ingrese su Usuario: ");
        String nombre1 = scanner.nextLine();
        System.out.println("Por favor, ingrese su Clave: ");
        String clave1 = scanner.nextLine();
        System.out.println("Por favor, ingrese su Usuario: ");
        String nombre2 = scanner.nextLine();
        System.out.println("Por favor, ingrese su Clave: ");
        String clave2 = scanner.nextLine();

        UsuarioJuego5s kike = new UsuarioJuego5s(nombre,clave);
        UsuarioJuego5s sofi = new UsuarioJuego5s (nombre1,clave1);
        UsuarioJuego5s juanpi = new UsuarioJuego5s(nombre2,clave2);;

        System.out.println("Mi nombre es Enrique y podes encontrarme con el alias " + kike.getNombre() + ", teniendo como clave " + kike.getClave() + ". Arranque como cualquier jugador, en el nivel " + kike.getNivel() + " y con un puntaje de " + kike.getPuntaje()+ ".");
        System.out.println("Mi nombre es Sofia y podes encontrarme con el alias " + sofi.getNombre() + ", teniendo como clave " + sofi.getClave() + ". Arranque como cualquier jugador, en el nivel " + sofi.getNivel() + " y con un puntaje de " + sofi.getPuntaje()+ ".");
        System.out.println("Mi nombre es Juan Pablo y podes encontrarme con el alias " + juanpi.getNombre() + ", teniendo como clave " + juanpi.getClave() + ". Arranque como cualquier jugador, en el nivel " + juanpi.getNivel() + " y con un puntaje de " + juanpi.getPuntaje()+ ".");

        sofi.aumentarPuntaje();
        sofi.subirNivel();
        sofi.bonus(3000);

        juanpi.aumentarPuntaje();
        juanpi.subirNivel();
        juanpi.bonus(1500);

        kike.aumentarPuntaje();
        kike.subirNivel();
        kike.bonus(800);


        System.out.println("Despues de 7 min de juego, " + kike.getNombre() + " obtuvo un bonus, por lo que su puntaje quedo en " + kike.getPuntaje() + " y su nivel en " + kike.getNivel() + ".");
        System.out.println("Despues de 7 min de juego, " + sofi.getNombre() + " obtuvo un bonus, por lo que su puntaje quedo en " + sofi.getPuntaje() + " y su nivel en " + sofi.getNivel() + ".");
        System.out.println("Despues de 7 min de juego, " + juanpi.getNombre() + " obtuvo un bonus, por lo que su puntaje quedo en " + juanpi.getPuntaje() + " y su nivel en " + juanpi.getNivel() + ".");
}
}
