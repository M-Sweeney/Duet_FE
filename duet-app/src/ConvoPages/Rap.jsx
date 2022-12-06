import Conversation from "../Pages/Conversation"

export default function Rap ({user, authenticated}) {

    if (!Rap) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="rap-page">

                <Conversation  user={user} authenticated={authenticated} />

            </div>
        )
    }

}