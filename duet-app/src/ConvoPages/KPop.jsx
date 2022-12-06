import Conversation from "../Pages/Conversation"

export default function KPop ({user, authenticated}) {

    if (!KPop) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="kpop-page">

                <Conversation  user={user} authenticated={authenticated} />

            </div>
        )
    }

}