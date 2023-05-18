import java.util.Scanner;

public class IsoscelesTriangle {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Masukkan panjang sisi segitiga sama kaki: ");
            double side = scanner.nextDouble();

            double hypotenuse = Math.sqrt(2 * Math.pow(side, 2));
            System.out.println("Panjang sisi miring segitiga sama kaki adalah: " + hypotenuse);
        }
    }
}