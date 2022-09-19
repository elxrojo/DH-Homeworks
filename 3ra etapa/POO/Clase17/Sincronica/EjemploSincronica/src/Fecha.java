public class Fecha {
    int day;
    int month;
    int year;

    public Fecha(int day, int month, int year) throws FechaException{
        if (day <= 1 || day >= 31)
            throw new FechaException("Dia no válido");
//        this.day = day;
//        this.month = month;
//        this.year = year;
    }


}
