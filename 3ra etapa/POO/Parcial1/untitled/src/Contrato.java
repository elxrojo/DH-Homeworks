
public abstract class Contrato {
    protected Persona persona;
    protected Integer duracionMeses;
    protected String inicioAct;
    protected Boolean sellado;

    public Contrato(Persona persona, Integer duracionMeses, String inicioAct, Boolean sellado) {
        this.persona = persona;
        this.duracionMeses = duracionMeses;
        this.inicioAct = inicioAct;
        this.sellado = sellado;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Integer getDuracionMeses() {
        return duracionMeses;
    }

    public void setDuracionMeses(Integer duracionMeses) {
        this.duracionMeses = duracionMeses;
    }

    public String  getInicioAct() {
        return inicioAct;
    }

    public void setInicioAct(String inicioAct) {
        this.inicioAct = inicioAct;
    }

    public Boolean getSellado() {
        return sellado;
    }

    public void setSellado(Boolean sellado) {
        this.sellado = sellado;
    }

    public Boolean sellado(){
        return this.sellado;
    }

    public boolean trabaja(){
        return this.sellado;
    }

}
