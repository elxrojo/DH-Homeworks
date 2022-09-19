import java.text.DateFormat;
import java.time.LocalDate;

public class Perros {
    private boolean adopcion;
    private String raza;
    private int año;
    private double peso;
    private boolean chip;
    private boolean lastimado;
    private String nombre;

    public Perros(boolean adopcion, String raza, int año, double peso, boolean chip, boolean lastimado, String nombre) {
        this.adopcion = adopcion;
        this.raza = raza;
        this.año = año;
        this.peso = peso;
        this.chip = chip;
        this.lastimado = lastimado;
        this.nombre = nombre;
    }

    public void puedePerderse(){
        if (this.chip == true){
            System.out.printf(this.nombre + " puede perderse.");
        }else{
            System.out.println(this.nombre + " no puede perderse");
        }
    }

    public void puedeAdoptarse(){
        if(!this.lastimado && this.peso > 5){
            System.out.println("El perro se puede adoptar...");
        }else{
            System.out.println("El perro no se puede adoptar...");
        }
    }

    public void averiguarEdad(){
        System.out.println("La edad de " + this.nombre + " es " + (2022 - this.getAño()) + " anios.");
    }

    public boolean isAdopcion() {
        return adopcion;
    }

    public void setAdopcion(boolean adopcion) {
        this.adopcion = adopcion;
    }

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }

    public int getAño() {
        return año;
    }

    public void setAño(int año) {
        this.año = año;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public boolean isChip() {
        return chip;
    }

    public void setChip(boolean chip) {
        this.chip = chip;
    }

    public boolean isLastimado() {
        return lastimado;
    }

    public void setLastimado(boolean lastimado) {
        this.lastimado = lastimado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
