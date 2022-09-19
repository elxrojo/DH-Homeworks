public class Tecnico {
    private String nombre;
    private String apellido;
    private int dni;
    private String legajo;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setDni(int dni) {
        this.dni = dni;
    }

    public void setLegajo(String legajo) {
        this.legajo = legajo;
    }

    public Tecnico(String nombre, String apellido, int dni, String legajo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.legajo = legajo;
    }
}
