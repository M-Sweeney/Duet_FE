import { Link } from "react-router-dom"
import Header from "./Header"

export default function Conversation () {

    if (!Conversation) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="con-nav">

                <Header />

                <div className=" flex justify-evenly relative  text-sm font-semibold mt-8 mb-14 md:text-lg">
                <Link className=" text-sm w-16 md:text-lg md:w-24  pop-button" to="/conversations/pop">
                    <button>POP</button>
                </Link>
                <Link className=" text-sm w-16 md:text-lg md:w-24  rnb-button" to="/conversations/rnb">
                    <button>R&B</button>
                </Link>
                <Link className=" text-sm w-16 md:text-lg md:w-24  rock-button" to="/conversations/rock">
                    <button>ROCK</button>
                </Link>
                <Link className=" text-sm w-16 md:text-lg md:w-24  rap-button" to="/conversations/rap">
                    <button>RAP</button>
                </Link>
                <Link className=" text-sm w-16 md:text-lg md:w-24  kpop-button" to="/conversations/kpop">
                    <button>K-POP</button>
                </Link>
                </div>
            </div>
        )
    }

}