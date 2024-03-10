import { NavLink } from "react-router-dom"

function NavBar() {
    const links = [
        {id:1 , link:'home'},
        {id:2 , link:'culture'},
        {id:3 , link:'politics'},
        {id:4 , link:'memes'},
        {id:5 , link:'sports'},
        {id:6 , link:'review'},
    ]
    return (
        <nav className=" bg-black flex h-16 items-center ">
                 <ul className="flex text-white mx-20 ">
           { links.map((link)=><li key={link.id} className="mr-8 " ><NavLink className="capitalize" to={`${link.link}`}>{link.link}</NavLink></li>)}
        </ul>
        </nav>
       
    )
}

export default NavBar
