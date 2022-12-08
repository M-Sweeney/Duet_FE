import { Link } from "react-router-dom"

export default function Header({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div className=" flex justify-evenly relative  text-sm font-semibold md:my-5 md:text-lg">
        <div className="">
          <Link
            className=" text-left text-xl font-bold md:text-3xl"
            to="/conversations/pop"
          >
            DUET
          </Link>
        </div>

        <Link to="/conversations/pop">CONVERSATIONS</Link>
        <Link to="/connections">CONNECTIONS</Link>
        <Link to="/genres">GENRES</Link>
        <Link to="/artists">ARTISTS</Link>
        <h3>Welcome {user.name}!</h3>
        <Link onClick={handleLogOut} to="/">
          LOG OUT
        </Link>
      </div>
    )
  }

  const publicOptions = (
    <nav className="flex justify-end gap-5 mr-5 mt-5 publicOptions">
      <Link to="/">Home </Link>
      <h1>|</h1>
      <Link to="/register"> Register </Link>
      <h1>|</h1>
      <Link to="/signin"> Sign In</Link>
    </nav>
  )

  return (
    <div>
      <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
    </div>
  )
}
