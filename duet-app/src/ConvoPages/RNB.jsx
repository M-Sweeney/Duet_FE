import Conversation from "../Pages/Conversation"

export default function RNB ({user, authenticated}) {

    if (!RNB) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="rnb-page">

                <Conversation  user={user} authenticated={authenticated} />

            </div>
        )
    }

}