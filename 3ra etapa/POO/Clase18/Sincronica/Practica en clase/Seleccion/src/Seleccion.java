import java.util.ArrayList;

public class Seleccion {
    private String nombre;
    private ArrayList <Jugador> jugadores = new ArrayList<>();

    public Seleccion(String nombre) throws JugadorException {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public ArrayList<Jugador> getJugadores() {
        return jugadores;
    }

    public void setJugadores(ArrayList<Jugador> jugadores) {
        this.jugadores = jugadores;
    }

    public ArrayList<Jugador> obtenerReservas(){
        ArrayList<Jugador> reservas = new ArrayList<Jugador>();
        for (int i= 1; i<=this.jugadores.size() -1; i++ ){
            reservas.add(jugadores.get(i));
        }
        return reservas;
    }

    public void agregarJugador(Jugador jugador){
        this.jugadores.add(jugador);
    }

    public int cantJugadores(String posicion) throws JugadorException{
        int contador = 0;
        for (int i= 0; i<this.jugadores.size() ; i++ ){
            if(this.getJugadores().get(i).getPosicion().equalsIgnoreCase(posicion)){
                contador++;
            }
        }
        if(contador == 0){
            throw new JugadorException("No hay jugadores en " + posicion);
        }
        return contador;
    }




}
