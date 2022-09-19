import java.util.Date;

public class Empleado implements Comparable<Empleado>{

    private String nombre;
    private Date fechaIncorporacion;
    private int edad;

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }


    public int calcularAntiguedad()
    {
        Date fechaActual = new Date();
        return fechaActual.getYear() - fechaIncorporacion.getYear();
    }

    public Date getFechaIncorporacion() {
        return fechaIncorporacion;
    }

    public void setFechaIncorporacion(Date fechaIncorporacion) {
        this.fechaIncorporacion = fechaIncorporacion;
    }

    public int compareTo(Empleado o) {
        return this.getEdad() - o.getEdad();
    }
}
