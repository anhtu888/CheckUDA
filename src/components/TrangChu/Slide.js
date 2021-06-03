import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default class Slide extends React.Component {

    render() {
        return (
            <div className="banner header-text">
                <div className="owl-banner owl-carousel">
                    <div className="banner-item-01">
                        <div className="text-content">
                            <h4>Đông Á Check</h4>
                            <h2>Truy Xuất Nguồn Gốc</h2>
                        </div>
                    </div>
                    <div className="banner-item-02">
                        <div className="text-content">
                            <h4>Đông Á Check</h4>
                            <h2>Nguồn Gốc Sản Phẩm Rõ Ràng</h2>
                        </div>
                    </div>
                    <div className="banner-item-03">
                        <div className="text-content">
                            <h4>Đông Á Check</h4>
                            <h2>Yên Tâm Về Xuất Xứ</h2>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}