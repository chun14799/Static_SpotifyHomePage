import "./header.scss"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">

                    <div className="logo">
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
                    </div>

                    <ul className="header_title">
                        <li>Premium</li>
                        <li>Hỗ trợ</li>
                        <li>Tải xuống</li>
                        <li>|</li>
                        <li>Đăng ký</li>
                        <li>Đăng nhập</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}


export default Header