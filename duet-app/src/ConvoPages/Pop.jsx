import Conversation from "../Pages/Conversation"

export default function Pop () {

    if (!Pop) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="pop-page">

                <Conversation />

            </div>
        )
    }

}