import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Index extends React.Component {
    render() {
        return (

            <div id='#about'>
                <section id="reach-to" className="welcome-part home-icon">
                    <div className="icon-default">
                        <a href="#reach-to" className="scroll"><img src="asset/web/images//scroll-arrow.png" alt="" /></a>
                    </div>
                    <div className="container">
                        <div className="build-title">
                            <h1>Chào Mừng Bạn Đến Với ĐÔNG Á CHECK</h1>
                            <h4>Đến với Đông Á Check bạn có thể tin tưởng về nguồn gốc sản phẩm.</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <h5>Người tiêu dùng thông qua truy xuất nguồn gốc có thể trực tiếp tìm hiểu, thu thập thông tin về sản phẩm họ đã mua một cách đầy đủ và chi tiết nhất. Qua đó, hạn chế mua phải hàng kém chất lượng, hàng giả, hàng nhái, đặc biệt là những sản phẩm ảnh hưởng trực tiếp đến sức khỏe của người tiêu như  thực phẩm, dược phẩm hay đồ may mặc...

                                Về phía doanh nghiệp, truy xuất nguồn gốc giúp kiểm soát rủi ro phát sinh khi theo dõi, xác minh toàn bộ đường đi của hàng hóa. Đây không chỉ là bước để các doanh nghiệp tạo sự tin tưởng nơi khách hàng mà còn là “bức tường” bảo vệ uy tín của sản phẩm và doanh nghiệp, qua đó giúp doanh nghiệp hướng đến chinh phục thị trường quốc tế vốn đòi hỏi rất khắt khe về truy xuất nguồn gốc hàng hóa trong cả sản xuất lẫn thương mại. Đối với cơ quan quản lý nhà nước thì đây chính là công cụ hữu ích phục vụ cho công tác quản lý, kiểm soát thị trường hàng hóa.

Bên cạnh đó, truy xuất nguồn gốc hàng hóa cũng góp phần tạo thuận lợi cho hoạt động thương mại. Đối với xuất khẩu hàng hóa, nếu không đáp ứng được yêu cầu về truy xuất nguồn gốc thì sẽ mất đi lợi thế cạnh tranh. Khi áp dụng truy xuất nguồn gốc vào hàng hóa xuất khẩu, tức là đã tiến thêm một bước trong việc hội nhập sâu vào chuỗi giá trị chung. Còn đối với hàng hóa nhập khẩu, thông qua việc truy xuất có thể kiểm soát chất lượng của các mặt hàng nhập khẩu tốt hơn, tạo được niềm tin cho người tiêu dùng và sự cạnh tranh bình đẳng giữa hàng nhập khẩu và hàng sản xuất trong nước..</h5>
                                <p><img src="asset/web/images/KY.png" alt="" /></p>
                                <p><a href="#" className="btn-black">Xem Thêm ...</a></p>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <img src="asset/web/images/dua.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="float-main">
                        <div className="icon-top-left">
                            <img src="asset/web/images/icon1.png" alt="" />
                        </div>
                        <div className="icon-bottom-left">
                            <img src="asset/web/images/icon2.png" alt="" />
                        </div>
                        <div className="icon-top-right">
                            <img src="asset/web/images/icon3.png" alt="" />
                        </div>
                        <div className="icon-bottom-right">
                            <img src="asset/web/images/icon4.png" alt="" />
                        </div>
                    </div>
                </section>
                {/* End Welcome Part */}
                {/* Start Dishes Part */}
                {/* <section className="dishes banner-bg invert invert-black home-icon wow fadeInDown" data-background="asset/web/images/banner1.jpg" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="icon-default icon-black">
                        <img src="asset/web/images//scroll-arrow.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="build-title">
                            <h1>Chào Mừng Bạn Đến Với ĐÔNG Á CHECK</h1>
                            <h4>Đến với Đông Á Check bạn có thể tin tưởng về nguồn gốc sản phẩm.</h4>
                        </div>
                        <div className="slider multiple-items">
                            <div className="product-blog">
                                <img src="asset/web/images/d1.png" alt="" />
                                <h3>Dưa Hấu</h3>
                                <p>Thực phẩm tươi mát mùa hè.</p>

                            </div>
                            <div className="product-blog">
                                <img src="asset/web/images/d2.png" alt="" />
                                <h3>Thanh Long</h3>
                                <p>Thực phẩm tươi mát mùa hè.</p>

                            </div>
                            <div className="product-blog">
                                <img src="asset/web/images/d3.png" alt="" />
                                <h3>Chôm Chôm</h3>
                                <p>Thực phẩm tươi mát mùa hè.</p>
                            </div>
                            <div className="product-blog">
                                <img src="asset/web/images/d4.png" alt="" />
                                <h3>Sầu Riêng</h3>
                                <p>Thực phẩm tươi mát mùa hè.</p>
                            </div>
                            <div className="product-blog">
                                <img src="asset/web/images/d5.png" alt="" />
                                <h3>Măng Cụt</h3>
                                <p>Thực phẩm tươi mát mùa hè.</p>

                            </div>
                            <div className="product-blog">
                                <img src="asset/web/images/d6.png" alt="" />
                                <h3>Xoài</h3>
                                <p>Thực phẩm tươi mát mùa hè.</p>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>




        )
    }
}