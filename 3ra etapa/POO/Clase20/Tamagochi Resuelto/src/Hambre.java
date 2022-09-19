public class Hambre implements Estado {

    Tamagochi t;

    // Constructor que inyecta la dependencia en la clase actual
    public Hambre(Tamagochi t)
    {
        this.t = t;
        System.out.println("Hambre");
    }

    @Override
    public void come() {
        t.setEstado(new Feliz(t));
    }

    @Override
    public void toma() {

    }

    @Override
    public void mimo() {

    }
}

