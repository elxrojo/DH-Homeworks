public abstract class Cargas {
    protected String nombre;
    protected String descripcion;

    protected Double peso;

    public Cargas(String nombre, String descripcion, Double peso) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.peso = peso;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public abstract Double calcularPeso();

}
