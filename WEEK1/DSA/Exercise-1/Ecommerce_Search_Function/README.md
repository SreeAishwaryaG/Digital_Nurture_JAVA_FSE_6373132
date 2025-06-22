#  E-commerce Product Search Optimization

This project demonstrates a basic **search functionality** for an e-commerce platform using two algorithms:
- **Linear Search**
- **Binary Search**

It highlights how different search strategies affect performance and when to use which.

---

##  Project Overview

The system allows you to search for a product by its **Product ID** from a list of products. Each product has:
- `productId`
- `productName`
- `category`


## Time Complexity Analysis

| Algorithm      | Best Case | Average Case | Worst Case |
|----------------|-----------|---------------|-------------|
| Linear Search  | O(1)      | O(n)          | O(n)        |
| Binary Search  | O(1)      | O(log n)      | O(log n)    |

### When to Use:
- **Linear Search**: When the dataset is small or unsorted.
- **Binary Search**: When the dataset is large **and sorted**.