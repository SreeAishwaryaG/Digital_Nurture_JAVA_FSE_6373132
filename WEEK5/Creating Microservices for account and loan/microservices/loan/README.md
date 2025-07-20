
```
#  Loan Microservice

This microservice provides dummy loan account details for a given loan number. It is designed to run alongside the Account Microservice in a microservices architecture.

---

##  Project Info

- **Group:** com.cognizant
- **Artifact:** loan
- **Dependencies:** Spring Web, Spring Boot DevTools
- **Port:** 8081 (configured via `application.properties`)

---

## API Endpoint

- **GET** `/loans/{number}`  
  Returns loan details for the given loan number.

###  Example

- **GET** http://localhost:8081/loans/H00987987972342


### 🔄 Sample Response
 ```json
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}

