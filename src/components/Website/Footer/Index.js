import React from 'react';
export default class Index extends React.Component {
    render() {

        return (
            <footer>
                <div className="footer-part wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="icon-default icon-dark">
                        <img style={{ maxWidth: '60%' }} src="asset/web/images/logo.png" alt="" />
                    </div>
                    <div className="container">
                        {/* <div className="footer-inner">
                            <div className="footer-info">
                                <h3>Đông Á CHECK</h3>
                                <p>33 Xô Viết Nghệ Tĩnh - Hải Châu - Đà Nẵng</p>
                                <p><a href="#">123 456 7890</a></p>
                                <p><a href="#">donga@uda.edu</a></p>
                            </div>
                        </div> */}
                        <div className="copy-right">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12 copyright-before" style={{ marginTop: '100px' }}>
                                    <span>Copyright © 2021 Đông Á UDA.</span>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 copyright-after">

                                    <div className="social-round">
                                        {/* <ul>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-google" aria-hidden="true" /></a></li>
                                        </ul> */}
                                        <h3>Đông Á CHECK</h3>
                                        <p>33 Xô Viết Nghệ Tĩnh - Hải Châu - Đà Nẵng</p>
                                        <p><a href="#">123 456 7890</a></p>
                                        <p><a href="#">donga@uda.edu</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon-find">
                        <a href="#">
                            <img className="icon__footer" src="asset/web/images/arrow-top.png" alt="" />
                            {/* <span>Find us on Map</span> */}
                        </a>
                    </div>
                    <div className="location-footer-map">
                        <div className="icon-find-location">
                            <a href="#">
                                <img src="asset/web/images/location.png" alt="" />
                                <span>Find us on Map</span>
                            </a>
                        </div>
                        <div className="footer-map-outer">
                            <div id="footer-map" />
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}