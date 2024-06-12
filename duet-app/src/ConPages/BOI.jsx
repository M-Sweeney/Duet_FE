import Connection from "../Pages/Connection"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import jh from "../Assets/jh.jpeg"

export default function BOI ({ user, authenticated }) {
    const [boi, setBoi] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        const getBoi = async () => {
        const response = await axios.get(`http://localhost:3001/users/view`)
        setBoi(response.data)
        }
        getBoi()
    }, [])

    if (!boi) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (user && authenticated) ? (
            <div className="boi-page">

                <Connection />

                <div className=" mb-36">
                    <div>
                        <h1 className=" font-bold text-5xl md:text-7xl text-center mt-20 bog-title">BECAUSE YOU LIKE POP & R&B</h1>
                    </div>

                    <div className=" flex justify-evenly mt-24 md:mt-32">
                    <div className=" justify-center">
                        <img className="rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-36 md:h-64" src={boi[1].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-base md:text-lg text-center">{boi[1].name}</h1>
                        <h1 className=" text-pink-300 mt-10 font-semibold text-5xl md:text-6xl text-center">{boi[1].genreInterest}</h1>
                    </div>

                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-36 md:h-64" src={boi[2].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-base md:text-lg text-center">{boi[2].name}</h1>
                        <h1 className=" text-red-400 mt-10 font-semibold text-5xl md:text-6xl text-center">{boi[2].genreInterest}</h1>
                    </div>

                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-36 md:h-64" src={boi[12].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-base md:text-lg text-center">{boi[12].name}</h1>
                        <h1 className=" text-yellow-300 mt-10 font-semibold text-5xl md:text-6xl text-center">{boi[12].genreInterest}</h1>
                    </div>
                    </div>

                </div>

                <div>
                    <div className=" border-t-2 border-purple-400">
                        <h1 className=" font-bold text-5xl md:text-7xl text-center mt-36 md:mt-36 bog-title">BECAUSE YOU LIKE THE BEATLES</h1>
                    </div>

                    <div className=" flex justify-evenly mt-24 mb-40 md:my-32">
                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-36 md:h-64" src={jh} alt=""/>
                        <h1 className=" mt-5 font-semibold text-base md:text-lg  text-center">{boi[0].name}</h1>
                        <h1 className=" text-blue-300 mt-10 font-semibold text-2xl md:text-4xl text-center">{boi[0].artistInterest}</h1>
                    </div>

                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-36 md:h-64" src={boi[4].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-base md:text-lg text-center">{boi[4].name}</h1>
                        <h1 className=" text-red-500 mt-10 font-semibold text-2xl md:text-4xl text-center">{boi[4].artistInterest}</h1>
                    </div>

                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-36 md:h-64" src={boi[8].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-base md:text-lg text-center">{boi[8].name}</h1>
                        <h1 className=" text-orange-400 mt-10 font-semibold text-base md:text-2xl text-center">{boi[8].artistInterest}</h1>
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