import Conversation from "../Pages/Conversation"

export default function Rock () {

    if (!Rock) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="rock-page">

                <Conversation />

            </div>
        )
    }

}