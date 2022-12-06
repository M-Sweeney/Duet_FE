import { Link } from "react-router-dom"
import convos from "../Assets/icons8-multiple-messages-32.png"
import home from "../Assets/icons8-home-page-48.png"
import con from "../Assets/icons8-link-24.png"
import genres from "../Assets/icons8-music-album-48 (1).png"
import artists from "../Assets/icons8-micro-50.png"
import logout from "../Assets/icons8-logout-64 (1).png"

export default function MobileHeader({ authenticated, user, handleLogOut }) {
  console.log(user, authenticated)
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div className=" flex justify-evenly relative w-screen h-20 pt-4 mobile-navbar-div">
        
        <Link to="/conversations">
            <img className=" h-12" src={home} alt=""/>
        </Link>
        <Link to="/conversations">
            <img className=" h-12" src={convos} alt=""/>
        </Link>
        <Link to="/connections">
            <img className=" h-12" src={con} alt=""/>
        </Link>
        <Link to="/genres">
            <img className=" h-12" src={genres} alt=""/>
        </Link>
        <Link to="/artists">
            <img className=" h-12" src={artists} alt=""/>
        </Link>
        <Link onClick={handleLogOut} to="/signin">
            <img className=" h-12" src={logout} alt=""/>
        </Link>
      </div>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/register"> Register </Link>
      <Link to="/signin"> Sign In</Link>
    </nav>
  )

  return (
    <div>
      <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
    </div>
  )
}