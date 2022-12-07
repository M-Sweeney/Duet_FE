import axios from "axios"
import { useState, useEffect } from "react"

export default function Artist() {
  const [artist, setArtist] = useState(null)

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
    return !artist ? (
      <div>
        <h2 className="loading">Loading</h2>
      </div>
    ) : (
      <div className="flex justify-center">
        <div className="align-center mt-6 mb-24 md:mt-8 md:mb-16 grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-20 md:gap-y-10 md:grid-cols-4 md:grid-rows-3 artist-page">
          {artist.map((artists) => (
            <div className="" key={artists.id}>
              <div className="artistDiv">
                <img
                  className=" rounded-full artistImage"
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
    )
  }
}
