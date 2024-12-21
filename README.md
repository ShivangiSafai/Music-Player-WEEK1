# Music-Player-WEEK1
The week1 task submission under Edunet Foundation in collaboration with EY GDS AND AICTE.
# Folder Structure
spotify-clone/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   └── user.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── userController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   └── app.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── styles/
│   │   │       └── tailwind.css
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── tailwind.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── .gitignore
└── README.md
# Tech Stack Used
Here are the technologies used in the **Spotify Clone** project, categorized point-wise:

1. **Backend (Express.js)**
1. **Node.js**: Runtime environment for executing JavaScript on the server.
2. **Express.js**: Lightweight web application framework for building REST APIs.
3. **MongoDB** (or another database): NoSQL database for storing user and playlist data.
4. **Mongoose**: ODM library for MongoDB, simplifies schema and query definitions.
5. **Dotenv**: For managing environment variables securely.
6. **JSON Web Tokens (JWT)**: For user authentication and session management.
7. **Bcrypt.js**: For hashing and securely storing passwords.
8. **Cors**: Middleware for handling cross-origin requests between frontend and backend.

2. **Frontend (React with Tailwind CSS)**
1. **React.js**: Frontend library for building user interfaces.
2. **Tailwind CSS**: Utility-first CSS framework for styling components.
3. **Axios**: For making HTTP requests to the backend API.
4. **React Router**: For managing routing and navigation between pages.
5. **Vite or Create React App**: For bootstrapping the React project.


3. **General Tools and Platforms**
1. **Git and GitHub**: Version control and repository management.
2. **Postman**: API testing tools for backend endpoints.
3. **Visual Studio Code**: Code editor for development.

# Task Details
Week one task was to create two folders backend and frontend and to integrate them at the end.
Development of the login and register functionality in my Spotify Clone project, the frontend uses React.js and Tailwind CSS to create responsive and visually appealing forms with proper validation. Backend development involves Express.js to set up RESTful APIs for handling user registration and login, with password encryption using bcrypt for security. Authentication is managed using JWT to ensure secure access control. MongoDB is utilized to store user credentials and related information. Additionally, the isAuth middleware ensures that only authenticated users can access protected routes, adding an extra layer of security. 
oast notifications are implemented using a library like react-toastify to provide real-time feedback for user actions, such as successful login, registration, or error handling. Cookies are used for secure storage of JSON Web Tokens (JWT) to manage user sessions. Upon successful login or registration, the server generates a token and sends it to the client, where it is stored as an HTTP-only cookie.Axios is used to handle HTTP requests between the frontend and backend. During login or registration, Axios sends user credentials securely to the backend API. 
