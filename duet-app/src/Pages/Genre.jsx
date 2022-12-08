import Billie from "../Assets/billie.png"


export default function Genre() {

  if (!Genre) {
    return <h2 className="loading">LOADING</h2>
  } else {
    return (

    <div className="genre-page">
      
        <div className=" mt-4 w-72 h-52 pop-card">
        <h1 className=" absolute top-5 left-8 text-6xl font-semibold text-pink-500 md:text-7xl md:left-5">
            POP
        </h1>
        <img
            src={Billie}
            alt=""
            className=" absolute right-8 bottom-0 max-h-52 md:right-0"
        />
        </div>

    </div>
    
    )}
}
