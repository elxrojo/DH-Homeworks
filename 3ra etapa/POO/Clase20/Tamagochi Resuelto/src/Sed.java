public class Sed  implements Estado {

    Tamagochi t;

    // Constructor que inyecta la dependencia en la clase actual
    public Sed(Tamagochi t)
    {
        this.t = t;
        System.out.println("Sed");
    }

    @Override
    public void come() {

    }

    @Override
    public void toma() {
        t.setEstado(new Feliz(t));

    }

    @Override
    public void mimo() {

    }
}
