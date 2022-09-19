public class JugadorException extends Exception{
    public JugadorException(String message) {
        super(message);
    }

    @Override
    public String toString() {
        return "ERROR: " + getMessage();
    }
}
