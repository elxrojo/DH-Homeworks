public class Parcial extends Examen {
    private int Unidad;
    int intentos = 0;

    public Parcial(Alumno alumno, String titulo, String enunciado, Double nota, int unidad) {
        super(alumno, titulo, enunciado, nota);
        Unidad = unidad;
    }

    public int getUnidad() {
        return Unidad;
    }

    public void setUnidad(int unidad) {
        Unidad = unidad;
    }


    public Boolean Recuperar(){

        if (getUnidad()<=3 && intentos <= 3){
            intentos++;
            return true;
        } else if (getUnidad()>3 && intentos <= 2) {
            intentos++;
            return true;
        } else {
            return false;
        }
    }

}
