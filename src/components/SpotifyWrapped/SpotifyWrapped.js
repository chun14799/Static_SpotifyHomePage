import "./spotifywrapped.scss"

const SpotifyWrapped = () => {
    return (
        <div className="spotify_wrapped">
            <div className="container">
                <div className="spotifywrapped_content">
                    <p className="tag">#SPOTIFYWRAPPED</p>
                    <h1 className="title">Ơn giời, Nhìn lại 2021 đây rồi.</h1>
                    <div className="sub_header">
                        <h2>Nhưng các cậu chỉ có thể xem trong ứng dụng Spotify. Hãy tải ứng dụng xuống ngay để khám phá thêm.</h2>
                    </div>
                    <div className="button">
                        <div className="app_store">
                            <a href="https://apps.apple.com/us/app/spotify-discover-new-music/id324684580">
                                <img src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-vi_VN.svg" alt="Tải xuống từ App Store" />
                            </a>
                        </div>
                        <div className="google_play">
                            <a href="https://play.google.com/store/apps/details?id=com.spotify.music">
                                <img src="https://www-growth.scdn.co/static/badges/svgs/google/badge-vi_VN.svg" alt="Tải về từ Google Play" />
                            </a>
                        </div>
                    </div>
                    <a href="https://open.spotify.com/genre/2021-page">Nghe lại các giai điệu nổi bật của năm 2021 tại đây.</a>
                </div>
            </div>
        </div>
    )
}


export default SpotifyWrapped