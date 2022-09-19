public class Simples extends Cargas{
    private Boolean refrigeracion;

    public Simples(String nombre, String descripcion, Double peso, Boolean refrigeracion) {
        super(nombre, descripcion, peso);
        this.refrigeracion = refrigeracion;
    }



    @Override
    public Double calcularPeso() {
        if (this.refrigeracion.equals(true)) {
            return ((this.peso * 10) / 100);
        }
        return this.peso;
    }
}
