import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Artist(user, authenticated) {
  const [artist, setArtist] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    const getArtist = async () => {
      const response = await axios.get(`http://localhost:3001/artists/view`)
      console.log(response.data.name)
      setArtist(response.data)
    }
    getArtist()
  })

  if (!artist) {
    return <h2 className="loading">LOADING</h2>
  } else {
    return (user && authenticated) ? (
      <div className="flex justify-center">
        <div className="align-center mt-6 mb-24 md:mt-8 md:mb-16 grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-20 md:gap-y-10 md:grid-cols-4 md:grid-rows-3 artist-page">
          {artist.map((artists) => (
            <div className="" key={artists.id}>
              <div className=" hover:scale-110 transition">
                <img
                  className=" rounded-full hover:border-2 hover:border-green-400 transition"
                  src={artists.photo}
                  width="200px"
                  height="200px"
                />
                <h3 className=" font-semibold mt-2 text-lg text-center artistName">
                  {artists.name}{" "}
                </h3>
              </div>
            </div>
          ))}
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
