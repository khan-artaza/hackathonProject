import { Route, Routes } from "react-router-dom"

import AnarcWatch from "../pages/AnarcWatch"
import Home from "../pages/Home"
import AnarcSkin from "../pages/AnarcSkin"
import Login from "../pages/Login"
import OurStory from "../pages/OurStory"
import AnarcSkinDetails from "../pages/AnarcSkinDetails"
import Register from "../pages/Register"
import PrivateRoute from "../components/PrivateRoute"
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/anarc-watch" element={<AnarcWatch/>}/>
        <Route path="/anarcSkin" element={<AnarcSkin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/our-story" element={<OurStory/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route
    path="/anarcskindetail/:title"
    element={
      <PrivateRoute>
        <AnarcSkinDetails />
      </PrivateRoute>
    }
  />
    </Routes>
  )
}

export default MainRoutes
