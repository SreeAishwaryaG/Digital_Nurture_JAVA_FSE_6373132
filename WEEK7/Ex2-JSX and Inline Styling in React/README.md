# 🏢 Office Space Rental App (`officespacerentalapp`)

This React application demonstrates the usage of **JSX**, **inline CSS**, **React.createElement (via JSX abstraction)**, and **JavaScript expressions within JSX**. It simulates a simple office space rental dashboard showing details of featured and other available office spaces.

---

## 🎯 Objectives

- Define and understand **JSX**
- Explain **ECMAScript (ES6)** basics used in React
- Use `React.createElement()` via JSX abstraction
- Render React elements using JSX syntax
- Use JavaScript expressions inside JSX
- Apply **inline CSS** styling conditionally in JSX

---

## 🧪 What You'll Learn

- Using **JSX** to build UI elements
- Creating and displaying elements dynamically using object and list data
- Applying **inline conditional styling** based on business logic (rent amount)
- Rendering elements using `map()` inside JSX

---

## 🔧 Prerequisites

- Node.js
- NPM
- Visual Studio Code

---

## 🚀 Setup & Run

1. **Clone or create the app**:
   ```bash
   npx create-react-app officespacerentalapp
   cd officespacerentalapp

2. **Replace src/App.js content with the provided JSX-based component.**

    Start the application:
        npm start
    Open browser and navigate to:    
        http://localhost:3000

3. **Output Preview**
 A featured office space with image, rent, and address

    A dynamic list of other available office spaces
    
    Conditional rent color:
    
    Red if rent < 60,000
    
    Green if rent ≥ 60,000