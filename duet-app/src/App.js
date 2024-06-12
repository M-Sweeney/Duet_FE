import "./App.css"
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { CheckSession } from "./Services/Auth"
import Pop from "./ConvoPages/Pop"
import RNB from "./ConvoPages/RNB"
import Rock from "./ConvoPages/Rock"
import Rap from "./ConvoPages/Rap"
import KPop from "./ConvoPages/KPop"
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
          className=" invisible md:visible"
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
              <Pop
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
            path="/conversations"
            element={<Pop user={user} authenticated={authenticated} />}
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
          <Route path="/connections" element={<LikedProfile />} />
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
          className=" visible md:invisible"
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </div>
    </div>
  )
}

export default App
