import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext"
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dogs-react" element={<Login />} />
            <Route path="login/*" element={<Login />}/>
            <Route path="conta/*" element={
              <ProtectedRoute>
                <User/>
              </ProtectedRoute>
            }/>
            <Route path="perfil/:user" element={<UserProfile />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
      </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
