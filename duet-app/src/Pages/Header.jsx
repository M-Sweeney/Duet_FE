import { Link } from "react-router-dom";

export default function Header ({ authenticated, user, handleLogOut }) {
    let authenticatedOptions
    if (user) {
    authenticatedOptions = (
        <nav>
        <h3>Welcome {user.email}!</h3>
        <Link to="/feed">Feed</Link>
        <Link onClick={handleLogOut} to="/">
        Sign Out
        </Link>
        </nav>
    )
    }

    const publicOptions = (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
    </nav>
    )

    return (
    <div>
        <div className=" flex justify-evenly relative  text-sm font-semibold my-5 md:text-lg">
            <div className="">
                <Link className=" text-left text-xl font-bold md:text-3xl" to="/">DUET</Link>
            </div>
            <Link to="/conversations">CONVERSATIONS</Link>
            <Link to="/connections">CONNECTIONS</Link>
            <Link to="/genres">GENRES</Link>
            <Link to="/artists">ARTISTS</Link>
            <Link to="/">LOG OUT</Link>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </div>
    </div>
    )
}