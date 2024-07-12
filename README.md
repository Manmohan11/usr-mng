
# User Management System

This project is a simple User Management System that allows you to add, view, and search for users. It is built with a frontend and backend structure to manage users effectively.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Environment Variables](#environment-variables)

## Features

- **Add User**: Add new users by providing their first name, last name, email, gender, and age.
- **View Users**: View the list of users with sorting and pagination functionalities.
- **Search Users**: Search users by their email.

## Screenshots

### Add User
![Add User](add-user.png)

### Search User
![Search User](search-user.png)

### Main Dashboard
![Main Dashboard](main-dashboard.png)

## Setup Instructions

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine:

   \`\`\`sh
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   \`\`\`

2. Install dependencies for both frontend and backend:

   \`\`\`sh
   cd frontend
   npm install
   cd ../backend
   npm install
   \`\`\`

3. Set up environment variables for the backend:

   - Create a \`.env\` file in the \`backend\` folder.
   - Add the following line to the \`.env\` file, updating the URI for your database connection:

     \`\`\`env
     URI=mongodb://your-database-uri
     \`\`\`

### Running the Project

1. Start the frontend server:

   \`\`\`sh
   cd frontend
   npm run dev
   \`\`\`

2. Start the backend server:

   \`\`\`sh
   cd backend
   npm run dev
   \`\`\`

3. Open your browser and navigate to the address shown in the terminal to access the application.

## Usage

1. **Add a User**: Click the "Add User" button on the main dashboard, fill in the details, and submit the form.
2. **View Users**: The users will be displayed in a table format on the main dashboard with options to sort and paginate.
3. **Search Users**: Use the search bar to find users by their email.

## Environment Variables

The following environment variables need to be set for the backend to function properly:

- \`URI\`: The MongoDB connection string.

---

By following these instructions, you should be able to set up and run the User Management System on your local machine. If you encounter any issues, please refer to the troubleshooting section or contact support.
