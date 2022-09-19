public class JugadorException extends Exception{
    public JugadorException(String message) {
        super(message);
    }


    @Override
    public String toString() {
        return "Error perri "+ this.getClass().getName() + "Mensaje: " + this.getClass();
    }


}
