import Header from "./Header"

export default function Artist() {
  if (!Artist) {
    return <h2 className="loading">LOADING</h2>
  } else {
    return <div className="artist-page"></div>
  }
}
