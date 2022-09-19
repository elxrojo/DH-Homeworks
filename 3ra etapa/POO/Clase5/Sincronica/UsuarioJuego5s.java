package clase5s;

public class UsuarioJuego5s {
    private String nombre;
    private String clave;
    private Double puntaje =0.0;
    private int nivel= 0;

    public UsuarioJuego5s(String nombre, String clave) {
        this.nombre = nombre;
        this.clave = clave;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public Double getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public void subirNivel (){
    this.nivel += 1;
    }
    public void aumentarPuntaje(){
    this.puntaje += 1;
    }
    public void bonus (int valor){
    this.puntaje += valor;
    }
}
