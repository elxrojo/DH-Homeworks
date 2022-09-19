
public class CuentaCorriente extends Cuenta{
	
	private double descubiertoPermitido;

	public CuentaCorriente(double saldo, double descubiertoPermitido) {
		super(saldo);
		this.descubiertoPermitido = descubiertoPermitido;
	}

	public double getDescubiertoPermitido() {
		return descubiertoPermitido;
	}



	public void setDescubiertoPermitido(double descubiertoPermitido) {
		this.descubiertoPermitido = descubiertoPermitido;
	}



	@Override
	public void extraer(double monto) {
		if(informarSaldo() + descubiertoPermitido <= monto)
			setSaldo(informarSaldo() - monto);
		
		
	}

}
