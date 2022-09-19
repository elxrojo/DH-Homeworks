import java.util.ArrayList;
import java.util.List;

public class Empresa {

    public void incorporarEmpleado(Empleado empleado){
        empleados.add(empleado);
    }


    private String razonSocial;
    private List<Empleado> empleados = new ArrayList<>();

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public List<Empleado> getEmpleados() {
        return empleados;
    }

    public void setEmpleados(List<Empleado> empleados) {
        this.empleados = empleados;
    }

    public void mostrarEmpleados(){
        /*recorremos la lista de empleados. Como usamos Generics directamente recorremos
         * empledos y no object*/
        for(Empleado empleado : empleados)
            System.out.println(empleado.getNombre());
    }

    public void mostrarEmpleadosOrdenadosPorEdad()
    {
        empleados.sort(null);
        mostrarEmpleados();
    }


}
