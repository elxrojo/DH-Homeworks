public class Alumno {
    private String Nombre;
    private String Apellidp;
    private Integer Legajo;

    public Alumno(String nombre, String apellidp, Integer legajo) {
        Nombre = nombre;
        Apellidp = apellidp;
        Legajo = legajo;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getApellidp() {
        return Apellidp;
    }

    public void setApellidp(String apellidp) {
        Apellidp = apellidp;
    }

    public Integer getLegajo() {
        return Legajo;
    }

    public void setLegajo(Integer legajo) {
        Legajo = legajo;
    }
}
