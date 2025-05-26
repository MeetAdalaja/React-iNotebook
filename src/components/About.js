import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <h2>About This App</h2>
      <p>
        This is a secure Notes Management System built using the MERN stack (MongoDB, Express.js, React, Node.js). 
        The application allows users to register and log in securely using JWT authentication. Once authenticated, 
        users can create, read, update, and delete personal notes that are stored securely in a database.
      </p>
      <p>
        Key features include:
      </p>
      <ul>
        <li>User authentication and token-based session management</li>
        <li>Personalized notes with real-time CRUD operations</li>
        <li>Rich-text editing capabilities</li>
        <li>Responsive UI built with React and Bootstrap</li>
        <li>Scalable backend with Express and MongoDB</li>
        <li>Secure and isolated data access per user</li>
      </ul>
      <p>
        This system is ideal for managing your thoughts, tasks, and ideas across devices while ensuring data privacy and security.
      </p>
    </div>
  );
}

export default About;
