public class FechaException extends Exception{

    public FechaException(String message) {
        super(message);
    }

    @Override
    public String toString() {
        return "Se produjo un error de tipo " + this.getClass().getName() + " Mensaje : "+this.getClass();
    }
}
