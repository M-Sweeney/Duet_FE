import Billie from "../Assets/billie.png"
import RNB from "../Assets/theweeknd.png"
import Rap from "../Assets/drake.png"
import Kpop from "../Assets/lisa.png"
import Rock from "../Assets/beatles.png"
import Country from "../Assets/luke.png"
import Metal from "../Assets/metallica.png"
import Edm from "../Assets/edm.png"
import Latin from "../Assets/badbunny.png"
import Punk from "../Assets/theclash.png"
import Reggae from "../Assets/bobmarley.png"
import Funk from "../Assets/funk.png"


export default function Genre() {

if (!Genre) {
    return <h2 className="loading">LOADING</h2>
} else {
    return (

    <div className="flex justify-center">
    
    <div className=" grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-4 md:gap-10 mt-10 mb-24 genre-page">
        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all pop-card">
        <h1 className=" absolute top-5 left-3 text-5xl font-semibold text-pink-500 md:text-7xl md:left-3">
            POP
        </h1>
        <img
            src={Billie}
            alt=""
            className=" absolute right-8 bottom-0 max-h-44 md:right-8"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all rnb-card">
        <h1 className=" absolute top-5 left-3 text-5xl font-semibold text-yellow-400 md:text-6xl md:left-3">
            R&B
        </h1>
        <img
            src={RNB}
            alt=""
            className=" absolute right-5 bottom-0 max-h-44 md:right-8"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all rap-card">
        <h1 className=" absolute top-5 left-3 text-4xl font-semibold text-red-500 md:text-6xl md:left-3">
            RAP
        </h1>
        <img
            src={Rap}
            alt=""
            className=" absolute right-7 bottom-0 max-h-44 md:right-8"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all kpop-card">
        <h1 className=" absolute top-7 left-3 text-4xl font-semibold text-rose-400 md:text-5xl md:left-3">
            K-POP
        </h1>
        <img
            src={Kpop}
            alt=""
            className=" absolute right-8 bottom-0 max-h-44 md:right-8"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all rock-card">
        <h1 className=" absolute top-7 left-3 text-5xl font-semibold text-amber-100 md:text-6xl md:left-3">
            ROCK
        </h1>
        <img
            src={Rock}
            alt=""
            className=" absolute right-0 bottom-0 max-h-40 md:max-h-44 rounded-3xl md:right-0"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all country-card">
        <h1 className=" absolute top-7 left-3 text-2xl font-semibold text-green-300 md:text-4xl md:left-3">
            COUNTRY
        </h1>
        <img
            src={Country}
            alt=""
            className=" absolute right-0 bottom-0 max-h-44 rounded-3xl md:right-0"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all metal-card">
        <h1 className=" absolute top-7 left-3 text-6xl font-semibold text-cyan-500 md:text-6xl md:left-3">
            METAL
        </h1>
        <img
            src={Metal}
            alt=""
            className=" absolute right-8 bottom-0 max-h-44 rounded-3xl md:right-3"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all edm-card">
        <h1 className=" absolute top-7 left-3 text-5xl font-semibold text-red-600 md:text-5xl md:left-3">
            EDM
        </h1>
        <img
            src={Edm}
            alt=""
            className=" absolute right-4 bottom-0 max-h-44 rounded-3xl md:right-3"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all latin-card">
        <h1 className=" absolute top-7 left-3 text-4xl font-semibold text-sky-200 md:text-5xl md:left-3">
            LATIN
        </h1>
        <img
            src={Latin}
            alt=""
            className=" absolute right-0 bottom-0 max-h-48 rounded-3xl md:right-3"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all punk-card">
        <h1 className=" absolute top-7 left-3 text-5xl font-semibold text-indigo-200 md:text-5xl md:left-3">
            PUNK
        </h1>
        <img
            src={Punk}
            alt=""
            className=" absolute right-3 bottom-0 max-h-44 md:max-h-48 rounded-3xl md:right-3"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all reggae-card">
        <h1 className=" absolute top-7 left-3 text-3xl font-semibold text-amber-100 md:text-4xl md:left-3">
            REGGAE
        </h1>
        <img
            src={Reggae}
            alt=""
            className=" absolute right-3 bottom-0 max-h-48 rounded-3xl md:right-3"
        />
        </div>

        <div className=" mt-4 w-60 md:w-72 h-52 hover:scale-110 hover:border-green-400 transition-all funk-card">
        <h1 className=" absolute top-7 left-3 text-4xl font-semibold text-purple-600 md:text-5xl md:left-3">
            FUNK
        </h1>
        <img
            src={Funk}
            alt=""
            className=" absolute right-0 bottom-0 max-h-48 rounded-3xl md:right-3"
        />
        </div>

        </div>
    </div>
    
    )}
}
