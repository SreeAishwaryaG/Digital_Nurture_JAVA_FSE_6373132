public class Financial {

    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        // Base case - No more years to grow
        if (years == 0) {
            return currentValue;
        }

        // Recursive step - apply annual growth and recurse
        return calculateFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    // Optimised approach for reducing time complexity

    public static double futureValueIterative(double currentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + growthRate);
        }
        return currentValue;
    }

    public static void main(String[] args) {
        double initialValue = 10000.0;
        double annualGrowthRate = 0.08;
        int numberOfYears = 5;

        double futureValue = calculateFutureValue(initialValue, annualGrowthRate, numberOfYears);
        double opfuturevalue = futureValueIterative(initialValue, annualGrowthRate, numberOfYears);

        System.out.printf("Future Value after %d years: ₹%.2f\n", numberOfYears, futureValue);
        System.out.printf("Future Value after %d years(Optimised approach): ₹%.2f\n", numberOfYears,
                opfuturevalue);
    }
}
