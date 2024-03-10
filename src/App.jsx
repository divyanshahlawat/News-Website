import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Culture from "./Pages/Culture"
import Politics from "./Pages/Politics"
import Memes from "./Pages/Memes"
import Sports from "./Pages/Sports"
import Review from "./Pages/Review"


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='culture' element={<Culture/>}/>
    <Route path="politics" element={<Politics/>}/>

    <Route path="memes" element={<Memes/>}/>
    <Route path="sports" element={<Sports/>}/>
    <Route path="review" element={<Review/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
