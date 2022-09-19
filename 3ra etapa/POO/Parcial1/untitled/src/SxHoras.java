
public class SxHoras extends Contrato implements Comparable{
    private Double horasxMes;
    private Double valorxHora;

    public SxHoras(Persona persona, Integer duracionMeses, String inicioAct, Boolean sellado, Double horasxMes, Double valorxHora) {
        super(persona, duracionMeses, inicioAct, sellado);
        this.horasxMes = horasxMes;
        this.valorxHora = valorxHora;
    }

    public Double getHorasxMes() {
        return horasxMes;
    }

    public void setHorasxMes(Double horasxMes) {
        this.horasxMes = horasxMes;
    }

    public Double getValorxHora() {
        return valorxHora;
    }

    public void setValorxHora(Double valorxHora) {
        this.valorxHora = valorxHora;
    }

    @Override
    public int compareTo(Object o) {
        SxHoras contrato1 = (SxHoras) o;
        Integer valor = 0;

        if (this.horasxMes > contrato1.horasxMes )
            valor = 1;

        if (this.horasxMes < contrato1.horasxMes)
            valor = - 1;

        return valor;
    }
}
