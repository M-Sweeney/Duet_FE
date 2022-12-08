import Connection from "../Pages/Connection"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import heart from "../Assets/heart.png"
import jh from "../Assets/jh.jpeg"
import axios from "axios"

export default function LikedProfile ( user, authenticated ) {
    const [liked, setLiked] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        const getLiked = async () => {
        const response = await axios.get(`http://localhost:3001/users/view`)
        //   console.log(response.data[0].name)
        setLiked(response.data)
        }
        getLiked()
    }, [])

    if (!liked) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (user && authenticated) ? (
        
            <div className=" justify-center relative liked-profile-page">

                <Connection  user={user} authenticated={authenticated} />

            <div className=" grid grid-cols-2 justify-evenly justify-items-center align-center md:grid-cols-4 md:grid-rows-2 md:gap-10">

                <div className=" hover:scale-110 transition hover:border-green-300 hover:border-2 h-96 w-56 my-10 mx-0 liked-card">
                    <div className=" flex justify-center">
                        <img className=" mt-8 rounded-full h-40" src={jh} alt=""/>
                    </div>
                    <div>
                        <h1 className=" mt-6 font-semibold text-xl text-center">{liked[0].name}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-10 mt-5">
                        <h1 className=" text-teal-400">GENRE</h1>
                        <h1 className="">{liked[0].genreInterest}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-6 mt-5">
                    <h1 className=" text-yellow-400">ARTIST</h1>
                    <h1 className="">{liked[0].artistInterest}</h1>
                    </div>
                    <div className=" ">
                        <img className=" absolute h-16 -left-6 -bottom-5" src={heart} alt=""/>
                    </div>
                </div>



                <div className=" hover:scale-110 transition  hover:border-green-300 hover:border-2 h-96 w-56  my-10 liked-card">
                    <div className=" flex justify-center">
                        <img className=" mt-8 rounded-full h-40" src={liked[1].photo} alt=""/>
                    </div>
                    <div>
                        <h1 className=" mt-6 font-semibold text-xl text-center">{liked[1].name}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-10 mt-5">
                        <h1 className=" text-teal-400">GENRE</h1>
                        <h1 className="">{liked[1].genreInterest}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-6 mt-5">
                    <h1 className=" text-yellow-400">ARTIST</h1>
                    <h1 className="">{liked[1].artistInterest}</h1>
                    </div>
                    <div className=" ">
                        <img className=" absolute h-16 -left-6 -bottom-5" src={heart} alt=""/>
                    </div>
                    
                </div>


                <div className=" hover:scale-110 transition  hover:border-green-300 hover:border-2 h-96 w-56  my-10 liked-card">
                    <div className=" flex justify-center">
                        <img className=" mt-8 rounded-full h-40" src={liked[2].photo} alt=""/>
                    </div>
                    <div>
                        <h1 className=" mt-6 font-semibold text-xl text-center">{liked[2].name}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-10 mt-5">
                        <h1 className=" text-teal-400">GENRE</h1>
                        <h1 className="">{liked[2].genreInterest}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-6 mt-5">
                    <h1 className=" text-yellow-400">ARTIST</h1>
                    <h1 className="">{liked[2].artistInterest}</h1>
                    </div>
                    <div className=" ">
                        <img className=" absolute h-16 -left-6 -bottom-5" src={heart} alt=""/>
                    </div>
                    
                </div>


                <div className=" hover:scale-110 transition  hover:border-green-300 hover:border-2 h-96 w-56  my-10 liked-card">
                    <div className=" flex justify-center">
                        <img className=" mt-8 rounded-full h-40" src={liked[3].photo} alt=""/>
                    </div>
                    <div>
                        <h1 className=" mt-6 font-semibold text-xl text-center">{liked[3].name}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-10 mt-5">
                        <h1 className=" text-teal-400">GENRE</h1>
                        <h1 className="">{liked[3].genreInterest}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-6 mt-5">
                    <h1 className=" text-yellow-400">ARTIST</h1>
                    <h1 className="">{liked[3].artistInterest}</h1>
                    </div>
                    <div className=" ">
                        <img className=" absolute h-16 -left-6 -bottom-5" src={heart} alt=""/>
                    </div>
                    
                </div>


                <div className=" hover:scale-110 transition  hover:border-green-300 hover:border-2 h-96 w-56 mt-10 mb-36 md:mt-0 liked-card">
                    <div className=" flex justify-center">
                        <img className=" mt-8 rounded-full h-40" src={liked[4].photo} alt=""/>
                    </div>
                    <div>
                        <h1 className=" mt-6 font-semibold text-xl text-center">{liked[4].name}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-10 mt-5">
                        <h1 className=" text-teal-400">GENRE</h1>
                        <h1 className="">{liked[4].genreInterest}</h1>
                    </div>
                    <div className="flex justify-evenly font-bold text-xl gap-6 mt-5">
                    <h1 className=" text-yellow-400">ARTIST</h1>
                    <h1 className="">{liked[4].artistInterest}</h1>
                    </div>
                    <div className=" ">
                        <img className=" absolute h-16 -left-6 -bottom-5" src={heart} alt=""/>
                    </div>
                    
                </div>
</div>
            </div>
    ) : ( 
        <div className='protected'>
        <h3>Oops! You must be signed in to do that!</h3>
        <button onClick={()=> navigate('/signin')}>Sign in</button>
        </div>
    )
    }

}