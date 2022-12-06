import "./App.css"
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { CheckSession } from "./Services/Auth"
import GenreSelect from "./Pages/GenreSelect"
import ArtistSelect from "./Pages/ArtistSelect"
import Home from "./Pages/Home"
import Conversation from "./Pages/Conversation"
import Pop from "./ConvoPages/Pop"
import RNB from "./ConvoPages/RNB"
import Rock from "./ConvoPages/Rock"
import Rap from "./ConvoPages/Rap"
import KPop from "./ConvoPages/KPop"
import Connection from "./Pages/Connection"
import LikedProfile from "./ConPages/LikedProfile"
import BOI from "./ConPages/BOI"
import Genre from "./Pages/Genre"
import Artist from "./Pages/Artist"
import Register from "./Pages/Register"
import SignIn from "./Pages/SignIn"
import Header from "./Pages/Header"
import MobileHeader from "./Pages/MobileHeader"

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
    console.log("working", user, authenticated)
  }

  return (
    <div className="App">
      <div className=" invisible md:visible header">
        <Header
          className=' invisible md:visible'
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                authenticated={authenticated}
                user={user}
                handleLogOut={handleLogOut}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/genreselect"
            element={<GenreSelect user={user} authenticated={authenticated} />}
          />
          <Route
            path="/artistselect"
            element={<ArtistSelect user={user} authenticated={authenticated} />}
          />
          <Route
            path="/conversations"
            element={<Conversation user={user} authenticated={authenticated} />}
          />
          <Route
            path="/conversations/pop"
            element={<Pop user={user} authenticated={authenticated} />}
          />
          <Route
            path="/conversations/rnb"
            element={<RNB user={user} authenticated={authenticated} />}
          />
          <Route
            path="/conversations/rock"
            element={<Rock user={user} authenticated={authenticated} />}
          />
          <Route
            path="/conversations/rap"
            element={<Rap user={user} authenticated={authenticated} />}
          />
          <Route
            path="/conversations/kpop"
            element={<KPop user={user} authenticated={authenticated} />}
          />
          <Route path="/connections" element={<Connection />} />
          <Route
            path="/connections/likedprofiles"
            element={<LikedProfile user={user} authenticated={authenticated} />}
          />
          <Route
            path="/connections/boi"
            element={<BOI user={user} authenticated={authenticated} />}
          />
          <Route path="/genres" element={<Genre />} />
          <Route path="/artists" element={<Artist />} />
        </Routes>
      </div>
      <div className=" visible md:invisible  mobile-header">
        <MobileHeader
          className=' visible md:invisible'
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </div>
    </div>
  )
}

export default App
