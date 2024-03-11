import NavBar from "./NavBar"
import Logo1 from "../assets/logo.png"
import Logo2 from "../assets/logo2.png"

function HomePage() {
    return (
        <header>
            <div className="flex items-center justify-between py-12 max-w-screen-2xl mx-auto ">
                <div className=""><img  className="h-20 "src={Logo1} alt="Logo"/></div>
                <div><img  className=" "src={Logo2} alt="Logo2"/></div>
            </div>
           <NavBar/>
       
        </header>
    )
}

export default HomePage
