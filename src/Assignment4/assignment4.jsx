import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// ✅ Header Component
function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="src/assets/logo.png" // replace with your own logo
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl font-bold">MyWebsite</h1>
      </div>

      {/* NavLinks */}
      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/userinfo"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          User Info
        </NavLink>
      </nav>
    </header>
  );
}

// ✅ Home Page
function Home() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to My Website</h2>
      <p className="text-gray-700">
        This is a simple Home Page designed with React Router. Navigate through
        the links to explore About and User Info pages.
      </p>
    </div>
  );
}

// ✅ About Page
function About() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700">
        We are a team of developers learning React and modern web technologies.
        This project demonstrates routing in React with multiple pages.
      </p>
    </div>
  );
}

// ✅ User Info Page
function UserInfo() {
  const user = {
    name: "Omkar",
    age: 21,
    dob: "2004-01-21",
    email: "narkaromkar65@gmail.com",
    image: "src/assets/logo.png",
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">User Information</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md inline-block">
        <img
          src={user.image}
          alt="User"
          className="w-32 h-32 mx-auto rounded-full mb-4"
        />
        <h3 className="text-2xl font-semibold">{user.name}</h3>
        <p className="text-gray-600">Age: {user.age}</p>
        <p className="text-gray-600">DOB: {user.dob}</p>
        <p className="text-gray-600">Email: {user.email}</p>
      </div>
    </div>
  );
}

// ✅ Not Found Page
function NotFound() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h2>
      <p className="text-gray-700">Oops! The page you are looking for does not exist.</p>
    </div>
  );
}

// ✅ Main Component (with Router)
export default function Assignment4() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
