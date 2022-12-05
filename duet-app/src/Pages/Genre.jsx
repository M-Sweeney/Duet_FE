import Header from "./Header"

export default function Genre() {
  if (!Genre) {
    return <h2 className="loading">LOADING</h2>
  } else {
    return <div className="genre-page"></div>
  }
}
