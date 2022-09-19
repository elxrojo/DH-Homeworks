
public class SxMes extends Contrato {
    private Double salarioMensual;
    private Double horastotal;
    private String cargo;

    public SxMes(Persona persona, Integer duracionMeses, String inicioAct, Boolean sellado, Double salarioMensual, Double horastotal, String cargo) {
        super(persona, duracionMeses, inicioAct, sellado);
        this.salarioMensual = salarioMensual;
        this.horastotal = horastotal;
        this.cargo = cargo;
    }

    public Double getSalarioMensual() {
        return salarioMensual;
    }

    public void setSalarioMensual(Double salarioMensual) {
        this.salarioMensual = salarioMensual;
    }

    public Double getHorastotal() {
        return horastotal;
    }

    public void setHorastotal(Double horastotal) {
        this.horastotal = horastotal;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Boolean esJefe(){
        Boolean valor = false;

        if (this.getCargo().equals("jefe"))
            valor = true;

        return valor;
    }

}
