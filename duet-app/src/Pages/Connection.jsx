import { Link } from "react-router-dom"
import Header from "./Header"

export default function Connection() {
  if (!Connection) {
    return <h2 className="loading">LOADING</h2>
  } else {
    return (
      <div className="con-nav">
        <div className=" flex justify-evenly relative  text-sm font-semibold my-8 md:text-lg">
          <Link
            className=" text-sm w-32 md:text-lg md:w-40  liked-profiles-button"
            to="/connections/likedprofiles"
          >
            <button>LIKED PROFILES</button>
          </Link>
          <Link
            className=" text-sm w-44 md:text-lg md:w-52  boi-button"
            to="/connections/boi"
          >
            <buttons>BASED ON INTERESTS</buttons>
          </Link>
        </div>
      </div>
    )
  }
}
