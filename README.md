   # Blogging Web Application

   A modern blogging web application that allows users to create, update, and delete blogs. The app also supports user authentication and authorization with JWT tokens.

   ## Features

   - **User Authentication**: Login and registration with secure JWT-based authentication.
   - **Protected Routes**: Access restricted pages only after login.
   - **Blog Management**:
   - View, create, update, and delete blogs.
   - Blogs are sorted by the most recent.
   - **User-Friendly UI**:
   - Responsive design using Material-UI.
   - Real-time feedback via snackbars for success and error messages.
   - **RESTful API Integration**:
   - Backend APIs for user authentication and blog management.

   ## Technologies Used

   ### Frontend
   - React.js
   - React Router DOM
   - Material-UI
   - Axios
   - Notistack for notifications
   - CSS Modules and Tailwind CSS

   ### Backend
   - Node.js
   - Express.js
   - MongoDB
   - JWT Authentication

   ## Installation

   Follow these steps to set up and run the project locally.

   ### Prerequisites
   - Node.js and npm installed.
   - MongoDB database set up.
   - Backend API hosted or locally running.

   ### Frontend Setup
   1. Clone the repository:
      ```bash
      git clone <repository-url>
      ```
   2. Navigate to the project folder:
      ```bash
      cd blogging-web-app
      ```
   3. Install dependencies:
      ```bash
      npm install
      ```
   4. Set up the backend API endpoint:
      Open `src/App.js` and update the `config` object:
      ```javascript
      export const config = {
      backendEndpoint: "https://your-backend-url.com/v1",
      };
      ```
   5. Start the development server:
      ```bash
      npm start
      ```

   ### Backend Setup
   Refer to the backend repository for setup instructions.

   ## Usage

   ### Running the App
   1. Start the frontend server with `npm start`.
   2. Open your browser and navigate to `http://localhost:3000`.

   ### Login and Registration
   - Register a new account via the **Register** page.
   - Log in with your credentials to access the **Home** page.

   ### Blog Management
   - Use the "Add Blog" form to create a new blog.
   - Update or delete existing blogs using the controls on each blog card.

   ## Folder Structure

   ```
   src
   ├── components
   │   ├── AddBlog.jsx       // Add new blog functionality
   │   ├── BlogCard.jsx      // Display and manage individual blog posts
   │   ├── Home.jsx          // Home page, fetches and displays blogs
   │   ├── Login.jsx         // Login page
   │   ├── Navbar.jsx        // Navbar with logout functionality
   │   ├── Register.jsx      // Register page
   ├── App.js                // Main application component with routes
   ├── index.js              // Entry point of the application
   └── App.css               // Global styles
   ```

   ## API Endpoints

   | Endpoint               | Method | Description                      |
   |------------------------|--------|----------------------------------|
   | `/auth/register`       | POST   | Register a new user             |
   | `/auth/login`          | POST   | Log in an existing user         |
   | `/blogs/:userId`       | GET    | Fetch all blogs for a user      |
   | `/blogs/:id`           | DELETE | Delete a blog by ID             |
   | `/blogs/:id`           | PATCH  | Update a blog by ID             |

   ## Screenshots

   ### Login Page
   ![Login Page](https://github.com/user-attachments/assets/b96d6d61-1bcc-49b2-9a68-69ae4a948f69)

   ### Home Page
   ![Home Page](https://github.com/user-attachments/assets/2b7c4718-5a6a-4177-b563-c55680215996)


