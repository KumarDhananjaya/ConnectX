# ConnectX
 Welcome to ConnectX - the ultimate social media app designed to bring people together and foster meaningful connections across the globe. With ConnectX, building and nurturing relationships has never been easier or more enjoyable.

# Check it Out
# https://connectx-mern.netlify.app/


ConnectX - Social Media App

ConnectX is a social media application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to connect with friends, share posts, and engage in discussions.

<img width="1440" alt="Screenshot 2023-08-20 at 11 19 31 AM" src="https://github.com/KumarDhananjaya/ConnectX/assets/57564775/5f64167d-6fc6-4cbc-b04c-e12292761b60">


## Table of Contents

- Features
- Installation
- Usage
- Technologies Used
- Contributing

   - User Authentication: Users can sign up, log in, and log out securely.
   - Profile Management: Users can create and edit their profiles, including a profile picture, bio, and contact information.
   - Posts: Users can create, edit, and delete posts. They can also like and comment on posts.
   - Friendship: Users can send, accept, or reject friend requests. They can view their friends' posts on the dashboard.
   - Real-time Updates: Real-time notifications for new friend requests, likes, and comments.
   - Search: Users can search for other users by name or username.
   - Responsive Design: The app is fully responsive and works on various devices.

## Installation

To run this application locally, follow these steps:

Clone the Repository:
```
git clone https://github.com/KumarDhananjaya/ConnectX.git
```
Install Dependencies:
Navigate to both the client and server directories and install the dependencies.
```
# Inside the client directory
cd client
npm install
```

```
# Inside the server directory
cd ../server
npm install
```

Set Up Environment Variables:
Create .env files in the client and server directories and configure your environment variables. You'll need to set up a MongoDB database and obtain API keys for services like cloud storage and authentication.

Run the Application:
In both the client and server directories, start the development server:
```
# Inside the client directory
npm run start
```
```
# Inside the server directory
node index.js
```
The app should now be running on http://localhost:3000 (client) and http://localhost:3001 (server).
Usage

- User Registration: Sign up for an account if you're a new user. Provide your name, email, and a secure password.
- User Login: Log in with your registered email and password.
- Edit Profile: After logging in, edit your profile by adding a profile picture, bio, and contact information.
- Friend Requests: Send or accept friend requests from other users. You can also view your friends' posts on the dashboard.
- Create Posts: Share your thoughts by creating posts. You can edit or delete your posts and interact with other users' posts by liking and commenting.
- Search for Users: Use the search feature to find other users by their names or usernames.
  
## Technologies Used

### Frontend:
1. React
2. Formik + Yup form validation
3. Redux toolkit for state management
4. Redux with Persistent for local storage
5. React DropZone 
6. React Router for routing
7. Material-UI for the user interface

### Backend:
1. Node.js with Express.js
2. MongoDB for the database
3. Mongoose as the ODM (Object-Document Mapping)
4. JWT - JsonWebToken for authentication
5. Multer for file upload

## Contributing

Contributions to ConnectX are welcome! If you'd like to contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test them.
Submit a pull request with a clear description of your changes.
