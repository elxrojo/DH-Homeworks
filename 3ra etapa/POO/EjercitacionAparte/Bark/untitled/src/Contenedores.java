public class Contenedores extends Cargas{
    private Double pesoContenedor;

    public Contenedores(String nombre, String descripcion, Double peso, Double pesoContenedor) {
        super(nombre, descripcion, peso);
        this.pesoContenedor = pesoContenedor;
    }

    public Double getPesoContenedor() {
        return pesoContenedor;
    }

    public void setPesoContenedor(Double pesoContenedor) {
        this.pesoContenedor = pesoContenedor;
    }

    @Override
    public Double calcularPeso() {
        Double suma = this.pesoContenedor + this.peso;
        return suma;
    }
}
