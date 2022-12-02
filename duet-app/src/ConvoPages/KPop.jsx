import Conversation from "../Pages/Conversation"

export default function KPop () {

    if (!KPop) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="kpop-page">

                <Conversation />

            </div>
        )
    }

}