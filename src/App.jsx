import React, { useEffect, useState } from "react";
import SplashScreen from "./components/splashScreen";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import { Toaster } from "react-hot-toast";
import MyListPage from "./pages/myListPage";
import CommunityPage from "./pages/communityPage";
import WritePage from "./pages/writePage";
import MorePage from "./pages/morePage";
import ProfilePage from "./pages/profilePage";
import ProtectedRoute from "./components/protectedRoute";
import BookDetail from "./pages/bookDetail";
import CreatePage from "./pages/createPage";
import EditBook from "./pages/editBook";
import { mockBooks } from "./data/mockData";

const App = () => {
  const [isSplashed, setIsSplashed] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || mockBooks
  );

  useEffect(() => {
    setTimeout(() => {
      setIsSplashed(true);
    }, 1000);
  }, []);

  const checkBooks = localStorage.getItem("books");

  if (!checkBooks) {
    localStorage.setItem("books", JSON.stringify(mockBooks));
  }

  if (!isSplashed) {
    return <SplashScreen />;
  }

  return (
    <div className="bg-slate-800 w-full">
      <div className="max-w-[400px] mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage user={user} books={books} isSplashed={isSplashed} />
            }
          />

          <Route
            path="/login"
            element={<LoginPage user={user} books={books} setUser={setUser} />}
          />
          <Route
            path="/sign-up"
            element={<SignupPage user={user} books={books} setUser={setUser} />}
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/my-list"
              element={<MyListPage user={user} books={books} />}
            />

            <Route
              path="/community"
              element={
                <CommunityPage user={user} books={books} setUser={setUser} />
              }
            />

            <Route
              path="/write"
              element={
                <WritePage user={user} books={books} setUser={setUser} />
              }
            />

            <Route
              path="/create"
              element={<CreatePage books={books} setBooks={setBooks} />}
            />

            <Route
              path="/edit/:id"
              element={<EditBook books={books} setBooks={setBooks} />}
            />

            <Route
              path="/more"
              element={<MorePage user={user} books={books} setUser={setUser} />}
            />

            <Route
              path="/profile"
              element={
                <ProfilePage user={user} books={books} setUser={setUser} />
              }
            />

            <Route
              path="/book/:id"
              element={
                <BookDetail user={user} books={books} setUser={setUser} />
              }
            />
          </Route>
        </Routes>
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default App;
