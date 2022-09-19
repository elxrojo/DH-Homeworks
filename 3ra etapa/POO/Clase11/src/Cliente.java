public class Cliente {
    private String apellido;
    private int nroCliente;
    private int dni;
    private int cuit;

    public Cliente(String apellido, int nroCliente, int dni, int cuit) {
        this.apellido = apellido;
        this.nroCliente = nroCliente;
        this.dni = dni;
        this.cuit = cuit;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getNroCliente() {
        return nroCliente;
    }

    public void setNroCliente(int nroCliente) {
        this.nroCliente = nroCliente;
    }

    public int getDni() {
        return dni;
    }

    public void setDni(int dni) {
        this.dni = dni;
    }

    public int getCuit() {
        return cuit;
    }

    public void setCuit(int cuit) {
        this.cuit = cuit;
    }
}
