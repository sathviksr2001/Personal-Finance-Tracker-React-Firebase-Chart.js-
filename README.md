
# Personal Finance Tracker

A simple and easy-to-use Personal Finance Tracker app built using React, Firebase, and Tailwind CSS. This app helps users track their finances, including expenses and income, and manage their financial health. It supports user authentication using Firebase.

## Features

- **User Authentication**: Secure login and signup functionality using Firebase Authentication.
- **Dashboard**: A personalized dashboard that displays the user's email and is a starting point to track finances.
- **Tailwind CSS**: Beautiful, responsive UI with Tailwind CSS.
- **Firebase Backend**: Firebase setup for handling authentication and potential future backend services.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: For user authentication and potentially other backend features.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router DOM**: For handling routing and navigation within the app.

## Setup

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/finance-tracker.git
cd finance-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Firebase

- Go to [Firebase Console](https://console.firebase.google.com/).
- Create a new project.
- Go to the **Authentication** section, enable **Email/Password** authentication.
- Go to the **Project Settings** and copy your Firebase configuration details.

Create a `.env` file in the root of your project and add the following Firebase configuration:

```bash
VITE_API_KEY=your-api-key
VITE_AUTH_DOMAIN=your-auth-domain
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-storage-bucket
VITE_MESSAGING_SENDER_ID=your-sender-id
VITE_APP_ID=your-app-id
```

### 4. Run the App

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Folder Structure

```
finance-tracker/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── services/
│   │   └── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Authentication

The app uses Firebase Authentication to manage user sign-ups and logins. Users can sign up using their email and password, and upon successful authentication, they will be redirected to the dashboard.

## Future Improvements

- **Expense Tracker**: Implement a feature where users can add and track their expenses and income.
- **Charts/Graphs**: Display financial data in a graphical format (e.g., bar charts, pie charts) to visualize spending habits.
- **Mobile App**: Create a mobile version of the app using React Native.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any issues or feature requests, please open an issue on the GitHub repository or contact [sathviks.r2001@gmail.com](mailto:sathviks.r2001@gmail.com).
