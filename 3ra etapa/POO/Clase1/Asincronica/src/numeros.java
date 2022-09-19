public class numeros {
    public static String esDivisible(int num,int otroNum){
        if(num % otroNum == 0){
            return "El numero " + num + " es divisible por " + otroNum;
        } else{
            return "El numero " + num + " NO es divisible por " + otroNum;
        }
    };

    public static void main(String[] args) {
        int num1 = 20;
        int num2 = 5;

        System.out.println(esDivisible(num1, num2));
    }
}
