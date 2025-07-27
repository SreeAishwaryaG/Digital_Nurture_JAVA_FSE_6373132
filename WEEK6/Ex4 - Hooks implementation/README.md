## 📘 Description

This project demonstrates the use of **React Class Components** to fetch and display blog posts from an external API.

### 🛠 Steps to Implement

1. **Create a new React application** using the following command:

   ```bash
   npx create-react-app blogapp

        Create a new file Post.js inside the src folder.
        
        This component will receive title and body props to display individual post content.
        
        Create a new class-based component Posts in Posts.js.
        
        Initialize the component state inside the constructor with an empty posts array.
        
        Define the loadPosts() method to fetch data from the API:
        https://jsonplaceholder.typicode.com/posts.
        
        Use the componentDidMount() lifecycle hook to call loadPosts() and load data after the component mounts.
        
        Render the posts using the render() method:
        
        Iterate over the posts array and display each post using the Post component.
        
        Implement componentDidCatch() to handle any rendering errors and display an alert.
        
        Import and add the Posts component to the main App.js component.
        
        Run the application using the following command:

          npm start
