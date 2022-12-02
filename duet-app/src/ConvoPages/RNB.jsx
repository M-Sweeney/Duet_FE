import Conversation from "../Pages/Conversation"

export default function RNB () {

    if (!RNB) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="rnb-page">

                <Conversation />

            </div>
        )
    }

}