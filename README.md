### AbhishekSahu_Task_1

### Project Overview
This is a full-stack web application built for the Full Stack Developer Task 1 for Enginow. The project demonstrates the core principles of the MERN stack (MongoDB, Express.js, React, Node.js) by creating a responsive website that integrates a frontend, backend API, and a database.

### Features
* **Responsive Frontend:** A multi-page application built with React, ensuring a seamless user experience on desktop, tablet, and mobile devices.
* **Dynamic Course Listings:** Fetches course data dynamically from the MongoDB database via a RESTful API and renders it on the Courses page.
* **Contact Form:** A functional contact form on the Contact Us page that captures user input and stores it securely in the database.
* **Secure Admin Panel:** A protected admin login page that allows authorized users to manage course content (add, edit, and delete).
### Technology Stack
* **Frontend:** React, HTML, CSS (Tailwind CSS)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Deployment:** 
### Project Structure
The project is structured into two main directories:
* **client/:** Contains the complete React application.
* **server/:** Contains the Node.js/Express backend, including API routes and database connection logic.
### Setup and Running Locally
Follow these steps to get the project up and running on your local machine.
1) Clone the Repository:
   
   ```git clone [https://github.com/Abhishek31Sahu/AbhishekSahu_Task_1.git](https://github.com/Abhishek31Sahu/AbhishekSahu_Task_1.git)```
   
   ```cd AbhishekSahu_Task_1```


### Backend Setup:
* **Navigate to the server directory:
`cd server`
* **Install dependencies:**
`npm install`
* **Create a `.env` file in the `server` directory and add your MongoDB connection string:**
`MONGO_URI=your_mongodb_connection_string`
* **Start the backend server:**
`npm start`
### Frontend Setup:
* **Navigate to the `client` directory:**
`cd ../client`
* **Install dependencies:**
`npm install`
* **Start the React application:**
`npm start`

The frontend will be available at `http://localhost:3000` and the backend API will be running on `http://localhost:5000` .

### Deployment
* **Frontend:** 
* **Backend:**
