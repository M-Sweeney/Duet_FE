import './App.css';
import { Route, Routes } from 'react-router-dom'
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

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/genreselect' element={<GenreSelect />}/>
          <Route path='/artistselect' element={<ArtistSelect />}/>
          <Route path='/conversations' element={<Conversation />}/>
          <Route path='/conversations/pop' element={<Pop />}/>
          <Route path='/conversations/rnb' element={<RNB />}/>
          <Route path='/conversations/rock' element={<Rock />}/>
          <Route path='/conversations/rap' element={<Rap />}/>
          <Route path='/conversations/kpop' element={<KPop />}/>
          <Route path='/connections' element={<Connection />}/>
          <Route path='/connections/likedprofiles' element={<LikedProfile />}/>
          <Route path='/connections/boi' element={<BOI />}/>
          <Route path='/genres' element={<Genre />}/>
          <Route path='/artists' element={<Artist />}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;
