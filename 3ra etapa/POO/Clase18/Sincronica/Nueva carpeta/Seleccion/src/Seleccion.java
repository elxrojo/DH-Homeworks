import java.util.ArrayList;
import java.util.Locale;

public class Seleccion {
    private String nombre;
    private ArrayList <Jugador> jugadores = new ArrayList<>();

    public Seleccion(String nombre) {
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
        for (int i= 1; i<=this.jugadores.size() - 1; i++ ){
            reservas.add(jugadores.get(i));
        }
        return reservas;
    }
    public int cantJugadores(String posicion) throws JugadorException{
        int cantidad = 0;
        for(int i=0; i < this.getJugadores().size(); i++){
            if(this.getJugadores().get(i).getPosicion().equalsIgnoreCase(posicion)){
                cantidad++;
            }
        }
        if(cantidad > 0)
            return cantidad;
        else
            throw new JugadorException("INGRESE UNA POSICION VALIDA");
    }

    public void agregarJugador(Jugador jugador){
        this.jugadores.add(jugador);
    }

}
