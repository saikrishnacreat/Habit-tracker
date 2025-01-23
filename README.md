# Habit Tracker

## **Overview**

The Habit Tracker is a web application designed to help users develop and maintain positive habits. It allows users to create, manage, and monitor their daily, weekly, or monthly habits in an intuitive and user-friendly interface. The project is built with modern web technologies and follows best practices for clean and scalable code.

---

## **Features**

- **Add Habits:** Users can create habits by providing a name, description, and frequency (daily, weekly, or monthly).
- **Track Progress:** Visualize habit completion status through charts or calendars.
- **Edit/Delete Habits:** Update or remove habits as needed.
- **Reminders:** Optional notifications to remind users to complete their habits.
- **Authentication:** Secure user login and signup using JWT (JSON Web Tokens).
- **Responsive Design:** Fully functional on both desktop and mobile devices.

---

## **Tech Stack**

### **Frontend:**

- React.js (with hooks for state management)
- CSS/SCSS for styling
- Axios for API calls

### **Backend:**

- Node.js with Express.js
- MongoDB for database
- Mongoose for database schema modeling

### **Tools:**

- Git and GitHub for version control
- Postman for API testing
- Vercel/Netlify (Frontend Hosting)
- Render/Heroku (Backend Hosting)

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone <repository-url>
```

### **2. Navigate to the Project Directory**

```bash
cd habit-tracker
```

### **3. Install Dependencies**

#### Frontend:

```bash
cd client
npm install
```

#### Backend:

```bash
cd server
npm install
```

### **4. Set Up Environment Variables**

Create a `.env` file in the `server` directory with the following:

```env
PORT=5000
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your Secret Key>
```

### **5. Start the Application**

#### Run Backend:

```bash
cd server
npm start
```

#### Run Frontend:

```bash
cd client
npm start
```

The app will be available at `http://localhost:3000`.

---

## **Folder Structure**

### **Frontend (Client)**

```
client/
├── public/
├── src/
│   ├── components/    # Reusable components (e.g., Navbar, HabitCard)
│   ├── pages/         # Page components (e.g., Home, Login, Dashboard)
│   ├── utils/         # Helper functions
│   ├── App.js         # Main app component
│   └── index.js       # Entry point
└── package.json
```

### **Backend (Server)**

```
server/
├── models/            # MongoDB schemas
├── routes/            # API routes
├── controllers/       # Route logic
├── middlewares/       # Middleware functions (e.g., auth)
├── server.js          # Entry point
└── package.json
```

---

## **API Endpoints**

### **Authentication**

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login a user

### **Habits**

- **GET** `/api/habits` - Get all habits
- **POST** `/api/habits` - Create a new habit
- **PUT** `/api/habits/:id` - Update a habit
- **DELETE** `/api/habits/:id` - Delete a habit

---

## **Future Enhancements**

- Add analytics to show long-term progress.
- Integrate a social feature to allow habit sharing with friends.
- Enable offline functionality using service workers.
- Add themes for better personalization.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

## **Contact**

For questions or support, contact saikrishnaask191\@gmail.com or open an issue on the repository.

