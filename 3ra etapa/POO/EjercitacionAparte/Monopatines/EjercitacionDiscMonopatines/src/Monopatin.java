import java.util.Date;

public abstract class Monopatin  {
    protected Tecnico tecnico;
    protected Date inicioReparacion;
    protected Date limiteReparacion;
    protected Date inicioReparacionReal;
    protected Date ReparacionRealFinal;
    protected String estado;

    public Monopatin(Tecnico tecnico, Date inicioReparacion, Date limiteReparacion, Date inicioReparacionReal, Date reparacionRealFinal, String estado) {
        this.tecnico = tecnico;
        this.inicioReparacion = inicioReparacion;
        this.limiteReparacion = limiteReparacion;
        this.inicioReparacionReal = inicioReparacionReal;
        ReparacionRealFinal = reparacionRealFinal;
        this.estado = estado;
    }

    public Tecnico getTecnico() {
        return tecnico;
    }

    public void setTecnico(Tecnico tecnico) {
        this.tecnico = tecnico;
    }

    public Date getInicioReparacion() {
        return inicioReparacion;
    }

    public void setInicioReparacion(Date inicioReparacion) {
        this.inicioReparacion = inicioReparacion;
    }

    public Date getLimiteReparacion() {
        return limiteReparacion;
    }

    public void setLimiteReparacion(Date limiteReparacion) {
        this.limiteReparacion = limiteReparacion;
    }

    public Date getInicioReparacionReal() {
        return inicioReparacionReal;
    }

    public void setInicioReparacionReal(Date inicioReparacionReal) {
        this.inicioReparacionReal = inicioReparacionReal;
    }

    public Date getReparacionRealFinal() {
        return ReparacionRealFinal;
    }

    public void setReparacionRealFinal(Date reparacionRealFinal) {
        ReparacionRealFinal = reparacionRealFinal;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public boolean ReparadoATiempo(){
       return;
    }
}
