import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Sign_In from "./pages/Sign_In"
import Sign_Up from "./pages/Sign_Up"
import Header from "./components/Header"


function App() {

  return (
    <BrowserRouter>

    <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Sign_In />} />
        <Route path="/sign-up" element={<Sign_Up />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
