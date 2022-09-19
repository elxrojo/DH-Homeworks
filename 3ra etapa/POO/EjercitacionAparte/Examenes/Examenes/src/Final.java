
public class Final extends Examen implements Comparable{
    private Double NotaOral;
    private String Tema;

    public Final(Alumno alumno, String titulo, String enunciado, Double nota, Double notaOral, String tema) {
        super(alumno, titulo, enunciado, nota);
        NotaOral = notaOral;
        Tema = tema;
    }

    public Double getNotaOral() {
        return NotaOral;
    }

    public void setNotaOral(Double notaOral) {
        NotaOral = notaOral;
    }

    public String getTema() {
        return Tema;
    }

    public void setTema(String tema) {
        Tema = tema;
    }


    @Override
    public int compareTo(Object o) {
        Final f1 = (Final) o;
        int respuesta = 0;

        if ((f1.getNotaOral()+ f1.getNota()) > (this.getNotaOral()+ this.getNota()) ){
            return -1;
        }
        if ((f1.getNotaOral()+ f1.getNota()) < (this.getNotaOral()+ this.getNota())){
            return 1;
        }
        return respuesta;
    }
}
