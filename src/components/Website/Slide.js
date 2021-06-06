import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Slide extends React.Component {
    render() {
        return (
            <main>
                <section id="slide" className="slide">
                    <div>
                        <div >
                            <OwlCarousel items={1}
                                className="owl-theme"
                                loop
                                nav
                                autoplay
                                margin={8} >
                                <div className="slider__list">
                                    <div className="slider__item">
                                        <div className="slider__inner">
                                            <h1 className="slider__heading" style={{ color: '#0df209' }}>
                                                Đông Á
                                <span>CHECK</span>

                                            </h1>
                                            <p className="slider__title">
                                                Yên Tâm Về Xuất Xứ Và Nguồn Gốc .
                            </p>
                                        </div>
                                        <img className="slide__images" src="asset/web/images/sl3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="slider__list">
                                    <div className="slider__item">
                                        <div className="slider__inner">
                                            <h1 className="slider__heading" style={{ color: '#0df209' }}>
                                                Đông Á
                                <span>CHECK</span>

                                            </h1>
                                            <p className="slider__title">
                                                Yên Tâm Về Xuất Xứ Và Nguồn Gốc .
                            </p>
                                        </div>
                                        <img className="slide__images" src="asset/web/images/sl2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="slider__list">
                                    <div className="slider__item">
                                        <div className="slider__inner">
                                            <b>    <h1 className="slider__heading" style={{ color: '#0df209' }}>
                                                Đông Á
                                <span>CHECK</span>

                                            </h1></b>
                                            <p className="slider__title">
                                                Yên Tâm Về Xuất Xứ Và Nguồn Gốc .
                            </p>
                                        </div>
                                        <img className="slide__images" src="asset/web/images/sl1.jpg" alt="" />
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section ></main>

        )
    }
}
export default Slide;