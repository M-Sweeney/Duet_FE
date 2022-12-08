import Connection from "../Pages/Connection"
import { useState, useEffect } from "react"
import axios from "axios"

export default function BOI ({ user, authenticated }) {

    const [boi, setBoi] = useState(null)

    useEffect(() => {
        const getBoi = async () => {
          const response = await axios.get(`http://localhost:3001/users/view`)
        //   console.log(response.data[0].name)
          setBoi(response.data)
        }
        getBoi()
      }, [])

      if (!boi) {
        return <h2 className="loading">LOADING</h2>
      } else {
        return !boi ? (
            <div>
            <h2 className="loading">Loading</h2>
          </div>
        ) : (
            <div className="boi-page">

                <Connection />

                <div>
                    <div>
                        <h1 className=" font-bold text-7xl text-center mt-20 bog-title">BECAUSE YOU LIKE POP & R&B</h1>
                    </div>

                    <div className=" flex justify-evenly mt-32">
                    <div className=" justify-center">
                        <img className="rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2  h-64" src={boi[1].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-lg text-center">{boi[1].name}</h1>
                        <h1 className=" text-pink-300 mt-10 font-semibold text-6xl text-center">{boi[1].genreInterest}</h1>
                    </div>

                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-64" src={boi[2].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-lg text-center">{boi[2].name}</h1>
                        <h1 className=" text-red-400 mt-10 font-semibold text-6xl text-center">{boi[2].genreInterest}</h1>
                    </div>

                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2  h-64" src={boi[12].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-lg text-center">{boi[12].name}</h1>
                        <h1 className=" text-yellow-300 mt-10 font-semibold text-6xl text-center">{boi[12].genreInterest}</h1>
                    </div>
                    </div>

                </div>

                <div>
                    <div>
                        <h1 className=" font-bold text-7xl text-center mt-48 bog-title">BECAUSE YOU LIKE THE BEATLES</h1>
                    </div>

                    <div className=" flex justify-evenly my-32">
                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-64" src={boi[0].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-lg text-center">{boi[0].name}</h1>
                        <h1 className=" text-blue-300 mt-10 font-semibold text-4xl text-center">{boi[0].artistInterest}</h1>
                    </div>

                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-64" src={boi[4].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-lg text-center">{boi[4].name}</h1>
                        <h1 className=" text-red-500 mt-10 font-semibold text-4xl text-center">{boi[4].artistInterest}</h1>
                    </div>

                    <div>
                        <img className=" rounded-full hover:scale-110 transition hover:border-green-300 hover:border-2 h-64" src={boi[8].photo} alt=""/>
                        <h1 className=" mt-5 font-semibold text-lg text-center">{boi[8].name}</h1>
                        <h1 className=" text-orange-400 mt-10 font-semibold text-2xl text-center">{boi[8].artistInterest}</h1>
                    </div>
                    </div>

                </div>


            </div>
        )
    }

}