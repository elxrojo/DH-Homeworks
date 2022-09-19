public class Espadachin extends Personaje {
    private int alcance;

    public void setAlcance(int alcance) {
        this.alcance = alcance;
    }

    public void usarEspada(){
        System.out.println("usando espada");
    }

    public Espadachin(int vida, String nombre, int danio, int alcance) {
        super(vida, nombre, danio);
        this.alcance = alcance;
    }
}
