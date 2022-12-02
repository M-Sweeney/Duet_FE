import Connection from "../Pages/Connection"

export default function LikedProfile () {

    if (!LikedProfile) {
        return <h2 className="loading">LOADING</h2>
    } else {
        return (
            <div className="liked-profile-page">

                <Connection />

            </div>
        )
    }

}