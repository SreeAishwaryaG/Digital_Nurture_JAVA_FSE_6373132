```
# Account Microservice

This microservice provides dummy account details based on account number. It is one of two microservices in a basic banking application exercise.

---

## Project Info

- **Group:** com.cognizant
- **Artifact:** account
- **Dependencies:** Spring Web, Spring Boot DevTools
- **Port:** 8080 (default)

---

## API Endpoint

- **GET** `/accounts/{number}`  
  Returns account details for the given account number.

### Example
GET http://localhost:8080/accounts/00987987973432


### Sample Response
```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}
