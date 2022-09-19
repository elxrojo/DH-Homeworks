public class Ejecutable {
    public static void main(String[] args) {
        Perros manchita = new Perros(true, "mestizo", 2020, 1.5, true, false,"Manchito" );
        Perros manchita2 = new Perros(false, "caniche", 2019, 6, false, false,"Cuchi");
        manchita.puedePerderse();
        manchita.averiguarEdad();
        manchita.puedeAdoptarse();

        manchita2.puedePerderse();
        manchita2.averiguarEdad();
        manchita2.puedeAdoptarse();
    }
}
