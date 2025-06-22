import java.util.Arrays;
import java.util.*;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Chair", "Furniture"),
                new Product(103, "Book", "Education"),
                new Product(104, "Pen", "Stationery")
        };

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        System.err.println("Enter id to search :");
        int searchId = sc.nextInt();

        Product result1 = ProductSearch.linearSearch(products, searchId);
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        Product result2 = ProductSearch.binarySearch(products, searchId);
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
