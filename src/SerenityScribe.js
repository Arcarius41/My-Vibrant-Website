// src/SerenityScribe.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SerenityScribe.css';

function SerenityScribe() {
  return (
    <div className="container py-5">
      <h2 className="text-center">Serenity Scribe Project</h2>
      <p className="lead text-center">
        Serenity Scribe is a comprehensive full-stack journaling application designed to help users track their daily moods and journal entries. The project leverages several technologies to deliver a seamless user experience:
      </p>
      <div className="project-details">
        <h3>Technologies Used</h3>
        <ul>
          <li><strong>Front-End:</strong> Built with React, ensuring a dynamic and responsive user interface. Bootstrap is utilized for styling, providing a clean and modern look.</li>
          <li><strong>Back-End API:</strong> Developed using Flask, which handles the server-side logic and provides RESTful endpoints for client-server communication.</li>
          <li><strong>Database:</strong> Utilizes PostgreSQL for reliable data storage, with SQLAlchemy as the ORM to manage database operations efficiently.</li>
          <li><strong>Authentication:</strong> Implements user registration, login, and logout functionalities using Flask-Bcrypt for password hashing and Flask-JWT-Extended for handling JSON Web Tokens (JWT) for secure user sessions.</li>
          <li><strong>Editor Plugin:</strong> The journal entry editor is implemented using <a href="https://www.tiny.cloud/" target="_blank" rel="noopener noreferrer">TinyMCE</a>, a powerful rich-text editor that provides a user-friendly interface for creating and formatting journal entries.</li>
        </ul>
        <h3>Key Features</h3>
        <ul>
          <li><strong>User Authentication:</strong> Secure user registration, login, and logout processes.</li>
          <li><strong>Mood Tracking:</strong> Users can record their daily moods and add journal entries.</li>
          <li><strong>Rich Text Editor:</strong> Integrated with TinyMCE for an enhanced journal writing experience.</li>
          <li><strong>Responsive Design:</strong> The front-end adapts to various screen sizes, ensuring usability across devices.</li>
          <li><strong>Data Security:</strong> User data is securely stored and managed with industry-standard practices.</li>
        </ul>
        <p className="lead text-center">
          You can explore the project's code and details on the <a href="https://github.com/Arcarius41/Albert_Derek_Scott-Mood-Journal" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
        </p>
      </div>
    </div>
  );
}

export default SerenityScribe;
