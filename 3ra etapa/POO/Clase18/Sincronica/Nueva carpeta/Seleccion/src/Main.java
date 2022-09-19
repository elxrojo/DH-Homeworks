public class Main {
    public static void main(String[] args) throws JugadorException {
        Seleccion s1 = new Seleccion("Argentina");
        s1.agregarJugador(new Jugador("DELANTERO","Messi", 10));
        s1.agregarJugador(new Jugador("DEFENSOR","Romero", 6));
        s1.agregarJugador(new Jugador("MEDIOCAMPISTA","Paredes", 5));
        s1.agregarJugador(new Jugador("Arquero","Martinez", 19));
        try{
            System.out.println(s1.obtenerReservas());
            System.out.println(s1.cantJugadores("Arquero"));
        }catch(JugadorException excepcion){
            System.out.println(excepcion.toString());
        }



    }
}
