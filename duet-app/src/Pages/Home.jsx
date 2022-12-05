import { useState } from "react"
import Header from "./Header"

export default function Home() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div>
      {/* <div className="header">
        <Header
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </div> */}
    </div>
  )
}
