public class Tamagochi {
    private Estado estado;

    public Tamagochi() {
        this.setEstado(new Hambre(this));
    }
    public void come() {
        getEstado().come();
    }

    public void toma() {
        getEstado().toma();
    }

    public void mimo() {
        getEstado().mimo();
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
}

