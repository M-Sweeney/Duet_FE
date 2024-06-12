import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Conversation({ user, authenticated }) {
  let navigate = useNavigate()

  let authenticatedOptions = (
    <div className=" flex justify-evenly relative  text-sm font-semibold mt-8 mb-14 md:text-lg">
      <Link
        className=" text-sm w-16 md:text-lg md:w-24  pop-button"
        to="/conversations/pop"
      >
        <button>POP</button>
      </Link>
      <Link
        className=" text-sm w-16 md:text-lg md:w-24  rnb-button"
        to="/conversations/rnb"
      >
        <button>R&B</button>
      </Link>
      <Link
        className=" text-sm w-16 md:text-lg md:w-24  rock-button"
        to="/conversations/rock"
      >
        <button>ROCK</button>
      </Link>
      <Link
        className=" text-sm w-16 md:text-lg md:w-24  rap-button"
        to="/conversations/rap"
      >
        <button>RAP</button>
      </Link>
      <Link
        className=" text-sm w-16 md:text-lg md:w-24  kpop-button"
        to="/conversations/kpop"
      >
        <button>K-POP</button>
      </Link>
    </div>
  )

  let publicOptions = (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign in</button>
    </div>
  )

  return (
    <div className="con-nav">
      {user && authenticated ? authenticatedOptions : publicOptions}
    </div>
  )
}
