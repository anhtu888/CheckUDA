import React from 'react';
import Header from './Header'
import Footer from './Footer'
import MenuFooter from './MenuFooter';

export default class About extends React.Component {
    render() {
        return (
            <>
                <Header />
                <section className="home-main">
                    {/* Breadcrumbs */}
                    <div className="breadcrumbs">
                        <div className="container">
                            <ul>
                                <li className="home"> <a href="/" title="Trở về trang chủ">Trang chủ</a> <span>//</span></li>
                                <li className="category13"><strong>Giới thiệu</strong></li>
                            </ul>
                            <div className="st-border" />
                        </div>
                    </div>
                    {/* main-container */}
                    <div className="main-container col2-right-layout">
                        <div className="main container">
                            <div className="row">
                                <section className="col-main col-md-9 col-sm-12 wow bounceInUp animated">
                                    <div className="page-title">
                                        <h1>Giới thiệu</h1>
                                    </div>
                                    <div className="static-contain">
                                        <p><strong>TIÊU CHÍ CỦA SHOP THỰC PHẨM SẠCH BẢO PHÚC LÀ CHỈ SỬ DỤNG THỰC PHẨM SẠCH, RÕ</strong></p>
                                        <p><strong>NGUỒN GỐC, KHÔNG HÓA CHẤT NHẰM BẢO VỆ SỨC KHỎE NGƯỜI TIÊU DÙNG</strong></p>
                                        <p>Thưa các mẹ,</p>
                                        <p>Thật ra, Shop THỰC PHẨM SẠCH BẢO PHÚC ra đời là vì mẹ cháu đã có sở thích từ lâu; bởi vốn bản tính năng động và....thích làm cái gì đó để chia sẻ với bà con, bạn bè. Đang loay hoay mở lối thì vấn đề an toàn thực phẩm trở thành mối quan tâm chung và đặc biệt quan trọng với chúng ta. Bởi nếu không cố gắng để kiểm soát nó thì sức khỏe chúng ta bị đánh đổi hàng ngày qua bữa ăn, thậm chí tính mạng các thế hệ con cái rất dễ bị đe dọa. Mặt khác, về mặt kinh tế, một đồng chi cho phòng ngừa sẽ có thể tiết kiệm chi hàng triệu đồng cho khắc phục hậu quả.<br />
                                            .Bởi thế nhà mình hay lo xa, lại thích ăn ngon (hic), hay tự tìm nguồn thực phẩm sạch cho gia đình. Và từ đó ý tưởng mở lối “làm cái gì đó” dẫn dắt. Câu hỏi đặt ra là tại sao kết nối được nguồn thực phẩm sạch và ngon, trong khi bạn bè, người quen cũng cần như mình, mà lại không đáp ứng? Nếu cố gắng tìm cách đáp ứng nhu cầu này của các mẹ, đươc các mẹ hưởng ứng và chia sẻ, thì hai bên và cả nhà đều vui, có phải không?<br />
                                            Vậy nên các mẹ hãy yên tâm, trước khi Thực phầm sạch đến tay các mẹ, nhà mình đã thử nghiệm và kiểm tra thậm chí từ vài lần đến hàng năm nay rồi nhé. Ví dụ như hải sản Phú Quốc (hay ở quê nội BẢO PHÚC) là nguồn thực phẩm sạch và tươi ngon, được đánh bắt bởi thuyền nhỏ gần bờ, sản phẩm chưa qua ướp lạnh lâu ngày như các tàu thuyền đánh bắt xa bờ, nhà mình đã kiểm tra, hướng dẫn cách chọn mua và cấp đông ngay khi tôm cá đang cựa quậy.<br />
                                            Với phương châm nhà mình dùng gì thì phục vụ bạn bè, các mẹ cũng như thế. Tuy nhiên do đặc thù nguồn hàng được chọn kỹ và chủ yếu nguồn gốc tự nhiên, cho nên có thể không phải lúc nào cũng đáp ứng được nhu cầu “có ngay, có ngay” của các mẹ. Bởi vì hải sản biển thì phụ thuộc vào con nước, tuần trăng (không phải tuần trăng mật nhé các mẹ !), ngay cả tôm cá đồng cũng không thường xuyên có,, mà nền đặt trước.<br />
                                            Kính các mẹ và rất mong các mẹ ủng hộ, mong tất cả chúng ta và cộng đồng luôn có bữa ăn với THỰC PHẨM SẠCH BẢO PHÚC , ngon và sức khỏe tốt.</p>
                                        <p>Chúc cho các gia đình chúng ta luôn vui, khỏe với những bữa ăn ngon với THỰC PHẨM SẠCH BẢO PHÚC !</p>
                                    </div>
                                </section>
                                <aside className="sidebar col-right col-md-3 col-xs-12 col-sm-12">
                                    <div className="block blog-sidebar">
                                        <div className="title">
                                            <h2>Tin mới</h2>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="list-article">
                                                <li><a href="/cach-nhan-biet-chuoi-chin-tu-nhien-va-chuoi-chin-do-nhung-hoa-chat">Cách nhận biết chuối chín tự nhiên và chuối chín do nhúng hóa chất</a></li>
                                                <li><a href="/nhung-nguoi-nay-khong-nen-an-dua-trong-dong">Những người này không nên ăn dứa trong đông</a></li>
                                                <li><a href="/3-bi-quyet-lua-chon-thuc-pham-sach">3 bí quyết lựa chọn thực phẩm sạch</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block policy">
                                        <div className="policy-content">
                                            <div className="policy-1">
                                                <a href="/chinh-sach"><i className="fa fa-gift" /> Chính sách quà tặng</a>
                                            </div>
                                            <div className="policy-2">
                                                <a href="/dieu-khoan"><i className="fa fa-truck" /> Chính sách vận chuyển</a>
                                            </div>
                                            <div className="policy-3">
                                                <a href="/huong-dan"><i className="fa fa-shopping-basket" /> Chính sách Mua hàng</a>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    {/*End main-container */}
                </section>
                <MenuFooter />
                <Footer />
            </>
        )
    }
}