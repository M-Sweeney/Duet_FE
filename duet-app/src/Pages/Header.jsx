import { Link } from "react-router-dom";

export default function Header () {

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
        </div>
    </div>
    )
}