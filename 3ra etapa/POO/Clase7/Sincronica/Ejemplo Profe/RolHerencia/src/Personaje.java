public class Personaje {
    private int vida;
    private String nombre;
    private int danio;

    public Personaje(int vida, String nombre, int danio) {
        this.vida = vida;
        this.nombre = nombre;
        this.danio = danio;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDanio(int danio) {
        this.danio = danio;
    }

    public int getVida() {
        return vida;
    }

    public String getNombre() {
        return nombre;
    }

    public int getDanio() {
        return danio;
    }

    public void pegar(){
        System.out.println("pegando");
    }
}
