import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [activeView, setActiveView] = useState('book');

  // Conditional component rendering using variable
  let content;
  if (activeView === 'book') {
    content = <BookDetails />;
  } else if (activeView === 'blog') {
    content = <BlogDetails />;
  } else if (activeView === 'course') {
    content = <CourseDetails />;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>📘 Blogger App</h1>
      
      <div>
        <button onClick={() => setActiveView('book')}>Book Details</button>
        <button onClick={() => setActiveView('blog')}>Blog Details</button>
        <button onClick={() => setActiveView('course')}>Course Details</button>
      </div>

      <div style={{ marginTop: '30px' }}>

        {content}

       
      </div>
    </div>
  );
}

export default App;
