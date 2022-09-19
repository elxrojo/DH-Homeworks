public class Main {
    public static void main(String[] args) throws FechaException {
//
        // codigo con caso positivo
//        try {
//            Fecha n1=  new Fecha(30,10,2003);
//        } catch (FechaException e){
//            System.out.println(e.getMessage());
//        }


        // codigo con el Mensaje de error de Fecha Exception
//        try {
            Fecha n2= new Fecha(100, 10, 2003);
//        } catch (FechaException e){
//            System.out.println(e.getMessage());
//        }


        // codigo con el Mensaje de excepcion de Fecha
        try {
            Fecha n3= new Fecha(100, 10, 2003);
        } catch (FechaException e){
            System.out.println(e.getMessage());
        }
    }
}
