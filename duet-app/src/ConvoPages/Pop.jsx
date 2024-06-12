import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Conversation from "../Pages/Conversation"
import Billie from "../Assets/billie.png"
import heart from "../Assets/heart.png"
import CreateComment from "../CommentCRUD/CreateComment"
import DeleteComment from "../CommentCRUD/DeleteComment"
import UpdateComment from "../CommentCRUD/UpdateComment"

export default function Pop({ user, authenticated }) {
const [pop, setPop] = useState(null)
const [isToggled, setIsToggled] = useState(false)
const [isToggledEdit, setIsToggledEdit] = useState(false)
const [isCurrent, setCurrent] = useState(null)
let navigate = useNavigate()

useEffect(() => {
    const getPop = async () => {
    const response = await axios.get(`http://localhost:3001/comments/view`)
    setPop(response.data)
    }
    getPop()
})

if (!pop) {
    return <h2 className="loading">LOADING</h2>
} else {
    return (user && authenticated) ? (
    <div className=" relative pop-page">
        <Conversation user={user} authenticated={authenticated} />

        <div className=" mt-4 mx-auto w-10/12 h-52 pop-card">
        <h1 className=" absolute top-10 left-8 text-6xl font-semibold text-pink-500 md:text-7xl md:left-20">
            POP
        </h1>
        <h1 className=" absolute top-24 left-8 text-6xl font-semibold text-pink-500 md:text-7xl md:left-44">
            NOW
        </h1>
        <img
            src={Billie}
            alt=""
            className=" absolute right-8 bottom-0 max-h-60 md:right-36"
        />
        </div>

        <div className=" creat-comment-button-div">
        <button
            onClick={() => setIsToggled(!isToggled)}
            className=" ml-0 mr-0 font-semibold text-base w-52 md:text-xl md:w-64 create-comment-button"
        >
            START A CONVO
        </button>
        {isToggled && <CreateComment user={user} />}
        </div>

        {pop
        .slice(0)
        .reverse()
        .map((pops) => (
            <div
            className=" my-7 mx-auto w-10/12 h-24 post-comment"
            key={pops.id}
            >
            <div className=" profile-name">
                <h2 className=" absolute text-xs top-1 left-7 font-semibold md:text-base md:top-0 md:left-10">
                {pops.name}
                </h2>
                <img
                src={pops.photo}
                alt=""
                className=" absolute rounded-full h-11 top-6 left-5 md:h-14 md:top-5 md:left-7"
                />
            </div>

            <div className=" absolute top-6 left-28 text-xs w-1/2 md:text-base md:top-6 md:left-40 md:w-2/4 post-content">
                <h1 className=" font-medium">{pops.content}</h1>

            </div>

            {user.id === pops.user_id ? (

                <div>
                <button
                    className=" absolute text-green-400 z-4 text-xs -bottom-0 right-32 md:-bottom-0 md:right-48 font-semibold"
                    onClick={() => {
                    setIsToggledEdit(!isToggledEdit)
                    setCurrent(pops.id)
                    }}
                >
                    EDIT

                </button>
                {isToggledEdit && isCurrent === pops.id ? (

                    <UpdateComment
                    user={user}
                    pops={pops}
                    setIsToggledEdit={setIsToggledEdit}
                    isToggledEdit={isToggledEdit}
                    />
                ) : null}
                </div>
            ) : null}

            <div>
                {user.id === pops.user_id ? (
                <DeleteComment user={user} comment={pops.id} />
                ) : null}
            </div>

            <div className=" post-likes">
                <img
                src={heart}
                alt=""
                className=" absolute right-12 bottom-2 h-5 md:right-20 md:bottom-2 md:h-7 "
                />
                <h4 className=" absolute right-8 bottom-1 md:right-16 md:bottom-3 ">
                {pops.likes}
                </h4>
            </div>
            </div>
        ))}
    </div>
    ) : ( 
        <div className='protected'>
        <h3 className=" font-bold text-4xl text-center mt-48 oops">Oops! You must be signed in to do that!</h3>
        <button className=" ml-0 mr-0 font-semibold text-base w-52 md:text-5xl md:w-64 md:h-24 create-comment-button" onClick={()=> navigate('/signin')}>SIGN IN</button>
        </div>
    )
}
}