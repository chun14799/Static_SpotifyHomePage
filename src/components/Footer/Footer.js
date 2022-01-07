import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="row">
                        <div className="logo col-2">
                            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
                        </div>
                        <ul className="col-2 company footer_content">
                            <li className="footer_title">CÔNG TY</li>
                            <li>Giới thiệu</li>
                            <li>Việc làm</li>
                            <li>For the Record</li>
                        </ul>
                        <ul className="col-2 social footer_content">
                            <li className="footer_title">CỘNG ĐỒNG</li>
                            <li>Dành cho các Nghệ sĩ</li>
                            <li>Nhà phát triển</li>
                            <li>Quảng cáo</li>
                            <li>Nhà đầu tư</li>
                            <li>Nhà cung cấp</li>
                        </ul>
                        <ul className="col-2 link footer_content">
                            <li className="footer_title">LIÊN KẾT HỮU ÍCH</li>
                            <li>Hỗ trợ</li>
                            <li>Trình phát Web</li>
                            <li>Ứng dụng di động Miễn phí</li>
                        </ul>
                        <ul className="col-2"></ul>
                        <ul className="col-2 social_icon">
                            <div className="icon">
                                <li>
                                    <a href="https://instagram.com/spotify"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/spotify"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://facebook.com/spotify"><i class="fab fa-facebook-f"></i></a>
                                </li>
                            </div>
                        </ul>

                    </div>
                    <div className="language">
                        <i class="fas fa-globe-asia"></i>
                        <span>Việt Nam(Tiếng Việt)</span>
                    </div>
                    <div className="bottom">
                        <ul className="right_bottom">
                            <li>Pháp lý</li>
                            <li>Trung tâm bảo mật</li>
                            <li>Chính sách Quyền riêng tư</li>
                            <li>Cookie</li>
                            <li>Giới thiệu Quảng cáo</li>
                        </ul>
                        <div className="left_bottom">
                            <i class="far fa-copyright"></i>
                            <span>2022 Spotify AB</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}


export default Footer