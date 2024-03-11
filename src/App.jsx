import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Components/HomePage"
import Culture from "./Navigating-Pages/Culture/Culture"
import Politics from "./Navigating-Pages/Politics/Politics"
import Memes from "./Navigating-Pages/Memes/Memes"
import Sports from "./Navigating-Pages/Sports/Sports"
import Review from "./Navigating-Pages/Review/Review"


function App() {
  return (
    <Fragment>
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
   </Fragment>
  )
}

export default App
