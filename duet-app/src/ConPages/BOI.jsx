import Connection from "../Pages/Connection"

export default function BOI () {

    if (!BOI) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="boi-page">

                <Connection />

            </div>
        )
    }

}