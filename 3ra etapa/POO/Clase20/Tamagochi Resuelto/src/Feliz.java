public class Feliz implements Estado {

    Tamagochi t;

    // Constructor que inyecta la dependencia en la clase actual
    public Feliz(Tamagochi t)
    {
        this.t = t;
        System.out.println("Feliz");
    }

    @Override
    public void come() {

    }

    @Override
    public void toma() {
        System.out.printf("Beep. Beep. Beep.");

    }

    @Override
    public void mimo() {

    }
}

